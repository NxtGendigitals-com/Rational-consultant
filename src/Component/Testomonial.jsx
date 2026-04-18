import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const defaultTestimonials = [
  {
    quote:
      "Our team collaboration improved dramatically. Everyone is on the same page, making decisions faster and with more confidence. It felt magic.",
    name: "James Rodriguez",
    role: "CTO, ScaleUp Inc",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "It was skeptical at first, but Datalory proved itself in the first week. The ROI is undeniable. We've never going back to the old ways.",
    name: "Lisa Kowalski",
    role: "Head of Marketing, GrowthCo",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "Finally, a platform that actually delivers on its promises. Clean interface, powerful features, and expert support whenever we need it.",
    name: "David Nguyen",
    role: "Founder, StartupHub",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "From the first consultation to the final handover, the process felt smooth, premium, and deeply professional. We genuinely enjoyed every step.",
    name: "Maria Bennett",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
  },
];

const defaultStats = [
  { value: "4.9/5", label: "Client Rating" },
  { value: "10K+", label: "Happy Residents" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "500+", label: "Project Reviews" },
];

function TestimonialCard({ quote, name, role, image }) {
  return (
    <article className="h-full rounded-[18px] border border-[#efe5e4] bg-white p-5 ">
      <div className="flex items-center gap-1 text-[#1a2230]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={13} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <p className="mt-4 text-size-13 leading-6 text-[#677084]">{quote}</p>

      <div className="mt-5 flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-[#f3e1de]"
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
    <section
      className={` py-20 sm:pt-24 sm:pb-5 ${className}`}
    >
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-size-12 font-semibold uppercase tracking-[0.22em] text-[#2446a8]">
              Testimonials
            </p>
            <h2 className="mt-3 text-size-34 font-semibold leading-[0.98] tracking-[-0.05em] text-[#1a2230] sm:text-size-40 lg:text-size-48">
              Trusted by clients who
              <span className="block text-[#27406b]">value premium living</span>
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => scrollToIndex(activeIndex - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e6d9d7] bg-white text-[#2446a8] transition hover:border-[#2446a8] "
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => scrollToIndex(activeIndex + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e6d9d7] bg-white text-[#2446a8] transition hover:border-[#2446a8] "
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6d9d7] bg-white text-[#2446a8]"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6d9d7] bg-white text-[#2446a8]"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 border-t border-[#efe4e2] pt-8 sm:grid-cols-2 lg:grid-cols-4">
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
