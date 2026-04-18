import { useState } from "react";
import { ChevronDown } from "lucide-react";

const defaultFaqs = [
  {
    question: "Which services do you provide?",
    answer:
      "We provide building permissions, NOC services, TNCP approvals, property documentation, liaison support, legal consultation, land diversion, Namantaran services, and municipal clearances across Madhya Pradesh.",
  },
  {
    question: "How do I start my documentation process?",
    answer:
      "Contact our team via the form, phone, or email. We first review your property type, documentation stage, and approval requirements before recommending the right next steps.",
  },
  {
    question: "Do you support both residential and commercial projects?",
    answer:
      "Yes. Our services are tailored for residential, commercial, and development-related projects depending on the approval, documentation, and liaison needs.",
  },
  {
    question: "Can I contact you before my documents are ready?",
    answer:
      "Yes. In many cases an early consultation is the best first step. We guide you on the exact documents, sequence, and approval path before submission starts.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-[20px] border border-[#e2e8f0] bg-[#f8fbfd] px-5 py-5 shadow-[0_10px_24px_rgba(25,20,45,0.04)] sm:px-6">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="text-size-20 font-semibold tracking-[-0.03em] text-[#2a2e39]">
            {item.question}
          </h3>
          {isOpen && (
            <p className="mt-4 max-w-[560px] text-size-14 leading-7 text-[#667085]">
              {item.answer}
            </p>
          )}
        </div>

        <span
          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#123f72] text-white transition"
        >
          <ChevronDown
            size={18}
            className={`transition ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>
    </div>
  );
}

export default function FAQSection({
  className = "",
  eyebrow = "Frequently asked questions",
  titleStart = "Frequently asked",
  titleHighlight = "questions",
  description = "Quick answers about our services, how we work, and how clients usually begin the process with us.",
  faqs = defaultFaqs,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`bg-white py-20 sm:pt-24 sm:pb-8 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-[430px] lg:pl-10">
            <div className="inline-flex items-center rounded-full bg-[#eef4fb] px-4 py-2 text-size-12 font-semibold text-[#123f72] shadow-[0_6px_18px_rgba(18,63,114,0.12)]">
              <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[#123f72]" />
              {eyebrow}
            </div>

            <h2 className="mt-8 text-size-40 font-semibold leading-[0.98] tracking-[-0.05em] text-[#1d2230] sm:text-size-46 lg:text-size-52">
              <span className="block">{titleStart}</span>
              <span className="block text-[#123f72]">{titleHighlight}</span>
            </h2>

            <p className="mt-8 max-w-[360px] text-size-15 leading-7 text-[#667085]">
              {description}
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
