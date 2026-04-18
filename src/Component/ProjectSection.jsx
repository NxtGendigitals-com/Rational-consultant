const defaultProjects = [
  {
    title: "Commercials",
    count: "200+ projects",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    size: "large",
  },
  {
    title: "Residential",
    count: "450+ projects",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    size: "small",
  },
  {
    title: "Kitchen",
    count: "300+ projects",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
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
      className={`group relative overflow-hidden rounded-[2px] bg-slate-200 shadow-[0_18px_42px_rgba(15,23,42,0.12)] ${sizeClass}`}
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
  titleStart = "900+ Projects All",
  titleHighlight = "Over the World",
  description = "From New York to Tokyo, our portfolio spans continents and cultures. Our team brings tailored design solutions to a variety of spaces, always with a focus on quality and innovation.",
  buttonLabel = "Read More",
  buttonHref = "/projects",
  projects = defaultProjects,
}) {
  const [featured, upper, lower] = projects;

  return (
    <section className={`bg-white py-20 sm:pt-20 sm:pb-5 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14">
          <div className="max-w-[300px]">
            <h2 className="text-size-36 font-semibold leading-[0.96] tracking-[-0.05em] text-[#121826] sm:text-size-44 lg:text-size-52">
              <span className="block">{titleStart}</span>
              <span className="block text-[#123f72]">{titleHighlight}</span>
            </h2>

            <p className="mt-6 max-w-[250px] text-size-13 leading-6 text-[#7e8695] sm:text-size-14">
              {description}
            </p>

            <a
              href={buttonHref}
              className="mt-6 inline-flex items-center gap-2 rounded-[2px] bg-[#0c2c71] px-4 py-2.5 text-size-12 font-semibold text-[#ffffff]  transition hover:bg-[#0c2c71]"
            >
              {buttonLabel}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full  text-size-12">
                →
              </span>
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

            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="h-[2px] w-16 bg-[#0c1630]" />
              <span className="text-size-28 font-semibold leading-none tracking-[-0.04em] text-[#161c27]">
                1
              </span>
              <span className="text-size-16 font-medium text-[#1c2431]">2</span>
              <span className="text-size-16 font-medium text-[#8f96a4]">3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
