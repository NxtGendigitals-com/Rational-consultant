import { ArrowRight } from "lucide-react";

const defaultProjects = [
  {
    title: "Residential Projects",
    count: "600+ homes",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    size: "large",
  },
  {
    title: "Plotted Developments",
    count: "250+ plots",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    size: "small",
  },
  {
    title: "Commercial Spaces",
    count: "150+ units",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    size: "small",
  },
];

function ProjectCard({ title, count, image, size = "small" }) {
  const sizeClass =
    size === "large"
      ? "md:row-span-2 md:h-[360px] lg:h-[392px]"
      : "h-[172px] lg:h-[188px]";

  return (
    <div
      className={`group relative overflow-hidden rounded-[20px] bg-slate-200 shadow-[0_18px_42px_rgba(15,23,42,0.12)] ${sizeClass}`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,25,0.06)_0%,rgba(10,15,25,0.58)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white lg:p-6">
        <h3 className="text-size-18 font-semibold tracking-[-0.03em] lg:text-size-22">
          {title}
        </h3>
        <p className="mt-1 text-size-11 uppercase tracking-[0.18em] text-white/80">
          {count}
        </p>
      </div>
    </div>
  );
}

export default function ProjectSection({
  className = "",
  titleStart = "1000+ Homes Delivered",
  titleHighlight = "Across India & Dubai",
  description = "From premium apartments and plotted communities to commercial showrooms in India and premium property we sell across Dubai — our portfolio delivers quality construction, on-time possession, and clear-title ownership.",
  buttonLabel = "Our Projects",
  buttonHref = "/services",
  projects = defaultProjects,
}) {
  const [featured, upper, lower] = projects;

  return (
    <section className={`bg-white py-20 sm:pt-20 sm:pb-5 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
          <div className="lg:max-w-[420px]">
            <h2 className="text-size-36 font-semibold leading-[1.02] tracking-[-0.05em] text-[#121826] sm:text-size-44 lg:text-size-48">
              <span className="block">{titleStart}</span>
              <span className="block text-[#123f72]">{titleHighlight}</span>
            </h2>

            <p className="mt-6 text-size-13 leading-6 text-[#7e8695] sm:text-size-14 lg:max-w-[360px]">
              {description}
            </p>

            <a
              href={buttonHref}
              className="mt-6 inline-flex items-center gap-2 rounded-[12px] bg-[#123f72] px-5 py-2.5 text-size-13 font-semibold text-white transition hover:bg-[#0f3460]"
            >
              {buttonLabel}
              <ArrowRight size={15} />
            </a>
          </div>

          <div>
            <div className="grid gap-4 md:grid-cols-[1.02fr_0.98fr] lg:gap-5">
              <ProjectCard {...featured} size="large" />

              <div className="grid gap-4 lg:gap-5">
                <ProjectCard {...upper} />
                <ProjectCard {...lower} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
