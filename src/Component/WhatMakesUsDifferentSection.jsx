import { BadgeCheck, Clock3, FileText, Handshake } from "lucide-react";

const defaultPoints = [
  {
    title: "Construction quality",
    text: "Every project is built with strong engineering, premium materials, and rigorous in-house site supervision from day one.",
    Icon: BadgeCheck,
  },
  {
    title: "Transparent dealings",
    text: "Upfront pricing, clear payment plans, and full disclosure of approvals — no hidden charges or last-minute surprises.",
    Icon: Handshake,
  },
  {
    title: "Clear-title paperwork",
    text: "Every unit is sold with verified titles, RERA registration, and fully compliant sale documentation you can trust.",
    Icon: FileText,
  },
  {
    title: "On-time possession",
    text: "A 20-year track record of delivering homes as promised — with regular construction updates throughout the journey.",
    Icon: Clock3,
  },
];

export default function WhatMakesUsDifferentSection({
  className = "",
  points = defaultPoints,
}) {
  return (
    <section className={`bg-white py-20 sm:pt-24 sm:pb-8 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <div className="max-w-[560px]">
            <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#123f72]">
              What Makes Us Different
            </p>
            <h2 className="mt-4 text-size-36 font-semibold leading-[1.05] tracking-[-0.05em] text-[#172033] sm:text-size-46 lg:text-size-52">
              Why homeowners and investors pick Rational Real Estate.
            </h2>
            <p className="mt-6 text-size-16 leading-8 text-[#667085]">
              We bring together strong engineering, transparent paperwork, and
              a long-term customer-care mindset to make buying a home feel
              simple, confident, and fair — from booking to move-in and beyond.
            </p>

            <div className="mt-8 rounded-[24px] bg-[linear-gradient(135deg,#123f72_0%,#244f86_100%)] px-6 py-6 text-white shadow-[0_22px_44px_rgba(18,63,114,0.2)]">
              <p className="text-size-44 font-semibold leading-none tracking-[-0.05em]">
                98%
              </p>
              <p className="mt-3 text-size-12 font-semibold uppercase tracking-[0.2em] text-[#d8e4ff]">
                Customer Satisfaction Rate
              </p>
              <p className="mt-4 text-size-14 leading-7 text-[#dbe6f8]">
                Trusted by homeowners and investors across every market for
                quality construction, transparent dealings, and on-time delivery.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((point) => {
              const Icon = point.Icon;

              return (
                <article
                  key={point.title}
                  className="rounded-[20px] border border-[#e3e8f0] bg-[#f8fbfd] px-5 py-6 shadow-[0_14px_30px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#eef4fb] text-[#123f72]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-size-20 font-semibold tracking-[-0.03em] text-[#172033]">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-size-15 leading-7 text-[#667085]">
                    {point.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
