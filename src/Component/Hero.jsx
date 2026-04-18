export default function Hero({
  className = "",
  backgroundImage = "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
  rightImageSrc = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
}) {
  return (
    <section
      className={`relative overflow-hidden bg-[#123f72] pt-20 text-white sm:pt-24 lg:pt-28 ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(5, 15, 35, 0.82) 0%, rgba(8, 18, 37, 0.64) 52%, rgba(6, 15, 32, 0.82) 100%), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(18,63,114,0.28)]" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(9,16,32,0.72)_0%,rgba(9,16,32,0.4)_48%,rgba(9,16,32,0.74)_100%)]" />

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-start gap-2 pb-6 pt-7 sm:min-h-[520px] sm:gap-4 sm:pb-10 sm:pt-4 md:min-h-[560px] lg:min-h-[650px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:pb-20 lg:pt-12">
          <div className="max-w-[640px] pt-0 sm:pt-1 lg:pt-6">
            <h1 className="max-w-[620px] text-size-30 font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-size-40 md:text-size-48 lg:text-size-72">
              <span className="block">Elevate Your Lifestyle</span>
              <span className="block">with Modern Luxury</span>
              <span className="block">Apartments</span>
            </h1>

            <p className="mt-3 max-w-[460px] text-size-13 leading-6 text-[#d8deea]/82 sm:mt-4 sm:text-size-14 sm:leading-6 md:text-size-15 md:leading-7">
              Discover thoughtfully designed residences, airy interiors, and
              the premium amenities crafted for refined everyday living.
            </p>
          </div>

          <div className="relative mx-auto mt-1 w-full max-w-[700px] lg:ml-auto lg:self-center lg:pr-1">
            <div className="rounded-[22px] bg-[#173f941e] p-2.5 shadow-[0_24px_50px_rgba(4,12,30,0.28)]">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={rightImageSrc}
                  alt="Construction and building project"
                  className="h-[210px] w-full object-cover object-center sm:h-[260px] md:h-[320px] lg:h-[472px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
