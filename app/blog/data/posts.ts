export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryStyle: string;
  image: string;
  imageAlt: string;
  dateISO: string;
  dateLabel: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-bulk-sms-service",
    title: "What is Bulk SMS Service? A Complete Guide for Indian Businesses",
    excerpt:
      "Bulk SMS service lets businesses send thousands of messages instantly to customers, prospects, and employees. Learn what it is, how it works, and why it's India's most trusted marketing and communication channel.",
    category: "Bulk SMS",
    categoryStyle: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/images/blog/what-is-bulk-sms-service.webp",
    imageAlt: "What is bulk SMS service- complete guide for Indian businesses",
    dateISO: "2026-06-10",
    dateLabel: "Jun 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "how-bulk-sms-works-india",
    title: "How Bulk SMS Works in India: Process, SMS Gateway & Delivery Explained",
    excerpt:
      "From message submission to delivery on a subscriber's handset, understand the complete bulk SMS process in India- including SMS gateways, DLT scrubbing, telecom routes, and delivery reports.",
    category: "Bulk SMS",
    categoryStyle: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/images/blog/how-bulk-sms-works-india.webp",
    imageAlt: "How bulk SMS works in India- SMS gateway and delivery process explained",
    dateISO: "2026-05-28",
    dateLabel: "May 28, 2026",
    readTime: "7 min read",
  },
  {
    slug: "benefits-of-bulk-sms-marketing",
    title: "15 Key Benefits of Bulk SMS Marketing Every Business Should Know",
    excerpt:
      "98% open rates, instant delivery, cost-effective reach, and no internet required- discover the top SMS marketing benefits and why thousands of Indian businesses rely on bulk SMS for customer engagement.",
    category: "Bulk SMS",
    categoryStyle: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/images/blog/benefits-of-bulk-sms-marketing.webp",
    imageAlt: "Benefits of bulk SMS marketing for Indian businesses",
    dateISO: "2026-05-15",
    dateLabel: "May 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "bulk-sms-vs-whatsapp-marketing",
    title: "Bulk SMS vs WhatsApp Marketing: Which Is Better for Your Business?",
    excerpt:
      "Both SMS and WhatsApp reach customers on their phones, but they serve different purposes. Compare reach, cost, engagement, compliance requirements, and use cases to pick the right channel for your campaigns.",
    category: "WhatsApp",
    categoryStyle: "bg-green-50 text-green-700 border-green-100",
    image: "/images/blog/bulk-sms-vs-whatsapp-marketing.webp",
    imageAlt: "Bulk SMS vs WhatsApp marketing comparison for Indian businesses",
    dateISO: "2026-05-01",
    dateLabel: "May 1, 2026",
    readTime: "7 min read",
  },
];
