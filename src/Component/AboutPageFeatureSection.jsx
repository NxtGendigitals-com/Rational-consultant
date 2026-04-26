import { ArrowRight, BadgeCheck, Building2, FileCheck2, ShieldCheck } from "lucide-react";

const defaultFeatures = [
  {
    title: "20+ Years Of Development Experience",
    text: "Two decades of building homes and commercial spaces — backed by a reputation for quality construction, clear titles, and long-term customer trust.",
    Icon: BadgeCheck,
  },
  {
    title: "End-To-End Project Delivery",
    text: "From land acquisition and design to construction and handover, our in-house teams manage every stage with clarity and consistency. Transparent pricing, regular site updates, and a single point of contact keep the buying journey simple and predictable.",
    Icon: FileCheck2,
  },
  {
    title: "RERA-Compliant, Ready-To-Register",
    text: "Every project is registered, approved, and delivered with complete legal paperwork — so you can buy with confidence and move in without surprises.",
    Icon: ShieldCheck,
  },
];

export default function AboutPageFeatureSection({
  className = "",
  eyebrow = "Why Choose Rational",
  title = "Quality-first development at every stage of your home-buying journey.",
  description = "We build for end-users, investors, and businesses across India who want a home or workspace backed by transparent documentation and strong construction — and we sell a curated portfolio of premium property across Dubai with the same commitment to clarity and execution.",
  imageSrc = "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Modern real estate development",
  features = defaultFeatures,
}) {
  return (
    <section className={`bg-[#f8fbfd] py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14  ">
          <div className="relative sm:h-[420px] lg:h-[700px]">
            <div className="overflow-hidden rounded-[28px] border border-[#dce5f2] bg-white shadow-[0_10px_24px_rgba(12,20,36,0.06)]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[700px]"
              />
            </div>

            <div className="absolute bottom-6 left-6 rounded-[20px] bg-[#123f72] px-6 py-5 text-white shadow-[0_8px_20px_rgba(18,63,114,0.2)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/12">
                  <Building2 size={22} />
                </div>
                <div>
                  <p className="text-size-28 font-semibold leading-none tracking-[-0.05em]">
                    1000+ 
                  </p>
                  <p className="mt-1 text-size-12 font-semibold uppercase tracking-[0.18em] text-[#d7e4ff]">
                   
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[760px]">
            <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#123f72]">
              {eyebrow}
            </p>

            <h2 className="mt-4 text-size-36 font-semibold leading-none tracking-[-0.05em] text-[#172033] sm:text-size-40 lg:text-size-46">
              {title}
            </h2>

            <p className="mt-3 max-w-[720px] text-size-16 leading-6 text-[#667085] sm:text-size-17">
              {description}
            </p>

            <div className="mt-6 space-y-4">
              {features.map((feature) => {
                const Icon = feature.Icon;

                return (
                  <div
                    key={feature.title}
                    className="border-b border-[#dce2ec] py-4 last:border-b-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#eef4fb] text-[#123f72]">
                        <Icon size={21} />
                      </div>
                      <div>
                        <h3 className="text-size-18 font-semibold tracking-[-0.03em] text-[#172033]">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-size-15 leading-7 text-[#667085]">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-[14px] bg-[#123f72] px-6 py-3.5 text-size-15 font-semibold text-white transition hover:bg-[#0f3460]"
            >
              Book A Site Visit
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
