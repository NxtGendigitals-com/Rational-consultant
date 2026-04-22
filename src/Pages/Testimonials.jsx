import Testomonial from "../Component/Testomonial";
import WhatMakesUsDifferentSection from "../Component/WhatMakesUsDifferentSection";
import WorkProcessSection from "../Component/WorkProcessSection";
import TestimonialsContactCta from "../Component/TestimonialsContactCta";
import FooterSection from "../Component/FooterSection";

const testimonialJourneySteps = [
  {
    title: "Understanding Your Needs",
    text: "We start by understanding the kind of home, plot, or commercial space that fits your lifestyle, family, or business goals.",
  },
  {
    title: "Transparent Selection & Paperwork",
    text: "Every project is walked through in detail — pricing, legal documents, amenities, and payment plans — with zero ambiguity.",
  },
  {
    title: "Construction, Handover & Ongoing Care",
    text: "Regular construction updates, smooth possession, and a dedicated customer-care team long after you move in.",
  },
];

export default function Testimonials() {
  return (
    <main className="overflow-hidden bg-[#f7f8fc] text-slate-900">
      <section
        className="relative overflow-hidden px-4 pb-12 pt-28 text-white sm:px-6 lg:px-8 lg:pb-16 lg:pt-32"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12, 22, 48, 0.86) 0%, rgba(18, 63, 114, 0.9) 100%), url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80')",
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
                Testimonials
              </p>
              <h1 className="mt-4 text-size-34 font-semibold leading-[1.02] tracking-[-0.04em] sm:text-size-46 lg:text-size-56">
                Hear What Our Homeowners Say About Rational Real Estate
              </h1>
              <p className="mt-5 text-size-15 leading-7 text-[#d8e3f6]">
                From home buyers and plot owners to commercial investors, our
                customers trust us for quality construction, transparent
                paperwork, and on-time possession across every project.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#testimonials-list"
                  className="inline-flex items-center justify-center rounded-[12px] bg-white px-6 py-3.5 text-size-15 font-semibold text-[#123f72] transition hover:bg-[#eef4fb]"
                >
                  Read Reviews
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/6 px-6 py-7 shadow-[0_10px_24px_rgba(3,10,24,0.18)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#d6e4ff]">
                Client Trust
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { stat: "4.9 / 5", label: "Average customer rating" },
                  { stat: "1,000+", label: "Families in our communities" },
                  { stat: "20+ Years", label: "Of trusted development" },
                  { stat: "Multi-City", label: "Presence across growing markets" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="rounded-[16px] border border-white/10 bg-white/6 px-4 py-5 text-center">
                    <p className="text-size-22 font-semibold text-white">{stat}</p>
                    <p className="mt-1.5 text-size-13 leading-5 text-[#d8e3f6]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
     <WhatMakesUsDifferentSection />
      <WorkProcessSection
        className="bg-white"
        titleStart="How our customers experience"
        titleHighlight="the buying journey"
        imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Happy family at a Rational Real Estate home"
        steps={testimonialJourneySteps}
      />
      <div id="testimonials-list">
        <Testomonial className="bg-white" />
      </div>


      <TestimonialsContactCta />
      <FooterSection />
    </main>
  );
}
