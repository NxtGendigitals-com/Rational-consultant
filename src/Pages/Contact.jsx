import ContactHeroOverlaySection from "../Component/ContactHeroOverlaySection";
import FAQSection from "../Component/FAQSection";
import FooterSection from "../Component/FooterSection";

const contactFaqs = [
  {
    question: "How do I book a site visit?",
    answer:
      "Reach out through the form, phone, or email with your preferred time. Our sales team will share project details and schedule a guided walkthrough of the unit, amenities, and documentation.",
  },
  {
    question: "What kind of properties do you offer?",
    answer:
      "In India, we develop residential apartments, plotted communities, commercial showrooms, office spaces, and integrated townships — all RERA-registered and built on clear-title land. In Dubai, we sell a curated portfolio of premium apartments, villas, and commercial units with verified titles and full DLD-compliant paperwork.",
  },
  {
    question: "Which markets do you operate in?",
    answer:
      "We operate across India and Dubai. In India our development footprint spans multiple cities, and in Dubai we sell premium property across the UAE market — share what you're looking for and we'll point you to the right project or unit.",
  },
  {
    question: "Can you help with home loans and legal paperwork?",
    answer:
      "Yes. We partner with leading banks and HFCs for competitive home-loan options and hand over every unit with fully verified, RERA-compliant legal documentation.",
  },
];

export default function Contact() {
  return (
    <main className="overflow-hidden bg-[#f7f8fc] text-slate-900">
      <section
        className="relative overflow-hidden px-4 pb-12 pt-28 text-white sm:px-6 lg:px-8 lg:pb-16 lg:pt-32"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12, 22, 48, 0.86) 0%, rgba(18, 63, 114, 0.92) 100%), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(61,130,245,0.22),transparent_34%)]" />
        <div className="absolute -left-24 bottom-[-80px] h-72 w-72 rounded-full bg-white/6 blur-3xl" />
        <div className="mx-auto max-w-[1500px]">


          <div id="contact-form">
            <ContactHeroOverlaySection />
          </div>
        </div>
      </section>

      <FAQSection
        className="bg-[#f8fbfd] py-20 sm:pb-24"
        eyebrow="Need help?"
        titleStart="Common contact"
        titleHighlight="questions"
        description="Here are a few quick answers about site visits, project details, and the home-buying process before you get in touch with our team."
        faqs={contactFaqs}
      />

      <FooterSection />
    </main>
  );
}
