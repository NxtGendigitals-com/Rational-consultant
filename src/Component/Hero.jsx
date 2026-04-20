export default function Hero({
  className = "",
  backgroundImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  rightImageSrc = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
}) {
  return (
    <section
      className={`relative overflow-hidden bg-[#123f72] pt-20 text-white sm:pt-22 lg:pt-24 ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(5, 15, 35, 0.84) 0%, rgba(8, 18, 37, 0.66) 52%, rgba(6, 15, 32, 0.84) 100%), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(18,63,114,0.28)]" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(9,16,32,0.72)_0%,rgba(9,16,32,0.4)_48%,rgba(9,16,32,0.74)_100%)]" />

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-start gap-2 pb-6 pt-7 sm:min-h-[500px] sm:gap-3 sm:pb-8 sm:pt-4 md:min-h-[530px] lg:min-h-[600px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10 lg:pb-14 lg:pt-8">
          <div className="max-w-[640px] pt-0 sm:pt-1 md:max-w-full lg:max-w-[640px] lg:pt-6">
            <h1 className="text-size-34 font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-size-40 md:text-size-44 lg:max-w-[620px] lg:text-size-56">
              EXPERT PROPERTY DOCUMENTATION & LEGAL SERVICES IN BHOPAL
            </h1>

            <p className="mt-3 max-w-[520px] text-size-13 leading-5 text-[#d8deea]/82 sm:mt-4 sm:text-size-14 sm:leading-6 md:max-w-full md:text-size-15 md:leading-6 lg:max-w-[520px]">
             Leading property documentation consultants in Madhya Pradesh. Get expert help with NOC applications, building permissions, municipal clearances, and legal compliance. Professional liaison services for all your property and construction documentation needs.
            </p>
          </div>

          <div className="relative mx-auto mt-1 w-full lg:ml-auto lg:self-center lg:pr-1">
            <div className="rounded-[22px] bg-[#123f721e] p-2.5 shadow-[0_10px_24px_rgba(4,12,30,0.16)]">
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
