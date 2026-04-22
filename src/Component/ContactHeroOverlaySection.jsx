import { Mail, MapPin, Phone } from "lucide-react";

function InfoItem({ icon, title, value }) {
  const Icon = icon;
  return (
    <div className="flex items-start gap-3 rounded-[18px] border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/12 text-white">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-size-12 font-semibold uppercase tracking-[0.18em] text-[#d6e4ff]">
          {title}
        </p>
        <p className="mt-2 text-size-14 leading-6 text-white/90">{value}</p>
      </div>
    </div>
  );
}

export default function ContactHeroOverlaySection({
  className = "",
  title = "Send us a message",
  description = "Share what you're looking for and our sales team will recommend the right project, schedule a site visit, and walk you through pricing and paperwork.",
}) {
  return (
    <div className={`mx-auto mt-12 max-w-[1500px] ${className}`}>
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/8 shadow-[0_24px_60px_rgba(3,10,24,0.24)] backdrop-blur-md">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] px-6 py-8 text-white sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
            <h2 className="text-size-34 font-semibold tracking-[-0.04em] sm:text-size-42">
              Let&apos;s Talk
            </h2>
            <p className="mt-4 max-w-[420px] text-size-15 leading-7 text-[#dbe6f8]">
              Connect with Rational Real Estate for apartments, plots,
              commercial spaces, and integrated townships.
            </p>

            <div className="mt-8 space-y-4">
              <InfoItem
                icon={MapPin}
                title="Office"
                value="Idgah Hills, Bhopal, Madhya Pradesh"
              />
              <InfoItem
                icon={Mail}
                title="Email"
                value="info@rationalrealestate.in / sales@rationalrealestate.in"
              />
              <InfoItem
                icon={Phone}
                title="Call"
                value="+91 91652 27984 / +91 93290 22013"
              />
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <h2 className="text-size-32 font-semibold tracking-[-0.04em] text-white sm:text-size-40">
              {title}
            </h2>
            <p className="mt-4 max-w-[620px] text-size-15 leading-7 text-[#dbe6f8]">
              {description}
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-12 w-full rounded-[14px] border border-white/12 bg-white/10 px-4 text-size-14 text-white placeholder:text-white/55 outline-none transition focus:border-white/30"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="h-12 w-full rounded-[14px] border border-white/12 bg-white/10 px-4 text-size-14 text-white placeholder:text-white/55 outline-none transition focus:border-white/30"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="h-12 w-full rounded-[14px] border border-white/12 bg-white/10 px-4 text-size-14 text-white placeholder:text-white/55 outline-none transition focus:border-white/30"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 w-full rounded-[14px] border border-white/12 bg-white/10 px-4 text-size-14 text-white placeholder:text-white/55 outline-none transition focus:border-white/30"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="h-12 w-full rounded-[14px] border border-white/12 bg-white/10 px-4 text-size-14 text-white placeholder:text-white/55 outline-none transition focus:border-white/30"
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full rounded-[14px] border border-white/12 bg-white/10 px-4 py-3 text-size-14 text-white placeholder:text-white/55 outline-none transition focus:border-white/30"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-size-15 font-semibold text-[#123f72] transition hover:bg-[#eef4fb]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
