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
    slug: "bulk-sms-guide-india-2025",
    title: "How to Send Bulk SMS in India: Complete Guide for 2025",
    excerpt:
      "Everything you need to know about sending bulk SMS in India — from DLT registration and route selection to best practices for delivery rates and full TRAI compliance.",
    category: "Bulk SMS",
    categoryStyle: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/images/blog/bulk-sms-guide-india-2025.jpg",
    imageAlt: "Complete guide to sending bulk SMS in India 2025",
    dateISO: "2025-05-10",
    dateLabel: "May 10, 2025",
    readTime: "8 min read",
  },
  {
    slug: "trai-dlt-registration-guide",
    title: "TRAI DLT Registration: Step-by-Step Guide for Indian Businesses",
    excerpt:
      "DLT registration is mandatory for all commercial SMS senders in India. This step-by-step guide walks you through entity registration, sender ID approval, and template submission on the TRAI portal.",
    category: "DLT Compliance",
    categoryStyle: "bg-orange-50 text-orange-700 border-orange-100",
    image: "/images/blog/trai-dlt-registration-guide.jpg",
    imageAlt: "TRAI DLT registration step-by-step guide for Indian businesses",
    dateISO: "2025-04-28",
    dateLabel: "Apr 28, 2025",
    readTime: "10 min read",
  },
  {
    slug: "whatsapp-api-vs-bulk-sms",
    title: "WhatsApp Business API vs Bulk SMS: Which Channel Fits Your Business?",
    excerpt:
      "Both WhatsApp API and Bulk SMS are powerful customer engagement tools — but they serve different goals. Compare delivery rates, costs, engagement metrics, and compliance requirements to choose the right channel.",
    category: "WhatsApp",
    categoryStyle: "bg-green-50 text-green-700 border-green-100",
    image: "/images/blog/whatsapp-api-vs-bulk-sms.jpg",
    imageAlt: "WhatsApp Business API vs Bulk SMS comparison for Indian businesses",
    dateISO: "2025-04-15",
    dateLabel: "Apr 15, 2025",
    readTime: "7 min read",
  },
  {
    slug: "bulk-sms-ecommerce-use-cases",
    title: "10 Bulk SMS Use Cases That Drive Revenue for E-commerce Brands",
    excerpt:
      "From abandoned cart recovery and order tracking to flash sale campaigns and loyalty rewards — ten proven bulk SMS strategies that top Indian e-commerce brands use to increase conversions and repeat purchases.",
    category: "Bulk SMS",
    categoryStyle: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/images/blog/bulk-sms-ecommerce-use-cases.jpg",
    imageAlt: "Bulk SMS use cases for e-commerce businesses in India",
    dateISO: "2025-04-02",
    dateLabel: "Apr 2, 2025",
    readTime: "9 min read",
  },
  {
    slug: "rcs-messaging-india-future",
    title: "RCS Messaging in India: Why It Is the Future of Business Communication",
    excerpt:
      "RCS delivers branded, interactive messages directly in the native SMS inbox — no app download required. Discover how Indian businesses are using RCS to achieve engagement rates 3× higher than plain SMS.",
    category: "RCS",
    categoryStyle: "bg-purple-50 text-purple-700 border-purple-100",
    image: "/images/blog/rcs-messaging-india-future.jpg",
    imageAlt: "RCS messaging the future of business communication in India",
    dateISO: "2025-03-20",
    dateLabel: "Mar 20, 2025",
    readTime: "6 min read",
  },
  {
    slug: "ai-chatbots-customer-support-india",
    title: "How AI Chatbots Are Transforming Customer Support for Indian Businesses",
    excerpt:
      "AI chatbots now resolve over 60% of customer queries without human intervention. Learn how leading Indian brands are deploying conversational AI on WhatsApp, SMS, and web to cut costs and improve CSAT scores.",
    category: "AI & Automation",
    categoryStyle: "bg-indigo-50 text-indigo-700 border-indigo-100",
    image: "/images/blog/ai-chatbots-customer-support-india.jpg",
    imageAlt: "AI chatbots transforming customer support for Indian businesses",
    dateISO: "2025-03-08",
    dateLabel: "Mar 8, 2025",
    readTime: "7 min read",
  },
  {
    slug: "otp-sms-best-practices",
    title: "OTP SMS Best Practices: Maximise Delivery Rates and Prevent Fraud",
    excerpt:
      "Low OTP delivery rates cost businesses customers at the most critical moment. This guide covers sender ID selection, retry logic, flash SMS, DLT template tips, and how to prevent SIM-swap fraud on your authentication flow.",
    category: "Bulk SMS",
    categoryStyle: "bg-blue-50 text-blue-700 border-blue-100",
    image: "/images/blog/otp-sms-best-practices.jpg",
    imageAlt: "OTP SMS delivery best practices and fraud prevention guide",
    dateISO: "2025-02-22",
    dateLabel: "Feb 22, 2025",
    readTime: "8 min read",
  },
  {
    slug: "promotional-vs-transactional-sms",
    title: "Promotional vs Transactional SMS: Complete Guide for India",
    excerpt:
      "Sending the wrong SMS route leads to blocked messages, regulatory penalties, and customer churn. Understand the exact differences between promotional and transactional SMS under TRAI guidelines — with real examples.",
    category: "DLT Compliance",
    categoryStyle: "bg-orange-50 text-orange-700 border-orange-100",
    image: "/images/blog/promotional-vs-transactional-sms.jpg",
    imageAlt: "Promotional vs transactional SMS guide for India",
    dateISO: "2025-02-10",
    dateLabel: "Feb 10, 2025",
    readTime: "6 min read",
  },
  {
    slug: "whatsapp-marketing-campaigns-2025",
    title: "WhatsApp Marketing Campaigns: 5 Strategies That Convert in 2025",
    excerpt:
      "Broadcast lists, click-to-WhatsApp ads, drip sequences, re-engagement flows, and product catalogues — these five WhatsApp marketing strategies are generating measurable ROI for Indian brands right now.",
    category: "WhatsApp",
    categoryStyle: "bg-green-50 text-green-700 border-green-100",
    image: "/images/blog/whatsapp-marketing-campaigns-2025.jpg",
    imageAlt: "WhatsApp marketing campaigns that convert in 2025",
    dateISO: "2025-01-28",
    dateLabel: "Jan 28, 2025",
    readTime: "10 min read",
  },
  {
    slug: "sms-marketing-analytics-kpis",
    title: "SMS Marketing Analytics: The 8 KPIs Every Business Must Track",
    excerpt:
      "Delivery rate is just the starting point. This guide covers click-through rate, conversion rate, opt-out rate, revenue per message, and four more critical SMS KPIs — plus how to benchmark against industry averages.",
    category: "Analytics",
    categoryStyle: "bg-cyan-50 text-cyan-700 border-cyan-100",
    image: "/images/blog/sms-marketing-analytics-kpis.jpg",
    imageAlt: "SMS marketing analytics and KPIs guide",
    dateISO: "2025-01-14",
    dateLabel: "Jan 14, 2025",
    readTime: "8 min read",
  },
  {
    slug: "omnichannel-communication-strategy",
    title: "Building an Omnichannel Communication Strategy: A Practical Framework",
    excerpt:
      "Customers expect seamless experiences whether they contact you via SMS, WhatsApp, email, or web chat. This practical framework shows how to unify channels, data, and automation for consistent, personalised engagement at scale.",
    category: "Strategy",
    categoryStyle: "bg-rose-50 text-rose-700 border-rose-100",
    image: "/images/blog/omnichannel-communication-strategy.jpg",
    imageAlt: "Building an omnichannel customer communication strategy",
    dateISO: "2024-12-30",
    dateLabel: "Dec 30, 2024",
    readTime: "11 min read",
  },
  {
    slug: "dlt-compliance-checklist-2025",
    title: "DLT Compliance Checklist for Bulk SMS Senders in India — 2025 Edition",
    excerpt:
      "Before you send your next bulk SMS campaign, run through this complete DLT compliance checklist: entity registration, sender ID approval, template category mapping, variable field rules, and TRAI scrubbing verification.",
    category: "DLT Compliance",
    categoryStyle: "bg-orange-50 text-orange-700 border-orange-100",
    image: "/images/blog/dlt-compliance-checklist-2025.jpg",
    imageAlt: "DLT compliance checklist for bulk SMS senders in India 2025",
    dateISO: "2024-12-15",
    dateLabel: "Dec 15, 2024",
    readTime: "7 min read",
  },
];
