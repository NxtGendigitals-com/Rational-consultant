import { BadgeCheck, Globe2, MapPin } from "lucide-react";

const defaultStats = [
  { value: "20+", label: "Years Experience", featured: false },
  { value: "1000+", label: "Files Assisted", featured: false },
  { value: "MP", label: "Wide Coverage", featured: false },
  { value: "100%", label: "End-to-End Support", featured: false },
];

const defaultHighlights = [
  {
    title: "Local process expertise",
    text: "Deep knowledge of municipal approval flows, documentation sequences, and department expectations across Madhya Pradesh.",
    Icon: BadgeCheck,
  },
  {
    title: "City-wide service reach",
    text: "Strategically placed to handle permissions, NOCs, and documentation for clients across Bhopal and MP.",
    Icon: Globe2,
  },
  {
    title: "Accurate documentation",
    text: "Every file is structured for compliance — reducing back-and-forth, delays, and costly rework during approvals.",
    Icon: MapPin,
  },
];

export default function AboutSection({
  className = "",
  title = "Where Expertise Meets Reliable Execution.",
  description = "Rational Consultants brings structured documentation support, authority coordination, and practical local knowledge to help clients navigate property approvals with confidence.",
  buttonLabel = "Learn About Us",
  buttonHref = "/about",
  secondaryButtonLabel = "Contact Us",
  secondaryButtonHref = "/contact",
  topImageSrc = "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  imageSrc = "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  stats = defaultStats,
  highlights = defaultHighlights,
}) {
  return (
    <section className={`bg-white py-20 sm:pt-24 sm:pb-5 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
          <div className="max-w-[760px]">
            <h2 className="max-w-[720px] text-size-36 font-semibold leading-[1] tracking-[-0.04em] text-[#123f72] sm:text-size-44 lg:text-size-56">
              {title}
            </h2>

            <p className="mt-6 max-w-[720px] text-size-16 leading-8 text-[#4f535b] sm:text-size-18">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={buttonHref}
                className="inline-flex items-center justify-center rounded-[12px] border border-[#d5d9e2] bg-white px-6 py-3.5 text-size-17 font-semibold text-[#1b2230] transition duration-300 hover:bg-[#123f72] hover:text-white"
              >
                {buttonLabel}
              </a>
              <a
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center rounded-[12px] border border-[#d5d9e2] bg-white px-6 py-3.5 text-size-17 font-semibold text-[#1b2230] transition hover:bg-[#123f72] hover:text-white"
              >
                {secondaryButtonLabel}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[720px] lg:ml-auto">
            <div className="overflow-hidden rounded-[28px] border border-[#e3e7ef] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              <img
                src={topImageSrc}
                alt="Property documentation and consultation"
                className="h-[280px] w-full object-cover object-center sm:h-[360px] lg:h-[430px]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-[16px] bg-[#123f72] px-5 py-4 text-white shadow-[0_8px_18px_rgba(18,63,114,0.18)]">
              <p className="text-size-26 font-semibold leading-none tracking-[-0.04em]">
                Expert
              </p>
              <p className="mt-2 text-size-11 font-semibold uppercase tracking-[0.18em] text-[#d8e4ff]">
                Documentation Support
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 pt-12 lg:grid-cols-[1fr_0.98fr] lg:items-start">
          <div className="relative min-h-[420px] overflow-hidden rounded-[24px] sm:min-h-[650px]">
            <div className="absolute inset-x-6 bottom-0 top-1 overflow-hidden rounded-[20px]">
              <img
                src={imageSrc}
                alt="Modern building and property"
                className="h-full w-full object-cover object-bottom opacity-100"
              />
            </div>

            <div className="absolute right-0 top-10 hidden rounded-[18px] border border-white/12 bg-[#123f72] px-12 py-2 shadow-[0_8px_18px_rgba(0,0,0,0.1)] sm:block">
              <p className="text-size-42 font-semibold leading-none tracking-[-0.05em] text-white">
                1000+
              </p>
              <p className="mt-1 text-size-12 font-semibold uppercase leading-5 tracking-[0.18em] text-[#dbe5ff]">
                Cases
                <br />
                Handled
              </p>
            </div>

            <div className="absolute bottom-12 left-0 hidden rounded-[18px] bg-[#123f72] px-12 py-2 shadow-[0_8px_18px_rgba(0,0,0,0.12)] sm:block">
              <p className="text-size-42 font-semibold leading-none tracking-[-0.05em] text-white">
                20+
              </p>
              <p className="mt-1 text-size-12 font-semibold uppercase leading-5 tracking-[0.18em] text-[#dbe5ff]">
                Years of
                <br />
                Experience
              </p>
            </div>

            <div className="absolute inset-x-6 bottom-5 sm:hidden">
              <div
                className="inline-flex max-w-[260px] items-center rounded-full bg-[#123f72] px-5 py-3 text-size-11 font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_28px_rgba(18,63,114,0.22)]"
                style={{ animation: "aboutMobileStripSlide 4s ease-in-out infinite alternate" }}
              >
                Expert Documentation & Approval Support
              </div>
            </div>
          </div>

          <div className="space-y-6 px-6">
            <div className="grid max-w-[500px] grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className={`rounded-[20px] border border-[#e2e5eb] px-5 py-8 ${
                    index === 0
                      ? "bg-[#123f72] text-white"
                      : "bg-white text-[#123f72]"
                  }`}
                >
                  <p className="text-size-42 font-semibold leading-none tracking-[-0.05em]">
                    {stat.value}
                  </p>
                  <p
                    className={`mt-3 text-size-12 font-semibold uppercase leading-5 tracking-[0.18em] ${
                      index === 0 ? "text-[#d0ddff]" : "text-[#323232]"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-5 pt-3">
              {highlights.map((item) => {
                const Icon = item.Icon;

                return (
                  <div key={item.title} className="flex items-start gap-4 pt-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#eef4fb] text-[#123f72]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-size-22 font-medium tracking-[-0.03em] text-[#123f72]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-size-16 leading-7 text-[#4f535b]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
