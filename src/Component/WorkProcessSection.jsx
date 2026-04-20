import { Building2 } from "lucide-react";

const defaultSteps = [
  {
    title: "Consultation",
    text: "We begin by understanding your project type, documentation stage, and the exact approvals or legal support you need.",
  },
  {
    title: "Documentation",
    text: "Our team organizes the required papers, identifies missing records, and prepares a clear file flow for smooth submission.",
  },
  {
    title: "Submission",
    text: "We coordinate with relevant authorities, monitor progress, and stay involved until the required outcome is completed.",
  },
];

const defaultStats = [
  { value: "20+", label: "Years" },
  { value: "1000+", label: "Files" },
  { value: "MP-Wide", label: "Reach" },
];

export default function WorkProcessSection({
  className = "",
  titleStart = "Our process makes",
  titleHighlight = "approvals simpler",
  imageSrc = "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Documentation and planning session",
  steps = defaultSteps,
  stats = defaultStats,
}) {
  return (
    <section className={`bg-white py-20 sm:pt-20 sm:pb-8 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-[20px] border border-[#eceef3] bg-[#f7f8fb] shadow-[0_16px_34px_rgba(15,23,42,0.08)]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-[260px] w-full object-cover sm:h-[300px] lg:h-[332px]"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4 pl-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 rounded-[12px] border border-[#e2e8f0] bg-[#f8fbfd] px-4 py-2.5"
                >
                  <span className="text-size-16 font-semibold text-[#123f72]">{stat.value}</span>
                  <span className="text-size-12 font-medium uppercase tracking-[0.14em] text-[#8e97a7]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[540px] lg:ml-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h2 className="text-size-34 font-semibold leading-[0.98] tracking-[-0.05em] text-[#1a2230] sm:text-size-40 lg:text-size-48">
                  <span className="block">{titleStart}</span>
                  <span className="block text-[#123f72]">{titleHighlight}</span>
                </h2>
              </div>

              <div className="hidden rounded-2xl bg-[#eef4fb] p-3 text-[#123f72] lg:flex">
                <Building2 size={22} />
              </div>
            </div>

            <div className="mt-8 space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#123f72] text-size-12 font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="max-w-[430px]">
                    <h3 className="text-size-18 font-semibold leading-6 tracking-[-0.03em] text-[#1f2735]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-size-13 leading-6 text-[#7e8798]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
