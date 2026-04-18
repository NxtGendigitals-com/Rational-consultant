import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoLandscape from "../assets/logo_no_bg.png";

const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({
  links = defaultLinks,
  brandName = "Rational Real Estate & Liaising",
  className = "",
  ctaLabel = "GET NOW",
  ctaHref = "/contact",
  logoSrc = logoLandscape,
  activeHref,
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const currentHref =
    activeHref ?? (typeof window !== "undefined" ? window.location.pathname : "/");

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isLinkActive = (href) => {
    if (href === "/") {
      return currentHref === "/";
    }

    return currentHref === href || currentHref.startsWith(`${href}/`);
  };

  const handleNavClick = (href) => {
    navigate(href);
    setOpen(false);
  };

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 ${className}`}>
        <div className="mx-auto max-w-[1500px] rounded-full border border-gray-300 bg-white/96 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-7 lg:px-9">
            <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
              <img
                src={logoSrc}
                alt={brandName}
                className="h-10 w-auto object-contain sm:h-11 lg:h-12"
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              <ul className="flex items-center gap-9 text-size-15 font-semibold text-[#1e2230]">
                {links.map((link) => {
                  const isActive = isLinkActive(link.href);

                  return (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`relative inline-flex pb-2 transition duration-200 hover:text-[#0c1630] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-[#123f72] after:transition-transform after:duration-200 ${
                          isActive
                            ? "text-[#0c1630] after:scale-x-100"
                            : "after:scale-x-0 hover:after:scale-x-100"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center gap-3">
                <Link
                  to={ctaHref}
                  className="rounded-full bg-[#0c2c71] px-6 py-3 text-size-10 font-extrabold tracking-[0.28em] text-white transition hover:bg-[#122042]"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="p-3 text-[#1b2230] transition lg:hidden"
              onClick={() => setOpen((currentOpen) => !currentOpen)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[70] bg-[#08111f]/52 backdrop-blur-[2px] transition duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-[80] w-[70vw] max-w-[360px] min-w-[280px] border-l border-[#dde4f1] bg-white shadow-[-20px_0_50px_rgba(15,23,42,0.14)] transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#eef2f7] px-5 py-5">
            <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
              <img
                src={logoSrc}
                alt={brandName}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              className="p-2.5 text-[#1b2230] transition hover:bg-[#f6f8fb]"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#90a0b8]">
              Navigation
            </p>

            <div className="mt-5 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  aria-current={isLinkActive(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-[18px] border px-4 py-3.5 text-size-15 font-medium transition ${
                    isLinkActive(link.href)
                      ? "border-[#123f72]/15 bg-[#eef4fb] text-[#123f72]"
                      : "border-[#eceef5] bg-[#fafbfe] text-[#1f2432] hover:bg-[#f4f6fb]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-size-18 text-[#9ca8bb]">+</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-[#eef2f7] px-5 py-5">
            <p className="text-size-13 leading-6 text-[#6c7688]">
              Need quick assistance with approvals and documentation?
            </p>
            <Link
              to={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-[#0c2c71] px-4 py-3 text-center text-size-12 font-bold tracking-[0.24em] text-white transition hover:bg-[#123981]"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
