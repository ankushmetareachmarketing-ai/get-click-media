import Image from "next/image";

const CLIENTS = [
  { src: "/images/our-clients/logo/acerlabs.png", alt: "Acer Labs — client using Get Click Media bulk SMS platform" },
  { src: "/images/our-clients/logo/aditidental.png", alt: "Aditi Dental — dental clinic using SMS for appointment reminders" },
  { src: "/images/our-clients/logo/aggarwal-bandhu-properties.jpeg", alt: "Aggarwal Bandhu Properties — real estate firm using bulk SMS campaigns" },
  { src: "/images/our-clients/logo/alkabirtours.webp", alt: "Alkabir Tours — travel company using SMS for booking confirmations" },
  { src: "/images/our-clients/logo/aphroditebuddhaspa.png", alt: "Aphrodite Buddha Spa — wellness brand using SMS marketing" },
  { src: "/images/our-clients/logo/bada-bussiness.png", alt: "Bada Business — e-learning platform using bulk SMS notifications" },
  { src: "/images/our-clients/logo/balajicollection.jpg", alt: "Balaji Collection — retail brand using promotional SMS" },
  { src: "/images/our-clients/logo/brinda.webp", alt: "Brinda — brand using bulk SMS for customer engagement" },
  { src: "/images/our-clients/logo/buddyeducation.svg", alt: "Buddy Education — EdTech platform using SMS for student alerts" },
  { src: "/images/our-clients/logo/byob.svg", alt: "BYOB — business using Get Click Media bulk SMS services" },
  { src: "/images/our-clients/logo/cashi.png", alt: "Cashi — fintech using OTP SMS for secure transactions" },
  { src: "/images/our-clients/logo/earthlogo.png", alt: "Earth — brand using bulk SMS marketing campaigns" },
  { src: "/images/our-clients/logo/evanik.png", alt: "Evanik — using SMS marketing for customer outreach" },
  { src: "/images/our-clients/logo/gdgoenka.png", alt: "GD Goenka — school using bulk SMS for parent communication" },
  { src: "/images/our-clients/logo/greenplanetindia.png", alt: "Green Planet India — using bulk SMS for awareness campaigns" },
  { src: "/images/our-clients/logo/helipkg.png", alt: "Heli PKG — logistics company using transactional SMS alerts" },
  { src: "/images/our-clients/logo/ibgnetwork.png", alt: "IBG Network — using bulk SMS for business communication" },
  { src: "/images/our-clients/logo/inihomes.png", alt: "Ini Homes — real estate brand using SMS lead campaigns" },
  { src: "/images/our-clients/logo/instituteofdermauthority.png", alt: "Institute of Derm Authority — clinic using SMS for patient reminders" },
  { src: "/images/our-clients/logo/kins.webp", alt: "Kins — using Get Click Media bulk SMS platform" },
  { src: "/images/our-clients/logo/leadinsfin.jpg", alt: "Lead Ins Fin — financial services using SMS notifications" },
  { src: "/images/our-clients/logo/legalfund.webp", alt: "Legal Fund — legal services firm using SMS for client updates" },
  { src: "/images/our-clients/logo/logiceducation.png", alt: "Logic Education — using SMS for student and parent updates" },
  { src: "/images/our-clients/logo/max-labs.png", alt: "Max Labs — using bulk SMS for test result notifications" },
  { src: "/images/our-clients/logo/mochastar1.png", alt: "Mocha Star — F&B brand using promotional bulk SMS" },
  { src: "/images/our-clients/logo/multilogo.png", alt: "Multi — using Get Click Media bulk SMS services" },
  { src: "/images/our-clients/logo/namastedwaar.png", alt: "Namaste Dwaar — hospitality brand using SMS for bookings" },
  { src: "/images/our-clients/logo/ncrlogo.png", alt: "NCR — enterprise using bulk SMS communication" },
  { src: "/images/our-clients/logo/nexuspay.png", alt: "Nexus Pay — fintech using OTP and transactional SMS" },
  { src: "/images/our-clients/logo/niramayahealthcare.png", alt: "Niramaya Healthcare — healthcare provider using SMS for patient notifications" },
  { src: "/images/our-clients/logo/poonamjewellers.webp", alt: "Poonam Jewellers — jewellery brand using promotional SMS marketing" },
  { src: "/images/our-clients/logo/prime-dental.png", alt: "Prime Dental — dental clinic using SMS for appointment alerts" },
  { src: "/images/our-clients/logo/purerevive.png", alt: "Pure Revive — wellness brand using SMS for offers and updates" },
  { src: "/images/our-clients/logo/radius.png", alt: "Radius — using bulk SMS for business outreach" },
  { src: "/images/our-clients/logo/roofassetslogo2.png", alt: "Roof Assets — real estate company using bulk SMS campaigns" },
  { src: "/images/our-clients/logo/salary-now.png", alt: "Salary Now — fintech platform using SMS for payment alerts" },
  { src: "/images/our-clients/logo/saniya-woods.svg", alt: "Saniya Woods — brand using bulk SMS services" },
  { src: "/images/our-clients/logo/sarasrealty.webp", alt: "Saras Realty — real estate agency using promotional SMS" },
  { src: "/images/our-clients/logo/shiplinelogo.png", alt: "Ship Line — logistics company using transactional SMS tracking alerts" },
  { src: "/images/our-clients/logo/smartrealty.png", alt: "Smart Realty — real estate brand using SMS lead generation" },
  { src: "/images/our-clients/logo/stillersafe.svg", alt: "Stiller Safe — security brand using SMS for instant alerts" },
  { src: "/images/our-clients/logo/tcmservicemart.png", alt: "TCM Service Mart — service platform using bulk SMS for customer updates" },
  { src: "/images/our-clients/logo/teleopedialogo.png", alt: "Teleopedia — telecom business using Get Click Media SMS platform" },
  { src: "/images/our-clients/logo/tgmrn.png", alt: "TGMRN — using bulk SMS for business communication" },
  { src: "/images/our-clients/logo/visiontech.webp", alt: "Vision Tech — technology company using SMS campaigns" },
  { src: "/images/our-clients/logo/wwicslogo.png", alt: "WWICS — immigration consultancy using bulk SMS for client communication" },
];

export default function BulkSmsBrandsStrip() {
  return (
    <section
      aria-label="Trusted by our clients"
      className="bg-white border-b border-(--border-subtle) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">

          {/* ── Left: stat ── */}
          <div className="flex-none sm:border-r sm:border-(--border-subtle) sm:pr-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-5 text-center sm:text-left px-5 py-3 sm:px-0 sm:py-0 rounded-2xl sm:rounded-none bg-linear-to-r from-blue-50 to-indigo-50 sm:bg-none border border-blue-100 sm:border-0">
              <p className="text-[2.75rem] sm:text-[3rem] [font-family:var(--font-syne)] font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-[linear-gradient(135deg,var(--primary),var(--primary-light))]">
                10K+
              </p>
              <p className="text-[0.8125rem] sm:text-sm text-(--ink-2) font-medium leading-snug max-w-38.75">
                Businesses trust us for every message they send.
              </p>
            </div>
          </div>

          {/* ── Right: scrolling logo marquee ── */}
          <div className="flex-1 w-full overflow-hidden relative">
            {/* Fade masks */}
            <div
              className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, white, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, white, transparent)" }}
            />

            {/* Marquee track — duplicate for seamless loop */}
            <div className="flex items-center gap-10 sm:gap-14 w-max animate-[brands-scroll_50s_linear_infinite]">
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <div
                  key={i}
                  className="flex-none flex items-center justify-center h-9 opacity-55 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={110}
                    height={40}
                    className="h-7 sm:h-8 w-auto max-w-27.5 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes brands-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
