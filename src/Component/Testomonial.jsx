import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const defaultTestimonials = [
  {
    quote:
      "Rational Consultants handled our building permission from start to finish. The documentation was accurate, the follow-up was consistent, and we faced no delays. Highly professional team.",
    name: "Rajesh Verma",
    role: "Property Developer, Bhopal",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "We had a complex NOC requirement that other consultants couldn't resolve. Rational Consultants mapped the exact process, handled the departmental submission, and got it cleared efficiently.",
    name: "Priya Sharma",
    role: "Commercial Project Owner, MP",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "Their property documentation review saved us from a title dispute before finalizing our purchase. Thorough, well-structured, and genuinely helpful guidance at every step.",
    name: "Amit Joshi",
    role: "Residential Buyer, Bhopal",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "From consultation to final approval, the entire TNCP process was handled without us needing to follow up repeatedly. That reliability is what we needed and exactly what we got.",
    name: "Sunita Mehta",
    role: "Builder & Investor, Indore",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
  },
];

const defaultStats = [
  { value: "4.9/5", label: "Client Rating" },
  { value: "1000+", label: "Files Handled" },
  { value: "98%", label: "Success Rate" },
  { value: "500+", label: "Happy Clients" },
];

function TestimonialCard({ quote, name, role, image }) {
  return (
    <article className="h-full rounded-[20px] border border-[#efe5e4] bg-white p-5">
      <div className="flex items-center gap-1 text-[#f59e0b]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={13} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <p className="mt-4 text-size-13 leading-6 text-[#677084]">{quote}</p>

      <div className="mt-5 flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-[#eef4fb]"
        />
        <div>
          <p className="text-size-13 font-semibold text-[#1d2534]">{name}</p>
          <p className="text-size-11 text-[#8a91a2]">{role}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testomonial({
  className = "",
  testimonials = defaultTestimonials,
  stats = defaultStats,
}) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const safeIndex = (index + testimonials.length) % testimonials.length;
    setActiveIndex(safeIndex);
    cardRefs.current[safeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <section className={`py-20 sm:pt-24 sm:pb-5 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-size-12 font-semibold uppercase tracking-[0.22em] text-[#123f72]">
              Testimonials
            </p>
            <h2 className="mt-3 text-size-34 font-semibold leading-[0.98] tracking-[-0.05em] text-[#1a2230] sm:text-size-40 lg:text-size-48">
              Trusted by property owners &
              <span className="block text-[#123f72]">developers across Madhya Pradesh</span>
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => scrollToIndex(activeIndex - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#123f72] transition hover:border-[#123f72]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => scrollToIndex(activeIndex + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#123f72] transition hover:border-[#123f72]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="min-w-full snap-start md:min-w-[calc(50%-10px)] xl:min-w-[calc(33.333%-14px)]"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#123f72]"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#123f72]"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 border-t border-[#e2e8f0] pt-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-size-34 font-semibold leading-none tracking-[-0.05em] text-[#1a2230]">
                {stat.value}
              </p>
              <p className="mt-2 text-size-12 font-medium uppercase tracking-[0.18em] text-[#8d93a1]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
