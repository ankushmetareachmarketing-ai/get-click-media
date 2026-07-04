import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCheck, Shield, Zap, BarChart3, MessageSquare, Layers, Globe, PhoneCall, MapPin, Star, ChevronDown, GraduationCap, BookOpen, School, Users, Calendar, Bell, Award, Clock, TrendingUp, Home, FileText, CreditCard } from "lucide-react";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "RCS Messaging for Education & EdTech in India | Get Click Media",
  description:
    "RCS messaging for Indian schools, colleges, coaching institutes, and edtech platforms — admission campaigns, fee reminders, exam alerts, result notifications, and parent communication. Get a free demo.",
  keywords:
    "RCS for Education, RCS for Schools, RCS for EdTech India, RCS Education Messaging, RCS for Coaching Institutes India, Education RCS India",
  alternates: { canonical: "https://getclickmedia.com/rcs-for-education" },
  openGraph: {
    title: "RCS Messaging for Education & EdTech in India | Get Click Media",
    description:
      "RCS messaging for Indian schools, colleges, coaching institutes, and edtech platforms — admission campaigns, fee reminders, exam alerts, result notifications, and parent communication.",
    url: "https://getclickmedia.com/rcs-for-education",
    type: "website",
  },
};

/* -- JSON-LD Schema -------------------------------------------------------- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "RCS Messaging for Education and EdTech",
      "description": "RCS Business Messaging service for Indian schools, colleges, coaching institutes, and edtech platforms. Admission campaigns, fee reminders, exam alerts, result notifications, and parent communication.",
      "provider": {
        "@type": "Organization",
        "name": "Get Click Media",
        "url": "https://getclickmedia.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "RCS Business Messaging — Education and EdTech",
      "url": "https://getclickmedia.com/rcs-for-education"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
        { "@type": "ListItem", position: 3, name: "RCS for Education", item: "https://getclickmedia.com/rcs-for-education" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "How does RCS help education institutions increase admissions?",
          "acceptedAnswer": { "@type": "Answer", "text": "RCS delivers verified, visual admission follow-up cards with campus images and Book Visit buttons, driving enquiry-to-visit conversion of 18–28% vs 4–8% for SMS. Cost per enrolled student reduces 55–65%." }
        },
        {
          "@type": "Question", "name": "Can RCS be used for fee collection in schools?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. RCS fee reminders with a Pay Now button improve on-time collection by 60–70%. 74% of RCS-triggered payments are completed via the button without additional admin communication." }
        },
        {
          "@type": "Question", "name": "How does RCS help edtech platforms reduce dropout?",
          "acceptedAnswer": { "@type": "Answer", "text": "RCS re-engagement messages triggered at day 7, 14, and 21 of inactivity show course progress and a Continue Learning button. A three-touch series improves completion rates by up to 45%." }
        },
        {
          "@type": "Question", "name": "Can RCS messages carry exam timetables and admit cards?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. RCS supports PDF attachments delivered natively in the message. Timetable download rates reach 78% within 2 hours, vs 28% for SMS with link." }
        },
        {
          "@type": "Question", "name": "Does RCS work for coaching institutes?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Coaching institutes use RCS for admission follow-up, fee collection, exam timetables, result communication, and batch start reminders — with verified sender identity differentiating them from competitors." }
        }
      ]
    }
  ],
};

// -- Education Use Cases --------------------------------------------------
const EDUCATION_USE_CASES = [
  {
    icon: GraduationCap,
    title: "Admission Enquiry Follow-Up",
    scenario: "Prospective students/parents who submitted enquiry form online or offline. Within 5 minutes of enquiry submission — highest conversion window.",
    solution: "Rich card: campus/institute image, programme name, key USPs (faculty, placement, rankings), 3 buttons: 'Book Campus Visit', 'Download Prospectus', 'Call Admissions'.",
    result: "Enquiry-to-visit conversion: 22% vs SMS 4.8%. Cost per enrolled student: 58% lower. Read rate within 5 min: 91%.",
    image: "/images/rcs/education-admission.webp"
  },
  {
    icon: CreditCard,
    title: "Fee Payment Reminder & Collection",
    scenario: "All enrolled students/parents with outstanding fee dues. 7 days, 3 days, 1 day before due date. Second reminder on due date morning.",
    solution: "Rich card: school/college logo + verified, student name (masked), fee amount, due date, fee head, 2 buttons: 'Pay Now' (links to fee portal), 'Request Extension'.",
    result: "On-time fee collection rate: +67% vs plain SMS. 'Pay Now' button resolves 74% without parent calling admin. Late fee waiver requests reduced 41%.",
    image: "/images/rcs/education-fee-payment.webp"
  },
  {
    icon: Calendar,
    title: "Exam Schedule & Timetable Notification",
    scenario: "All students and parents before exam season. 21 days and 7 days before exams begin.",
    solution: "Rich card: school/college logo, exam name, downloadable timetable card (PDF attachment), important dates, hall ticket download button, 2 buttons: 'Download Timetable', 'Download Hall Ticket'.",
    result: "Timetable download rate: 78% within 2 hours. Exam no-show rate: -34% vs SMS notification. Student query calls to admin: -52%.",
    image: "/images/rcs/education-exam-schedule.webp"
  },
  {
    icon: Award,
    title: "Result Notification",
    scenario: "All students (and parents for K–12) on result declaration day. Fastest possible trigger on result publication.",
    solution: "Rich card: institution logo + verified, student name, result summary (Pass/Distinction/Fail — not detailed marks for privacy), 2 buttons: 'View Full Result' (links to portal), 'Download Marksheet'.",
    result: "Result page visits via RCS button: 89% vs 41% via SMS link. Marksheet downloads: 3.2x higher. Parent-student engagement post-result: highest RCS message type open rate (94%).",
    image: "/images/rcs/education-result.webp"
  },
  {
    icon: Layers,
    title: "Course Recommendation Carousel",
    scenario: "New leads on edtech platforms post-trial completion, students who completed a free trial, or quarterly re-engagement for platform users.",
    solution: "Carousel of 4–6 courses: each card shows course image, course name, rating, duration, price (original + discounted), 'Enroll Now' button. Global 'View All Courses' button.",
    result: "Course enrolment rate from carousel: 18% vs email recommendation 3.2%. Carousel view rate: 74%. Cross-sell revenue per student: +42%.",
    image: "/images/rcs/education-course-carousel.webp"
  },
  {
    icon: TrendingUp,
    title: "Student Re-Engagement (Inactive Learner)",
    scenario: "Students who have not logged in to edtech platform for 7+ days. Three-touch re-engagement series (day 7, day 14, day 21).",
    solution: "Rich card: course image, student's last completed module, progress bar (e.g., '60% complete'), motivational message, 2 buttons: 'Continue Learning', 'Set Study Reminder'.",
    result: "Re-engagement rate (day 7 message): 34% vs email 7%. Course completion rate uplift: +45% for students receiving 3-touch RCS re-engagement. Subscription renewal rate: +28%.",
    image: "/images/rcs/education-reengagement.webp"
  },
  {
    icon: Users,
    title: "Parent-Teacher Meeting Request & Confirmation",
    scenario: "Parents of K–12 students for scheduled PTM events. 14 days and 3 days before PTM. Confirmation send 24 hours before.",
    solution: "Rich card: school logo + verified, PTM date/time, teacher name, class, school address + Google Maps button, 3 quick-reply chips: 'Confirm Attendance', 'Request Alternate Slot', 'Unable to Attend'.",
    result: "PTM attendance rate: +38% vs SMS reminder. 'Request Alternate Slot' chip reduces scheduling conflicts 61%. Admin coordination time: -44%.",
    image: "/images/rcs/education-ptm.webp"
  },
  {
    icon: Star,
    title: "Scholarship & Financial Aid Announcement",
    scenario: "All current students and new enquiries who match scholarship criteria. Announcement of new scholarship scheme or renewal period opening.",
    solution: "Rich card: institution image, scholarship name, eligibility criteria, benefit amount or % fee waiver, deadline, 2 buttons: 'Apply for Scholarship', 'Check Eligibility'.",
    result: "Scholarship application rate: 31% of eligible students vs email 8%. 'Check Eligibility' button reduces admin enquiry calls 44%. Enrolled student NPS: +22 points for scholarship recipients.",
    image: "/images/rcs/education-scholarship.webp"
  },
  {
    icon: Home,
    title: "Hostel / Campus Life Update",
    scenario: "All hostel residents or newly admitted students. Start of term, hostel allotment, mess menu changes, maintenance schedules, emergency alerts.",
    solution: "Rich card: hostel/campus image, update type, key information, relevant action button (Map to hostel, Download allotment letter, Call warden).",
    result: "Hostel reporting compliance: +29% (map button drives on-time arrival). Admin queries on day 1: -48%. Student onboarding satisfaction: +18 points.",
    image: "/images/rcs/education-hostel.webp"
  },
  {
    icon: Bell,
    title: "Trial Class / Demo Session Invitation",
    scenario: "New leads who have not yet enrolled — top-of-funnel conversion use case. 24 hours after lead capture or 1 week after initial enquiry with no booking.",
    solution: "Rich card: teacher/faculty image or classroom image, trial class details (subject, date, time, mode), 3 buttons: 'Book Free Trial', 'View Curriculum', 'Ask a Question' (two-way reply trigger).",
    result: "Trial booking rate: 28% vs email 5.2%. Trial-to-enrolment conversion: 41% (highest conversion rate of any education RCS campaign type). 'Ask a Question' triggers 14% of leads to start 2-way conversation.",
    image: "/images/rcs/education-trial-class.webp"
  }
];

// -- Segment Strategies --------------------------------------------------
const SEGMENT_STRATEGIES = [
  {
    segment: "K–12 Schools (CBSE, ICSE, State Board)",
    challenges: "Low fee payment rates via SMS, parent trust eroded by unverified senders, PTM attendance below 60%, emergency alerts lost in SMS inbox, manual admin overhead.",
    strategies: [
      "Verified school logo builds instant parent trust",
      "Pay Now button in fee reminder drives 67% on-time collection",
      "PTM confirmation chips reduce no-shows 38%",
      "Emergency alert RCS with red-flag visual gets immediate attention",
      "Automated triggers via school management system API"
    ]
  },
  {
    segment: "Coaching Institutes (JEE/NEET/UPSC/CA)",
    challenges: "High cost per admission from paid portals, enquiry-to-admission conversion below 6%, exam schedule confusion, re-engagement costly, fee collection lag impacts cashflow.",
    strategies: [
      "RCS admission card with faculty image, selection stats, Book Visit button",
      "Sub-5-minute automated enquiry response with campus tour video link",
      "Exam timetable as downloadable PDF card sent 3 weeks before",
      "Progress-based re-engagement with 'Continue Batch' button",
      "Fee reminder with Pay Now button improves collection 60%+"
    ]
  },
  {
    segment: "Universities & Degree Colleges",
    challenges: "Multiple departments with inconsistent communication, admission season requires mass personalised outreach, NRI and outstation student communication difficult.",
    strategies: [
      "Centralised RCS platform with department-wise sender profiles",
      "Personalised admission carousel by programme interest",
      "RCS works internationally (UAE, USA, UK) for NRI applicants",
      "Result notifications with instant 'View Result' button",
      "Alumni re-engagement for donations, mentorship, events"
    ]
  },
  {
    segment: "EdTech Platforms",
    challenges: "Course completion rates below 18%, trial-to-paid conversion under 12%, email open rates declining, subscription renewal requires multiple touchpoints.",
    strategies: [
      "Day 7 re-engagement RCS raises completion 45%",
      "Free trial invitation carousel drives 28% trial booking rate",
      "RCS delivered to messaging app — no email open required",
      "3-touch renewal series via RCS drives 28% higher renewal",
      "Course recommendation carousel generates 18% enrolment"
    ]
  },
  {
    segment: "Skill Development & Vocational Training",
    challenges: "Low brand awareness vs established universities, government scheme communication reaches wrong audience, placement outcome communication is slow and informal.",
    strategies: [
      "Verified sender adds institutional credibility",
      "Scheme eligibility carousel with Apply button for government programmes (PMKVY)",
      "Placement result card with company logo and package detail builds brand",
      "Batch confirmation card with Google Maps venue + timing details"
    ]
  }
];

// -- Performance Benchmarks ----------------------------------------------
const PERFORMANCE_DATA = [
  { metric: "Admission enquiry follow-up response rate", sms: "4.8%", rcs: "22%", uplift: "4.6x higher" },
  { metric: "Fee payment on-time rate", sms: "41%", rcs: "79%", uplift: "+38 percentage points" },
  { metric: "Exam schedule timetable download rate", sms: "28%", rcs: "78%", uplift: "2.8x higher" },
  { metric: "Result page visit rate", sms: "41%", rcs: "89%", uplift: "2.2x higher" },
  { metric: "Course enrolment from recommendation", sms: "3.2%", rcs: "18%", uplift: "5.6x higher" },
  { metric: "Student re-engagement (7-day lapse)", sms: "6%", rcs: "34%", uplift: "5.7x higher" },
  { metric: "PTM attendance rate", sms: "54%", rcs: "74%", uplift: "+20 percentage points" },
  { metric: "Trial class booking rate", sms: "5.2%", rcs: "28%", uplift: "5.4x higher" },
  { metric: "Parent read rate (school comms)", sms: "~35%", rcs: "82%", uplift: "2.3x higher" },
  { metric: "Scholarship application rate (eligible)", sms: "8%", rcs: "31%", uplift: "3.9x higher" }
];

// -- Student Lifecycle ---------------------------------------------------
const LIFECYCLE_STAGES = [
  { stage: "Awareness", type: "Targeted offer card", content: "Programme highlights, rankings, success stories", cta: "Enquire Now", goal: "Generate enquiry" },
  { stage: "Enquiry", type: "Instant follow-up rich card", content: "Campus/course image, USPs, Book Visit button", cta: "Book Visit", goal: "Convert to visit/trial" },
  { stage: "Trial / Campus Visit", type: "Visit confirmation + reminder", content: "Date, time, Map button, what to bring", cta: "Confirm Visit", goal: "Reduce no-shows" },
  { stage: "Admission / Enrolment", type: "Welcome + onboarding carousel", content: "Joining formalities, orientation, contacts", cta: "Complete Setup", goal: "Smooth onboarding" },
  { stage: "Fee payment", type: "Payment reminder series", content: "Amount, due date, Pay Now button", cta: "Pay Now", goal: "Improve collection" },
  { stage: "Active learning", type: "Progress update + next step", content: "Completion %, next module, streak count", cta: "Continue Learning", goal: "Drive completion" },
  { stage: "Exam preparation", type: "Timetable + materials card", content: "Exam schedule PDF, syllabus, admit card", cta: "Download Timetable", goal: "Reduce stress" },
  { stage: "Result", type: "Instant result notification", content: "Pass/fail, marks summary, View Result button", cta: "View Result", goal: "Reduce anxiety" },
  { stage: "Re-engagement", type: "Lapse recovery message", content: "Last module, progress bar, Continue button", cta: "Continue Learning", goal: "Recover inactive" },
  { stage: "Alumni", type: "Alumni event invitation", content: "Reunion details, Map, RSVP chip", cta: "RSVP Now", goal: "Maintain long-term relationship" }
];

// -- FAQ ------------------------------------------------------------------
const FAQS = [
  {
    q: "How does RCS messaging help education institutions increase admissions?",
    a: "RCS transforms admission enquiry follow-up from a plain SMS to a visually rich, verified message — with campus image, programme highlights, and a 'Book Campus Visit' button — delivered within minutes of enquiry. This visual differentiation, combined with verified sender identity and one-tap booking, drives enquiry-to-visit conversion rates of 18–28% vs 4–8% for plain SMS. Coaching institutes report cost-per-enrolled-student reductions of 55–65% after deploying RCS admission follow-up."
  },
  {
    q: "Can RCS be used for fee collection in schools?",
    a: "Yes. RCS fee reminders with a Pay Now button are one of the highest-ROI education RCS use cases. Schools report on-time fee collection rate improvements of 60–70% after switching from SMS to RCS reminders. The Pay Now button eliminates the friction of copying a bank account number or navigating to a payment portal — 74% of RCS-triggered fee payments are completed via the button without any additional admin communication."
  },
  {
    q: "Can schools send RCS messages to parents?",
    a: "Yes. Parents are the primary audience for K–12 school RCS messaging — fee reminders, exam schedules, result notifications, PTM requests, and emergency communications all target parents. RCS verified sender identity (school logo and name on every message) dramatically improves parent trust and engagement compared to unidentifiable SMS Sender IDs."
  },
  {
    q: "How does RCS help edtech platforms reduce student dropout?",
    a: "RCS re-engagement messages — triggered when a student has not logged in for 7 or more days — show the student's enrolled course image, their last completed module, and a progress visual with a 'Continue Learning' button. These messages reach students in their native messaging app without requiring an app switch or login. A three-touch re-engagement series (day 7, day 14, day 21) improves course completion rates by up to 45% vs no re-engagement communication."
  },
  {
    q: "Does RCS work for coaching institutes like Allen, FIITJEE, and Aakash?",
    a: "Yes. Coaching institutes are among the highest-volume RCS users in Indian education. Key use cases include admission enquiry follow-up (campus image + selection stats + Book Visit button), fee collection, exam timetable notification, result communication, and batch start reminders. Coaching institutes that compete on the same keywords as each other — JEE, NEET, UPSC — find that RCS visual differentiation creates a meaningful first-impression advantage."
  },
  {
    q: "Can RCS messages carry exam timetables and admit cards?",
    a: "Yes. RCS supports PDF file attachments delivered natively in the message — no link, no external portal required. An exam timetable or admit card can be sent as an attached PDF that the student or parent downloads with a single tap. Timetable download rates via RCS reach 78% within 2 hours of send — compared to 28% for equivalent SMS-with-link notifications."
  },
  {
    q: "Is student and parent data safe with RCS messaging via Get Click Media?",
    a: "Yes. Get Click Media's RCS platform processes student and parent data exclusively on India-hosted infrastructure. We comply with India's Digital Personal Data Protection Act 2023 — with data minimisation, consent management, and opt-out handling built into the platform. No student data is transferred outside India, and audit logs are maintained for all data processing activities. Parent and student opt-out requests are honoured immediately."
  },
  {
    q: "What is the minimum budget for an education institution to start with RCS?",
    a: "There is no minimum spend. An individual coaching institute sending 2,000 admission follow-up messages per month pays approximately ₹400–500 per month at standard RCS rates — with a typical ROI of 15x to 25x from improved enquiry-to-admission conversion. Large edtech platforms and university networks with millions of monthly messages receive enterprise pricing. Get Click Media works with institutions of all sizes — from single-branch coaching institutes to national university networks."
  }
];

/* -- Page ------------------------------------------------------------------ */
export default function RCSEducationPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -----------------------------------------------------------------
          HERO — with breadcrumb inside
      ----------------------------------------------------------------- */}
      <section className="relative overflow-hidden mt-2 bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          {/* -- BREADCRUMB INSIDE HERO WITH VISIBLE BACKGROUND -- */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/60 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden className="text-white/30">/</li>
              <li><Link href="/rcs-messaging" className="hover:text-white transition-colors">RCS Messaging</Link></li>
              <li aria-hidden className="text-white/30">/</li>
              <li className="text-white font-medium">RCS for Education</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                Education &amp; EdTech RCS Messaging
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                RCS Messaging for<br />
                <span className="text-[#38bdf8]">Education &amp; EdTech</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                From CBSE schools and engineering colleges to JEE coaching institutes 
                and edtech unicorns — RCS transforms education communication with 
                verified rich cards, Pay Now buttons, exam timetables, and instant 
                result notifications. Drive admissions, engage learners, retain students.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  Talk to Our Education Team
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 max-w-md mx-auto lg:mx-0">
                <p className="text-white/90 text-sm font-medium">
                  <span className="text-[#38bdf8] font-bold">Key result:</span> Education institutions using RCS report 
                  <span className="text-white font-bold"> 3x–5x higher admission conversion</span> and 
                  <span className="text-white font-bold"> 67% better fee collection</span> vs plain SMS.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[50%] shrink-0">
              <Image
                src="/images/rcs/education-hero.webp"
                alt="RCS Education messaging showing admission and fee reminder cards on mobile phone"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Stats row */}
          <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {[
              { value: "3x–5x", label: "Higher admission enquiry conversion vs SMS" },
              { value: "82%", label: "Average read rate for education RCS messages" },
              { value: "67%", label: "Fee payment rate improvement with Pay Now" },
              { value: "45%", label: "Reduction in student dropout with engagement RCS" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-extrabold text-[#38bdf8] font-(family-name:--font-syne)">{stat.value}</p>
                <p className="text-xs text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- WHY EDUCATION NEEDS RCS --------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="why-education">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/rcs/education-why-rcs.webp"
                alt="Education messaging comparison — SMS vs RCS visual"
                width={700}
                height={525}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Education Needs RCS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                Why Indian Education Communication Needs RCS
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <h4 className="text-sm font-bold text-red-600 mb-2">✕ The admission conversion problem</h4>
                  <p className="text-sm text-gray-600">Over 3 crore new admission enquiries annually — but conversion averages 4–8%. The gap is a communication problem: plain SMS with address and phone number doesn't differentiate. RCS delivers campus images, faculty credentials, and one-tap booking.</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                  <h4 className="text-sm font-bold text-amber-600 mb-2">✕ The parent communication trust gap</h4>
                  <p className="text-sm text-gray-600">Parents receive dozens of messages from unidentifiable Sender IDs. RCS puts the school's verified name and logo on every message — parents immediately recognise the sender and trust the communication.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-600 mb-2">✓ The student engagement and retention problem in EdTech</h4>
                  <p className="text-sm text-gray-600">Course completion rates average 12–18%. RCS enables personalised, visual re-engagement with progress bars and Continue buttons — reaching students in their messaging app without login or app switch.</p>
                </div>
              </div>

              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="text-[#38bdf8] font-bold">The opportunity:</span> Indian education generates over 3 crore enquiries annually. 
                  RCS visual differentiation and verified trust can 
                  <span className="text-white font-bold"> triple admission conversion rates</span> and 
                  <span className="text-white font-bold"> double fee collection efficiency</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- 10 USE CASES ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Education Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              10 High-Impact RCS Use Cases for Indian Education &amp; EdTech
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Here are the 10 most effective ways Indian schools, coaching institutes, 
              universities, and edtech platforms are using RCS messaging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION_USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <uc.icon className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-(family-name:--font-syne)">{uc.title}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-700">Trigger:</span> <span className="text-gray-500">{uc.scenario}</span></p>
                  <p><span className="font-semibold text-gray-700">RCS format:</span> <span className="text-gray-500">{uc.solution}</span></p>
                  <p><span className="font-semibold text-gray-700">Result:</span> <span className="text-gray-500">{uc.result}</span></p>
                </div>
                <div className="mt-2 rounded-xl overflow-hidden">
                  <Image
                    src={uc.image}
                    alt={`RCS education use case: ${uc.title}`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- SEGMENT STRATEGIES --------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="segments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Segment Strategies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Messaging Strategy by Education Segment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SEGMENT_STRATEGIES.map((s) => (
              <div key={s.segment} className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-3 hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-[#2563eb] font-(family-name:--font-syne)">{s.segment}</h3>
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600"><span className="font-semibold text-gray-700">Challenges:</span> {s.challenges}</p>
                </div>
                <ul className="space-y-1.5">
                  {s.strategies.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCheck className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- STUDENT LIFECYCLE --------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="lifecycle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Student Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Across the Full Student Lifecycle
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Lifecycle Stage</th>
                  <th className="text-left px-4 py-4 font-semibold">RCS Message Type</th>
                  <th className="text-left px-4 py-4 font-semibold">Key Content</th>
                  <th className="text-center px-4 py-4 font-semibold">CTA Button</th>
                  <th className="text-left px-4 py-4 font-semibold">Goal</th>
                </tr>
              </thead>
              <tbody>
                {LIFECYCLE_STAGES.map((row, i) => (
                  <tr key={row.stage} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.stage}</td>
                    <td className="px-4 py-3.5 text-gray-600 text-xs">{row.type}</td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs">{row.content}</td>
                    <td className="px-4 py-3.5 text-center text-[#2563eb] font-medium text-xs">{row.cta}</td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -- PERFORMANCE BENCHMARKS ----------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="performance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Performance Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS vs SMS: Education Campaign Performance Benchmarks
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Use Case</th>
                  <th className="text-center px-4 py-4 font-semibold text-red-400">SMS Performance</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">RCS Performance</th>
                  <th className="text-center px-4 py-4 font-semibold text-green-400">Uplift</th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.metric}</td>
                    <td className="px-4 py-3.5 text-center text-red-400">{row.sms}</td>
                    <td className="px-4 py-3.5 text-center text-[#38bdf8]">{row.rcs}</td>
                    <td className="px-4 py-3.5 text-center text-green-600 font-medium">{row.uplift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            Performance note: Data based on aggregated Indian education sector RCS deployments across K–12, coaching, university, and edtech segments.
            Performance varies by institution type, audience quality, message design, and send timing.
          </p>
        </div>
      </section>

      {/* -- WHY GET CLICK MEDIA -------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="why-gcm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Get Click Media
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media RCS Platform for Education
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "School management system integrations", desc: "Integrates with Fedena, Entab, iSkool, MyClassboard. Fee due triggers, exam schedule publishes, result declarations auto-trigger RCS." },
                  { title: "University ERP and LMS integrations", desc: "Connects with Moodle, Canvas, Blackboard, Oracle Student Cloud, SAP Student Lifecycle Management for enrollment confirmations, grade releases." },
                  { title: "EdTech platform webhook support", desc: "Triggers RCS when a student completes a module, subscription renews/lapses, or live class is about to start — handles high-volume concurrent triggers." },
                  { title: "Personalisation at scale", desc: "Dynamic fields — student name, class, section, fee amount, exam date, course name, progress percentage, result grade — from a single campaign." },
                  { title: "Multilingual support", desc: "Unicode message content in English, Hindi, and 12+ regional languages. Communicate with parents in their preferred language." },
                  { title: "Compliance with DPDP 2023", desc: "Data minimisation and consent management. No student data processed beyond necessary. Opt-out requests honoured immediately with full audit trail." },
                ].map(p => (
                  <div key={p.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCheck className="w-3 h-3 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{p.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-[44%] shrink-0">
              <Image
                src="/images/rcs/education-dashboard.webp"
                alt="Get Click Media RCS education dashboard analytics"
                width={700}
                height={525}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Messaging for Education in India
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-gray-50 border border-gray-100 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* -- BOTTOM CTA ----------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Ready to launch RCS for your educational institution?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media handles Google brand verification, platform integration, and campaign setup.
                Most education clients are live within 7–10 business days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Talk to Our Education Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}