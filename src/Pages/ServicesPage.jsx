import Services from "../Component/Services";
import WorkProcessSection from "../Component/WorkProcessSection";
import FAQSection from "../Component/FAQSection";
import TestimonialsContactCta from "../Component/TestimonialsContactCta";
import FooterSection from "../Component/FooterSection";

const serviceProcessSteps = [
  {
    title: "Discovery & Site Visit",
    text: "We understand what you're looking for — home, plot, office, or investment — and walk you through the projects that fit.",
  },
  {
    title: "Selection & Transparent Paperwork",
    text: "Pick the unit, review every document openly, and lock the price with a clear, RERA-compliant booking process.",
  },
  {
    title: "Construction, Handover & Care",
    text: "Regular site updates through construction, smooth possession, and a dedicated customer-care team long after you move in.",
  },
];

const serviceFaqs = [
  {
    question: "What does Rational Real Estate build and sell?",
    answer:
      "In India we develop residential apartments, plotted communities, commercial showrooms, offices, and integrated townships — backed by in-house design, construction, legal, and customer-care teams. In Dubai, we sell a curated portfolio of premium apartments, villas, and commercial units with verified titles and full DLD-compliant paperwork.",
  },
  {
    question: "Are your projects RERA-approved?",
    answer:
      "Yes. Every project we sell is registered under RERA, built on clear-title land, and handed over with complete legal documentation.",
  },
  {
    question: "Do you help with home loans?",
    answer:
      "Absolutely. We partner with leading banks and housing finance companies to help buyers get competitive interest rates, quick approvals, and paperwork-light loan processing.",
  },
  {
    question: "How do I book a home?",
    answer:
      "It starts with a site visit, followed by unit selection, a transparent booking process, and a flexible payment plan aligned to construction milestones.",
  },
];

export default function ServicesPage() {
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
                Our Services
              </p>
              <h1 className="mt-4 text-size-34 font-semibold leading-[1.02] tracking-[-0.04em] sm:text-size-46 lg:text-size-56">
                Homes, Plots & Commercial Spaces In India — Premium Property For Sale In Dubai
              </h1>
              <p className="mt-5 text-size-15 leading-7 text-[#d8e3f6]">
                Explore our residential apartments, plotted developments,
                commercial showrooms, and integrated townships in India — and a
                curated portfolio of premium property we sell across Dubai, all
                backed by strong engineering, transparent paperwork, and on-time
                delivery.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#services-list"
                  className="inline-flex items-center justify-center rounded-[12px] bg-white px-6 py-3.5 text-size-15 font-semibold text-[#123f72] transition hover:bg-[#eef4fb]"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/6 px-6 py-7 shadow-[0_10px_24px_rgba(3,10,24,0.18)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#d6e4ff]">
                What We Cover
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Residential Apartments & Villas", desc: "Thoughtfully designed homes for modern families across India" },
                  { label: "Plotted Developments", desc: "Clear-title plots in approved layouts" },
                  { label: "Commercial & Retail Spaces", desc: "Showrooms and offices in prime Indian locations" },
                  { label: "Property For Sale In Dubai", desc: "Premium apartments, villas, and commercial units we sell across the UAE" },
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

      <div id="services-list">
        <Services />
      </div>

      <WorkProcessSection
        className="bg-white"
        titleStart="How your"
        titleHighlight="home-buying journey works"
        imageSrc="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Home buying discussion with a real estate team"
        steps={serviceProcessSteps}
      />

      <FAQSection
        className="bg-[#f8fbfd]"
        eyebrow="Service FAQs"
        titleStart="Questions about"
        titleHighlight="our services"
        description="A few quick answers about our projects, legal process, and what buying with Rational Real Estate looks like."
        faqs={serviceFaqs}
      />

      <TestimonialsContactCta
        eyebrow="Looking for your next home in India or Dubai?"
        title="Visit one of our ongoing Indian projects or browse our Dubai property portfolio today."
        description="Whether you want an apartment, a plot, or a commercial space in India — or premium property we sell across Dubai — our team will help you shortlist and close with confidence."
        buttonLabel="Go To Contact Page"
      />
      <FooterSection />
    </main>
  );
}
