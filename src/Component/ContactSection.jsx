import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const defaultSocialLinks = [
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "Twitter", href: "https://twitter.com", Icon: FaXTwitter },
];

function ContactInfoItem({ icon, title, lines, accentClass }) {
  const Icon = icon;
  return (
    <div className="flex items-start gap-4">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-[0_10px_22px_rgba(18,63,114,0.16)] ${accentClass}`}
      >
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-size-18 font-semibold text-[#162033]">{title}</h3>
        {lines.map((line) => (
          <p key={line} className="mt-1 text-size-14 leading-6 text-[#7f8797]">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ContactSection({
  className = "",
  title = "Get in touch",
  description = "Connect with our expert team for building permissions, NOC services, property documentation, and liaison support tailored to your project needs.",
  officeLines = ["Idgah Hills", "Bhopal, Madhya Pradesh"],
  emailLines = ["info@rationalconsultant.in", "support@rationalconsultant.in"],
  phoneLines = ["Phone : +91 91652 27984", "Alt : +91 93290 22013"],
  socialLinks = defaultSocialLinks,
}) {
  return (
    <section className={`bg-white py-14 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-[#e7ecf3] bg-white ">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-[#edf1f6] bg-[#f8fbfd] px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-9">
              <h2 className="text-size-38 font-semibold tracking-[-0.04em] text-[#172033] sm:text-size-46">
                {title}
              </h2>
              <p className="mt-4 max-w-[380px] text-size-15 leading-7 text-[#7f8797]">
                {description}
              </p>

              <div className="mt-10 space-y-8">
                <ContactInfoItem
                  icon={MapPin}
                  title="Head Office"
                  lines={officeLines}
                  accentClass="bg-gradient-to-br from-[#123f72] to-[#2d5f95]"
                />
                <ContactInfoItem
                  icon={Mail}
                  title="Email Us"
                  lines={emailLines}
                  accentClass="bg-gradient-to-br from-[#3d82f5] to-[#2d72f2]"
                />
                <ContactInfoItem
                  icon={Phone}
                  title="Call Us"
                  lines={phoneLines}
                  accentClass="bg-gradient-to-br from-[#cb3c34] to-[#df635c]"
                />
              </div>

              <div className="mt-10 border-t border-[#e6ebf2] pt-8">
                <h3 className="text-size-18 font-semibold text-[#162033]">
                  Follow our social media
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123f72] text-white transition hover:bg-[#0f3460]"
                    >
                      <item.Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-9">
              <h2 className="text-size-34 font-semibold tracking-[-0.04em] text-[#172033] sm:text-size-42">
                Send us a message
              </h2>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-size-14 font-medium text-[#243146]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="h-12 w-full rounded-[12px] border border-[#e3e8ef] bg-[#f9fbfd] px-4 text-size-14 text-[#223146] outline-none transition focus:border-[#3d82f5]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-size-14 font-medium text-[#243146]">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company"
                      className="h-12 w-full rounded-[12px] border border-[#e3e8ef] bg-[#f9fbfd] px-4 text-size-14 text-[#223146] outline-none transition focus:border-[#3d82f5]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-size-14 font-medium text-[#243146]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="h-12 w-full rounded-[12px] border border-[#e3e8ef] bg-[#f9fbfd] px-4 text-size-14 text-[#223146] outline-none transition focus:border-[#3d82f5]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-size-14 font-medium text-[#243146]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="h-12 w-full rounded-[12px] border border-[#e3e8ef] bg-[#f9fbfd] px-4 text-size-14 text-[#223146] outline-none transition focus:border-[#3d82f5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-size-14 font-medium text-[#243146]">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="h-12 w-full rounded-[12px] border border-[#e3e8ef] bg-[#f9fbfd] px-4 text-size-14 text-[#223146] outline-none transition focus:border-[#3d82f5]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-size-14 font-medium text-[#243146]">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Message"
                    className="w-full rounded-[12px] border border-[#e3e8ef] bg-[#f9fbfd] px-4 py-3 text-size-14 text-[#223146] outline-none transition focus:border-[#3d82f5]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#123f72] px-6 py-3.5 text-size-15 font-semibold text-white transition hover:bg-[#0f3460]"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
