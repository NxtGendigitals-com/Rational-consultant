const defaultStats = [
  { value: "578", label: "Luxury Apartments", featured: true },
  { value: "8", label: "Floors", featured: false },
  { value: "160", label: "Parking Spaces", featured: false },
];

const defaultSpaces = [
  {
    title: "Building facade",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lobby & lounge",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Amenity spaces",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
];

export default function AboutPageShowcaseSection({
  className = "",
  stats = defaultStats,
  spaces = defaultSpaces,
}) {
  return (
    <section id="about-showcase" className={`bg-white py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[26px]  p-4  sm:p-5 lg:p-6">
          <div className="grid gap-3 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-[18px] border border-[#e2e5eb] px-6 py-6 ${
                  stat.featured
                    ? "border-[#173f94] bg-[#173f94] text-white"
                    : "border-[#4a4a4a] bg-transparent text-[#173f94]"
                }`}
              >
                <p className="text-size-54 font-semibold leading-none tracking-[-0.05em]">
                  {stat.value}
                </p>
                <p
                  className={`mt-2 text-size-12 font-semibold uppercase tracking-[0.18em] ${
                    stat.featured ? "text-[#d7e4ff]" : "text-[#d8cfb9]"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.55fr_0.75fr_0.75fr]">
            {spaces.map((space, index) => (
              <div
                key={space.title}
                className={`relative overflow-hidden rounded-[20px] ${
                  index === 0 ? "min-h-[420px]" : "min-h-[420px]"
                }`}
              >
                <img
                  src={space.image}
                  alt={space.title}
                  className={`h-full w-full object-cover ${
                    index === 0 ? "object-center" : "object-center"
                  }`}
                />
                <div
                  className={`absolute inset-0 ${
                    index === 0
                      ? "bg-[linear-gradient(180deg,rgba(23,63,148,0.18)_0%,rgba(23,63,148,0.4)_100%)]"
                      : "bg-[linear-gradient(180deg,rgba(35,35,35,0.08)_0%,rgba(35,35,35,0.18)_100%)]"
                  }`}
                />
                <span className="absolute bottom-4 left-4 rounded-[10px] bg-[#173f94] px-4 py-2 text-size-13 font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                  {space.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
