import Services from "../Component/Services";
import WorkProcessSection from "../Component/WorkProcessSection";
import FAQSection from "../Component/FAQSection";
import TestimonialsContactCta from "../Component/TestimonialsContactCta";
import FooterSection from "../Component/FooterSection";

const serviceProcessSteps = [
  {
    title: "Consultation & Requirement Review",
    text: "We understand your project type, current documentation status, and the exact approvals or legal support you require.",
  },
  {
    title: "Document Planning & Preparation",
    text: "Our team organizes the required papers, identifies missing records, and prepares the file flow for a smooth submission process.",
  },
  {
    title: "Submission, Liaison & Final Follow-up",
    text: "We coordinate with the relevant authorities, monitor updates, and stay involved until the required outcome is completed.",
  },
];

const serviceFaqs = [
  {
    question: "Which services do you provide?",
    answer:
      "We provide building permissions, NOC services, TNCP approvals, property documentation, liaison support, legal consultation, land diversion, Namantaran services, and municipal clearances.",
  },
  {
    question: "Can I contact you before my documents are ready?",
    answer:
      "Yes. In many cases an early consultation is the best step, because we can guide you on the exact documents, sequence, and approval path before submission starts.",
  },
  {
    question: "Do you support both residential and commercial projects?",
    answer:
      "Yes. Our services are tailored for residential, commercial, and development-related projects depending on the approval, documentation, and liaison needs.",
  },
  {
    question: "How does your service process usually begin?",
    answer:
      "It starts with a requirement review, followed by document planning, file preparation, submission support, and authority follow-up until the desired stage is complete.",
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
          <div className="max-w-[980px] rounded-[28px] border border-white/10 bg-white/6 px-6 py-7 shadow-[0_10px_24px_rgba(3,10,24,0.18)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#d6e4ff]">
              Our Services
            </p>
            <h1 className="mt-4 max-w-[860px] text-size-34 font-semibold leading-[1.02] tracking-[-0.04em] sm:text-size-46 lg:text-size-56">
              End-To-End Documentation, Approval, And Liaison Support For Your Property Projects
            </h1>
            <p className="mt-5 max-w-[760px] text-size-15 leading-7 text-[#d8e3f6]">
              Explore the professional services we provide for permissions, NOC
              applications, property documentation, legal consultation, and
              authority coordination across residential and commercial projects.
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
        </div>
      </section>

      <div id="services-list">
        <Services />
      </div>

      <WorkProcessSection
        className="bg-white"
        titleStart="How our service"
        titleHighlight="process works"
        imageSrc="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Documentation and planning discussion"
        steps={serviceProcessSteps}
      />

      <FAQSection
        className="bg-[#f8fbfd]"
        eyebrow="Service FAQs"
        titleStart="Questions about"
        titleHighlight="our services"
        description="A few quick answers about how our services work, what we support, and how clients usually begin with us."
        faqs={serviceFaqs}
      />

      <TestimonialsContactCta
        eyebrow="Need service support?"
        title="Discuss your project approvals, paperwork, and documentation needs with our team."
        description="Whether you need permissions, legal review, liaison support, or document preparation, we can help you move forward with clarity."
        buttonLabel="Go To Contact Page"
      />
      <FooterSection />
    </main>
  );
}
