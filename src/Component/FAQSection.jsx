import { useState } from "react";
import { ChevronDown } from "lucide-react";

const defaultFaqs = [
  {
    question: "What is RationalPay?",
    answer:
      "RationalPay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and ensure secure transactions for businesses of all sizes.",
  },
  {
    question: "How does RationalPay work?",
    answer:
      "It centralizes payments, reporting, and workflow automation in one dashboard so teams can manage billing, expenses, and financial operations more efficiently.",
  },
  {
    question: "Is RationalPay secure?",
    answer:
      "Yes. The platform is built with modern security practices, protected payment flows, and access controls to keep sensitive financial data safe.",
  },
  {
    question: "Can RationalPay integrate with other accounting software?",
    answer:
      "Yes. It is designed to connect with common accounting and finance tools so your reporting and bookkeeping stay synchronized.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-[22px] border border-[#ebe8f2] bg-[#f7f6fb] px-5 py-5 shadow-[0_10px_24px_rgba(25,20,45,0.04)] sm:px-6">
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
            <p className="mt-4 max-w-[560px] text-size-14 leading-7 text-[#8a8f9c]">
              {item.answer}
            </p>
          )}
        </div>

        <span
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition ${
            isOpen ? "bg-[#123f72]" : "bg-[#2a5c90]"
          }`}
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
  description = "Choose a plan that fits your business needs and budget. No hidden fees, no surprises, just straightforward pricing for powerful financial management.",
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

            <h2 className="mt-8 text-size-40 font-semibold leading-[0.98] tracking-[-0.05em] text-[#1d2230] sm:text-size-50 lg:text-size-60">
              <span className="block">{titleStart}</span>
              <span className="block text-[#123f72]">{titleHighlight}</span>
            </h2>

            <p className="mt-8 max-w-[360px] text-size-15 leading-7 text-[#969cab]">
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
