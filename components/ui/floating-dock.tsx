"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

// -- Horizontal dock (original Aceternity behaviour) ---------------------------

type DockItem = { title: string; icon: React.ReactNode; href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void };

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <FloatingDockDesktop items={items} className={desktopClassName ?? mobileClassName} />
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-16 items-end gap-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl px-4 pb-3 shadow-black/10",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainerH mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainerH({
  mouseX, title, icon, href, onClick,
}: {
  mouseX: MotionValue; title: string; icon: React.ReactNode; href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    const b = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - b.x - b.width / 2;
  });
  const size     = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), { mass: 0.1, stiffness: 150, damping: 12 });
  const iconSize = useSpring(useTransform(distance, [-150, 0, 150], [20, 40, 20]), { mass: 0.1, stiffness: 150, damping: 12 });
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} onClick={onClick}>
      <motion.div ref={ref} style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-9 left-1/2 w-fit rounded-lg border border-gray-200 bg-white shadow px-2.5 py-1 text-xs whitespace-pre text-gray-700 font-medium">
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

// -- Vertical dock (for fixed right-side usage) --------------------------------

export const FloatingDockVertical = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; target?: string }[];
  className?: string;
}) => {
  const mouseY = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "flex flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl px-3 py-4",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainerV mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainerV({
  mouseY, title, icon, href, target,
}: {
  mouseY: MotionValue; title: string; icon: React.ReactNode; href: string; target?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseY, (val) => {
    const b = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - b.y - b.height / 2;
  });
  const size     = useSpring(useTransform(distance, [-100, 0, 100], [40, 68, 40]), { mass: 0.1, stiffness: 150, damping: 12 });
  const iconSize = useSpring(useTransform(distance, [-100, 0, 100], [22, 38, 22]), { mass: 0.1, stiffness: 150, damping: 12 });
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center rounded-xl bg-gray-100 hover:bg-white transition-colors shadow-sm"
      >
        {/* Tooltip — appears to the left */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 4 }}
              className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 w-fit rounded-lg border border-gray-200 bg-white shadow px-2.5 py-1 text-xs whitespace-nowrap text-gray-700 font-medium"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
