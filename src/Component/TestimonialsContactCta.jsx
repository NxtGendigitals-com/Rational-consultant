import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TestimonialsContactCta({
  className = "",
  eyebrow = "Ready to connect?",
  title = "Let’s discuss your property documentation and approval requirements.",
  description = "If you want the same reliable experience our clients talk about, connect with our team and get practical guidance for your next step.",
  buttonLabel = "Go To Contact Page",
  buttonTo = "/contact",
}) {
  return (
    <section className={`bg-white py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#123f72_0%,#1f4f8b_60%,#2a5da0_100%)] px-6 py-8 text-white shadow-[0_24px_60px_rgba(18,63,114,0.22)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[760px]">
              <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#d6e4ff]">
                {eyebrow}
              </p>
              <h2 className="mt-4 text-size-34 font-semibold leading-[0.98] tracking-[-0.05em] sm:text-size-42 lg:text-size-54">
                {title}
              </h2>
              <p className="mt-5 max-w-[680px] text-size-15 leading-8 text-[#dbe6f8]">
                {description}
              </p>
            </div>

            <Link
              to={buttonTo}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-size-15 font-semibold text-[#123f72] transition hover:bg-[#eef4fb]"
            >
              {buttonLabel}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
