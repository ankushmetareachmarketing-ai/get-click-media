"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    text: "Get Click Media's WhatsApp API integration doubled our lead conversion rate within 30 days. The chatbot handles 80% of inquiries automatically — our sales team now focuses only on hot leads.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rohan Mehta",
    role: "VP Sales, NeoRetail India",
  },
  {
    text: "We switched from traditional bulk SMS to RCS campaigns through Get Click Media. The rich media messages saw 3× higher CTR and our brand looks premium to every customer.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "Marketing Head, EduNext",
  },
  {
    text: "OTP delivery is now under 3 seconds flat. Get Click Media's infrastructure handled our Diwali sale — 2 million messages — without a single failure. Exceptional reliability.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Aditya Kapoor",
    role: "CTO, QuickPay Fintech",
  },
  {
    text: "The AI chatbot on WhatsApp qualifies leads 24/7 and books appointments directly into our CRM. Our admission team now spends time counselling, not chasing. A game-changer for education.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Sunita Rao",
    role: "Director, BrightPath Academy",
  },
  {
    text: "Patient appointment reminders via WhatsApp reduced no-shows by 61%. Get Click Media set up the entire flow in one day. The onboarding support was the best we've experienced.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Dr. Vivek Nair",
    role: "Operations Head, CarePlus Hospitals",
  },
  {
    text: "Our abandoned cart recovery campaigns via WhatsApp achieve a 38% recovery rate — ten times better than email. Get Click Media's platform is incredibly intuitive to use.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Meghna Joshi",
    role: "E-commerce Manager, FashionVault",
  },
  {
    text: "We run bulk SMS and WhatsApp campaigns from the same dashboard. Real-time analytics show delivery, open, and click rates for every campaign. The ROI reports sell themselves to leadership.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Karan Singh",
    role: "CMO, AutoDrive Motors",
  },
  {
    text: "DLT compliance was a nightmare until Get Click Media handled everything end-to-end. We went live in 48 hours. Their 24×7 support team is always one WhatsApp message away.",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    name: "Divya Nambiar",
    role: "Growth Manager, FinServe NBFC",
  },
  {
    text: "The Voice IVR and toll-free number solution transformed our customer support. Call handling time dropped 45% and CSAT scores jumped to 4.8/5. Highly recommend Get Click Media.",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    name: "Sameer Kulkarni",
    role: "Customer Success Lead, LogiTrack",
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export default function Testimonial() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="max-w-2xl w-full">
            <SectionHeading
              eyebrow="Customer Stories"
              title="Trusted by 5,000+ businesses across India"
              highlight="5,000+ businesses"
              description="Real results from real customers — see how Get Click Media transforms customer communication at scale."
              align="left"
              size="lg"
            />
          </div>
        </motion.div>

        {/* Scrolling columns */}
        <div
          className="flex justify-center gap-6 mt-4"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            maxHeight: 720,
            overflow: "hidden",
          }}
        >
          <TestimonialsColumn testimonials={firstColumn}  duration={16} />
          <TestimonialsColumn testimonials={secondColumn} duration={20} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn}  duration={18} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
