import AboutPageFeatureSection from "../Component/AboutPageFeatureSection";
import Testomonial from "../Component/Testomonial";
import ContactSection from "../Component/ContactSection";
import FooterSection from "../Component/FooterSection";

export default function About() {
  return (
    <main className="overflow-hidden bg-[#f7f8fc] text-slate-900">
      <section
        className="relative overflow-hidden px-4 pb-12 pt-28 text-white sm:px-6 lg:px-8 lg:pb-16 lg:pt-32"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12, 22, 48, 0.84) 0%, rgba(18, 63, 114, 0.9) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(61,130,245,0.22),transparent_34%)]" />
        <div className="absolute -left-24 bottom-[-80px] h-72 w-72 rounded-full bg-white/6 blur-3xl" />
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/6 px-6 py-7 shadow-[0_10px_24px_rgba(3,10,24,0.18)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#d6e4ff]">
                About Rational Consultants
              </p>
              <h1 className="mt-4 text-size-34 font-semibold leading-[1.02] tracking-[-0.04em] sm:text-size-46 lg:text-size-56">
                Trusted Property Documentation And Liaison Experts In Bhopal
              </h1>
              <p className="mt-5 text-size-15 leading-7 text-[#d8e3f6]">
                Rational Consultants brings over 20 years of experience in building
                permissions, NOC applications, municipal clearances, property
                documentation, and legal compliance support across Madhya Pradesh.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#about-presence"
                  className="inline-flex items-center justify-center rounded-[12px] bg-white px-6 py-3.5 text-size-15 font-semibold text-[#123f72] transition hover:bg-[#eef4fb]"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/6 px-6 py-7 shadow-[0_10px_24px_rgba(3,10,24,0.18)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#d6e4ff]">
                Quick Overview
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { stat: "20+ Years", label: "Of local process expertise in Madhya Pradesh" },
                  { stat: "5,000+", label: "Project files successfully assisted" },
                  { stat: "12 Services", label: "Permissions, NOC, documentation & more" },
                  { stat: "Bhopal Based", label: "Serving clients across Madhya Pradesh" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="flex items-start gap-4 rounded-[16px] border border-white/10 bg-white/6 px-4 py-4">
                    <div className="min-w-[90px] text-size-18 font-semibold text-white">{stat}</div>
                    <p className="text-size-14 leading-6 text-[#d8e3f6]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-presence" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="overflow-hidden rounded-[24px] border border-[#dde5f0]">
              <img
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
                alt="Modern residential building"
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[430px]"
              />
            </div>
            <div>
              <p className="text-size-12 font-semibold uppercase tracking-[0.2em] text-[#123f72]">
                Our Presence
              </p>
              <h2 className="mt-3 text-size-30 font-semibold tracking-[-0.03em] text-[#172033] sm:text-size-38">
                Ground-level support with practical local process expertise
              </h2>
              <p className="mt-4 text-size-15 leading-7 text-[#5e6778]">
                We work closely with clients and departments to maintain accuracy,
                proper sequencing, and smooth follow-up across approvals.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[16px] border border-[#dce3ee] bg-[#f8fbfd] px-5 py-4">
              <p className="text-size-24 font-semibold text-[#123f72]">20+ Years</p>
              <p className="text-size-13 text-[#5e6778]">Local process experience</p>
            </div>
            <div className="rounded-[16px] border border-[#dce3ee] bg-[#f8fbfd] px-5 py-4">
              <p className="text-size-24 font-semibold text-[#123f72]">5000+</p>
              <p className="text-size-13 text-[#5e6778]">Project files assisted</p>
            </div>
            <div className="rounded-[16px] border border-[#dce3ee] bg-[#f8fbfd] px-5 py-4">
              <p className="text-size-24 font-semibold text-[#123f72]">Reliable</p>
              <p className="text-size-13 text-[#5e6778]">End-to-end follow-up</p>
            </div>
          </div>
        </div>
      </section>
      <AboutPageFeatureSection />

      <Testomonial />
      <ContactSection className="bg-[#f8fbfd]" />
      <FooterSection />
    </main>
  );
}
