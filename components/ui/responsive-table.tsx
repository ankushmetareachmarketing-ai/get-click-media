import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ResponsiveTableColumn {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
}

export interface ResponsiveTableProps {
  columns: ResponsiveTableColumn[];
  rows: Array<Record<string, ReactNode>>;
  /** Accessible name for the table / mobile card list — not visually rendered. */
  caption: string;
  /** Column to visually emphasize (e.g. "this is us" in a comparison table). */
  highlightColumnKey?: string;
  className?: string;
}

const ALIGN_CLASS: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

/**
 * A real <table> at sm: and up; a stacked definition-list card per row below
 * sm: (CSS-only hide/show — display:none is already dropped from the a11y
 * tree, so there's no double-announcement risk). The first column doubles as
 * each mobile card's title.
 */
export function ResponsiveTable({ columns, rows, caption, highlightColumnKey, className }: ResponsiveTableProps) {
  const [titleCol, ...restCols] = columns;

  return (
    <div className={cn("w-full", className)}>
      <div className="hidden sm:block overflow-x-auto rounded-2xl border border-(--border-subtle) shadow-(--shadow-card)">
        <table className="w-full text-base">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={cn(
                    "px-5 py-4 font-semibold",
                    ALIGN_CLASS[col.align ?? "left"],
                    col.key === highlightColumnKey && "text-[#38bdf8]"
                  )}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-(--surface-1)"}>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-5 py-4",
                      ALIGN_CLASS[col.align ?? "left"],
                      col.key === titleCol.key ? "font-bold text-(--ink-1)" : "text-(--ink-2)",
                      col.key === highlightColumnKey && "text-[#2563eb] font-bold"
                    )}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="sm:hidden space-y-4 list-none p-0" aria-label={caption}>
        {rows.map((row, i) => (
          <li key={i} className="rounded-2xl border border-(--border-subtle) bg-white p-5 shadow-(--shadow-card)">
            <p className="text-lg font-bold text-(--ink-1) mb-3">{row[titleCol.key]}</p>
            <dl className="space-y-2">
              {restCols.map((col) => (
                <div key={col.key} className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-(--ink-3)">{col.label}</dt>
                  <dd
                    className={cn(
                      "text-base font-semibold text-right",
                      col.key === highlightColumnKey ? "text-[#2563eb]" : "text-(--ink-2)"
                    )}
                  >
                    {row[col.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
