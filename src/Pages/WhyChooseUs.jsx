import WhatMakesUsDifferentSection from "../Component/WhatMakesUsDifferentSection";
import AboutPageFeatureSection from "../Component/AboutPageFeatureSection";
import WorkProcessSection from "../Component/WorkProcessSection";
import TestimonialsContactCta from "../Component/TestimonialsContactCta";
import FooterSection from "../Component/FooterSection";

const whyChooseSteps = [
  {
    title: "Understand What You Need",
    text: "We start with the configuration, location, and budget that fits your family or business — no hard-sell, just a clear shortlist.",
  },
  {
    title: "Build With Quality & Transparency",
    text: "Strong engineering, premium finishes, RERA-compliant paperwork, and a payment schedule aligned to real construction progress.",
  },
  {
    title: "Deliver On Time, Stay For The Long Run",
    text: "We hand over on schedule, resolve snags promptly, and remain available through a dedicated customer-care team after possession.",
  },
];

export default function WhyChooseUs() {
  return (
    <main className="overflow-hidden bg-[#f7f8fc] text-slate-900">
      <section
        className="relative overflow-hidden px-4 pb-12 pt-28 text-white sm:px-6 lg:px-8 lg:pb-16 lg:pt-32"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12, 22, 48, 0.86) 0%, rgba(18, 63, 114, 0.92) 100%), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(61,130,245,0.22),transparent_34%)]" />
        <div className="absolute -left-24 bottom-[-80px] h-72 w-72 rounded-full bg-white/6 blur-3xl" />
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/6 px-6 py-7 shadow-[0_10px_24px_rgba(3,10,24,0.18)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#d6e4ff]">
                Why Choose Us
              </p>
              <h1 className="mt-4 text-size-34 font-semibold leading-[1.02] tracking-[-0.04em] sm:text-size-46 lg:text-size-56">
                A Property Developer Built On Trust, Quality, And On-Time Delivery
              </h1>
              <p className="mt-5 text-size-15 leading-7 text-[#d8e3f6]">
                We combine strong construction, transparent paperwork, thoughtful
                design, and long-term customer care — so every buyer moves into
                their home with complete confidence.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#why-main"
                  className="inline-flex items-center justify-center rounded-[12px] bg-white px-6 py-3.5 text-size-15 font-semibold text-[#123f72] transition hover:bg-[#eef4fb]"
                >
                  Explore Why Us
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/6 px-6 py-7 shadow-[0_10px_24px_rgba(3,10,24,0.18)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#d6e4ff]">
                Our Strengths
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Uncompromised Construction Quality", desc: "Strong engineering, premium finishes, and durable materials" },
                  { label: "On-Time Possession", desc: "A 20-year track record of handing over projects as promised" },
                  { label: "RERA-Compliant Documentation", desc: "Clear titles, sanctioned plans, and transparent sale deeds" },
                  { label: "Long-Term Customer Care", desc: "Dedicated teams supporting you well beyond possession" },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3 rounded-[16px] border border-white/10 bg-white/6 px-4 py-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#7eb6ff]" />
                    <div>
                      <p className="text-size-14 font-semibold text-white">{label}</p>
                      <p className="mt-1 text-size-13 leading-5 text-[#d8e3f6]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="why-main">
        <WhatMakesUsDifferentSection />
      </div>

      <AboutPageFeatureSection
        className="py-16 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-20"
        eyebrow="Our Advantage"
        title="Why homeowners and investors choose Rational Real Estate."
        description="From apartments and plots to commercial spaces, we focus on construction quality, transparent paperwork, and on-time possession — the things that actually matter to buyers."
        imageSrc="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1200&q=80"
        imageAlt="A premium residential project by Rational Real Estate"
      />

      <WorkProcessSection
        className="bg-white"
        titleStart="How we build"
        titleHighlight="long-term trust"
        imageSrc="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
        imageAlt="On-site review of an ongoing project"
        steps={whyChooseSteps}
      />

      <TestimonialsContactCta
        eyebrow="Ready to find your next home?"
        title="Partner with a developer that values your trust as much as the home it builds."
        description="Whether you're looking at an apartment, a plot, or a commercial space, our team is ready to help you choose with confidence."
        buttonLabel="Go To Contact Page"
      />
      <FooterSection />
    </main>
  );
}
