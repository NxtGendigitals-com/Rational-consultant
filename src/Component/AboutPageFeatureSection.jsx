import { ArrowRight, BadgeCheck, Building2, FileCheck2, ShieldCheck } from "lucide-react";

const defaultFeatures = [
  {
    title: "20+ Years Of Practical Experience",
    text: "We guide clients through permissions, documentation, and approvals with a process built on local expertise and long-term trust.",
    Icon: BadgeCheck,
  },
  {
    title: "End-To-End Approval Support",
    text: "From initial review to authority submission and final follow-up, our team manages each stage with clarity and consistency.",
    Icon: FileCheck2,
  },
  {
    title: "Reliable Compliance Guidance",
    text: "We reduce delays and confusion by helping you prepare accurate files, legal paperwork, and department-ready submissions.",
    Icon: ShieldCheck,
  },
];

export default function AboutPageFeatureSection({
  className = "",
  eyebrow = "Why Choose Rational",
  title = "Professional guidance for every stage of your property approval journey.",
  description = "We work with homeowners, builders, investors, and consultants who need dependable support for municipal permissions, NOC applications, title review, and liaison services.",
  imageSrc = "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Consultation and documentation planning",
  features = defaultFeatures,
}) {
  return (
    <section className={`bg-[#f8fbfd] py-18 sm:pt-20 sm:pb-12 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14  ">
          <div className="relative sm:h-[420px] lg:h-[700px]">
            <div className="overflow-hidden rounded-[28px] border border-[#dce5f2] bg-white shadow-[0_24px_54px_rgba(12,20,36,0.08)]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[700px]"
              />
            </div>

            <div className="absolute bottom-6 left-6 rounded-[20px] bg-[#123f72] px-6 py-5 text-white shadow-[0_18px_40px_rgba(18,63,114,0.26)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/12">
                  <Building2 size={22} />
                </div>
                <div>
                  <p className="text-size-28 font-semibold leading-none tracking-[-0.05em]">
                    1000+
                  </p>
                  <p className="mt-1 text-size-12 font-semibold uppercase tracking-[0.18em] text-[#d7e4ff]">
                    Projects Assisted
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[760px]">
            <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#123f72]">
              {eyebrow}
            </p>

            <h2 className="mt-4 text-size-36 font-semibold leading-[1] tracking-[-0.05em] text-[#172033] sm:text-size-46 lg:text-size-40">
              {title}
            </h2>

            <p className="mt-3 max-w-[720px] text-size-16 leading-6 text-[#667085] sm:text-size-17">
              {description}
            </p>

            <div className="mt-5 space-y-4">
              {features.map((feature) => {
                const Icon = feature.Icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-[22px] border border-[#e2e8f0] bg-white px-5 py-5 shadow-[0_10px_22px_rgba(15,23,42,0.04)]"
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
              Start Your Process
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
