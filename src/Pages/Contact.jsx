import ContactHeroOverlaySection from "../Component/ContactHeroOverlaySection";
import FAQSection from "../Component/FAQSection";
import FooterSection from "../Component/FooterSection";

const contactFaqs = [
  {
    question: "How do I start my documentation process?",
    answer:
      "You can contact our team through the form, phone, or email. We first review your property type, documentation status, and approval requirements before recommending the next steps.",
  },
  {
    question: "Which approvals do you assist with?",
    answer:
      "We assist with building permissions, NOC services, TNCP approvals, property documentation, Namantaran, land diversion, and municipal clearances.",
  },
  {
    question: "Do you support projects outside Bhopal?",
    answer:
      "Yes. While Bhopal is a core service area, we also support documentation and liaison needs across Madhya Pradesh depending on project requirements.",
  },
  {
    question: "Can I book a consultation before submitting documents?",
    answer:
      "Yes. We recommend an initial consultation so our team can guide you on required papers, process timeline, and the right approval path before filing.",
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
        description="Here are a few quick answers about consultation, approvals, and the documentation process before you get in touch with our team."
        faqs={contactFaqs}
      />

      <FooterSection />
    </main>
  );
}
