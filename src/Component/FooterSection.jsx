import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logoLandscape from "../assets/logo_footer.png";

const defaultExploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Testimonials", href: "/testimonials" },
];

const defaultCompanyLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Book A Site Visit", href: "/contact" },
  { label: "Our Projects", href: "/services" },
  { label: "Customer Reviews", href: "/testimonials" },
  { label: "Why Choose Us", href: "/why-choose-us" },
];

const defaultSocialLinks = [
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
  { label: "Twitter", href: "https://twitter.com", Icon: FaXTwitter },
];

function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-size-14 font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-size-13 text-[#afc0d6] transition hover:text-white"
            >
              + {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterSection({
  className = "",
  brandName = "Rational Real Estate",
  introTitle = "Let's find the home you've been looking for.",
  email = "info@rationalrealestate.in",
  websiteLabel = "www.rationalrealestate.in",
  address = "Idgah Hills, Bhopal, Madhya Pradesh",
  phone = "+91 91652 27984",
  exploreLinks = defaultExploreLinks,
  companyLinks = defaultCompanyLinks,
  socialLinks = defaultSocialLinks,
  logoSrc = logoLandscape,
}) {
  return (
 <footer
  className={`bg-[linear-gradient(180deg,#0c1630_0%,#091024_100%)] text-white ${className}`}
>
      <div className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <h2 className="max-w-[420px] text-size-36 font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-size-44">
            {introTitle}
          </h2>

          <div className="w-full max-w-[430px] lg:w-[430px]">
            <div className="flex items-center justify-between rounded-[14px] border border-white/14 bg-white/8 px-5 py-4 backdrop-blur">
              <span className="truncate text-size-14 text-[#d7e4f3]">{email}</span>
              <a
                href={`mailto:${email}`}
                aria-label="Send email"
                className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white/14 text-white transition hover:bg-white/20 hover:text-white"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="mt-5 text-size-30 font-semibold tracking-[-0.04em] text-white sm:text-size-34">
              {websiteLabel}
            </p>
          </div>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.8fr]">
          <div>
            <Link to="/" className="inline-flex rounded-[16px] px-4 py-3">
              <img
                src={logoSrc}
                alt={brandName}
                className=" w-[20vh] object-contain"
              />
            </Link>

            <p className=" max-w-[320px] text-size-13 leading-6 text-[#b5c4d8]">
              A trusted property developer building residential apartments,
              plotted communities, commercial spaces, and integrated townships
              across growing markets.
            </p>

            <div className="mt-6 space-y-4 text-size-13 text-[#d2ddeb]">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-white" />
                <a href={`tel:${phone}`} className="transition hover:text-white">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-white" />
                <a
                  href={`mailto:${email}`}
                  className="transition hover:text-white"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          <FooterLinkColumn title="Explore Links" links={exploreLinks} />
          <FooterLinkColumn title="Company Info" links={companyLinks} />

          <div>
            <h3 className="text-size-14 font-semibold text-white">Socials</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/8 text-[#d7e4f3] transition hover:border-[#ffffff] hover:bg-white/14 hover:text-white"
                >
                  <item.Icon size={17} />
                </a>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-size-12 uppercase tracking-[0.2em] text-white">
                Rational Real Estate
              </p>
              <p className="mt-3 text-size-12 text-[#aebfd4]">
                Copyright 2026, all rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
