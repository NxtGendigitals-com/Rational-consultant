import { useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  CircleDot,
  Clock3,
  FileBadge2,
  FileCheck,
  FileText,
  Globe2,
  MapPinned,
  Scale,
  ShieldCheck,
  Stamp,
  Workflow,
  Wrench,
  X,
} from "lucide-react";

const services = [
  {
    title: "Residential Projects",
    icon: Building2,
    desc: "Premium apartments and gated communities designed for modern living — thoughtful layouts, quality finishes, and family-friendly amenities.",
    accent: "from-[#123f72] to-[#2d5f95]",
    iconBg: "bg-[#eaf1f8]",
    headerFrom: "#123f72",
    headerTo: "#2d5f95",
    accentColor: "#123f72",
    features: [
      "2/3/4 BHK Apartments",
      "Gated Communities",
      "Modern Amenities",
      "Quality Finishes",
    ],
    process: [
      {
        title: "Site Visit",
        desc: "Walk the property and explore available configurations",
        day: "Step 1",
      },
      {
        title: "Unit Selection",
        desc: "Choose the floor, view, and layout that fits your family",
        day: "Step 2",
      },
      {
        title: "Booking & Agreement",
        desc: "Reserve your home with transparent pricing and paperwork",
        day: "Step 3",
      },
      {
        title: "Construction & Handover",
        desc: "Regular updates until keys are in your hands",
        day: "Step 4",
      },
    ],
  },
  {
    title: "Commercial Spaces",
    icon: ShieldCheck,
    desc: "Offices, retail showrooms, and mixed-use commercial developments in prime locations with strong footfall potential.",
    accent: "from-[#cb3c34] to-[#df635c]",
    iconBg: "bg-[#fceceb]",
    headerFrom: "#cb3c34",
    headerTo: "#df635c",
    accentColor: "#cb3c34",
    features: [
      "Retail Showrooms",
      "Corporate Offices",
      "Mixed-Use Developments",
      "High-Visibility Locations",
    ],
    process: [
      {
        title: "Requirement Mapping",
        desc: "Understand your business size, footfall, and location needs",
        day: "Step 1",
      },
      {
        title: "Space Shortlist",
        desc: "Preview available units across current commercial projects",
        day: "Step 2",
      },
      {
        title: "Commercial Terms",
        desc: "Finalize pricing, payment plan, and agreement",
        day: "Step 3",
      },
      {
        title: "Fit-Out & Handover",
        desc: "Coordinated handover with fit-out support",
        day: "Step 4",
      },
    ],
  },
  {
    title: "Plotted Developments",
    icon: FileText,
    desc: "Residential plots in fully-approved layouts with clear titles, sanctioned roads, and ready infrastructure — ideal for building your own home.",
    accent: "from-[#f3b333] to-[#f0c45e]",
    iconBg: "bg-[#fff5dc]",
    headerFrom: "#c28a17",
    headerTo: "#e0ad33",
    accentColor: "#c28a17",
    features: [
      "Clear-Title Plots",
      "Sanctioned Layouts",
      "Ready Infrastructure",
      "Gated Plot Communities",
    ],
    process: [
      {
        title: "Layout Overview",
        desc: "Review approved layout plans and available plots",
        day: "Step 1",
      },
      {
        title: "Plot Selection",
        desc: "Pick the size, orientation, and location you prefer",
        day: "Step 2",
      },
      {
        title: "Registration",
        desc: "Complete booking with clean documentation and registry",
        day: "Step 3",
      },
      {
        title: "Possession",
        desc: "Get site possession with infrastructure ready to build",
        day: "Step 4",
      },
    ],
  },
  {
    title: "Integrated Townships",
    icon: Workflow,
    desc: "Self-contained townships offering homes, retail, green spaces, and community amenities — designed for long-term quality of life.",
    accent: "from-[#1e6f6a] to-[#4b9b93]",
    iconBg: "bg-[#e5f5f2]",
    headerFrom: "#1e6f6a",
    headerTo: "#4b9b93",
    accentColor: "#1e6f6a",
    features: [
      "Master-Planned Community",
      "On-Site Retail & Schools",
      "Landscaped Open Spaces",
      "24x7 Security",
    ],
    process: [
      {
        title: "Master Plan Review",
        desc: "Understand the township vision and available phases",
        day: "Step 1",
      },
      {
        title: "Home Selection",
        desc: "Choose between villas, apartments, or plots",
        day: "Step 2",
      },
      {
        title: "Booking & Payment Plan",
        desc: "Flexible schemes aligned to construction stages",
        day: "Step 3",
      },
      {
        title: "Community Handover",
        desc: "Move in with amenities already operational",
        day: "Step 4",
      },
    ],
  },
  {
    title: "Property Legal & RERA",
    icon: Scale,
    desc: "Every Rational Real Estate project is RERA-approved with fully verified titles, sanctioned plans, and transparent sale documentation.",
    accent: "from-[#5a3fa4] to-[#7e62c8]",
    iconBg: "bg-[#f0ebff]",
    headerFrom: "#5a3fa4",
    headerTo: "#7e62c8",
    accentColor: "#5a3fa4",
    features: [
      "RERA-Registered Projects",
      "Verified Title Chain",
      "Sanctioned Building Plans",
      "Transparent Sale Deeds",
    ],
    process: [
      {
        title: "Document Walkthrough",
        desc: "Review project-level legal and approval documents",
        day: "Step 1",
      },
      {
        title: "Title Verification",
        desc: "Confirm clean land records and sanctioned plans",
        day: "Step 2",
      },
      {
        title: "Agreement Drafting",
        desc: "Straightforward, RERA-compliant sale agreements",
        day: "Step 3",
      },
      {
        title: "Registration",
        desc: "Smooth registration and handover of legal papers",
        day: "Step 4",
      },
    ],
  },
  {
    title: "Architecture & Design",
    icon: Stamp,
    desc: "In-house architects and planners crafting thoughtful layouts, efficient spaces, and elevations that stand out on any skyline.",
    accent: "from-[#ad4c19] to-[#cc7541]",
    iconBg: "bg-[#fcefe7]",
    headerFrom: "#ad4c19",
    headerTo: "#cc7541",
    accentColor: "#ad4c19",
    features: [
      "Efficient Floor Plans",
      "Modern Elevations",
      "Vastu-Aligned Layouts",
      "Quality Material Specs",
    ],
    process: [
      {
        title: "Design Brief",
        desc: "Understand end-user lifestyle and project vision",
        day: "Step 1",
      },
      {
        title: "Concept & Layout",
        desc: "Develop layouts, elevations, and material palette",
        day: "Step 2",
      },
      {
        title: "Design Finalization",
        desc: "Lock drawings, BOQs, and specifications",
        day: "Step 3",
      },
      {
        title: "Construction Handoff",
        desc: "Coordinate with site teams to execute as designed",
        day: "Step 4",
      },
    ],
  },
  {
    title: "Home Loan Assistance",
    icon: FileCheck,
    desc: "Partnered with leading banks and HFCs to get buyers competitive interest rates, quick approvals, and a paperwork-light loan experience.",
    accent: "from-[#214d78] to-[#4677a6]",
    iconBg: "bg-[#eaf1f8]",
    headerFrom: "#214d78",
    headerTo: "#4677a6",
    accentColor: "#214d78",
    features: [
      "Partnered Banks & HFCs",
      "Competitive Interest Rates",
      "Quick Loan Approvals",
      "Complete Paperwork Help",
    ],
    process: [
      {
        title: "Eligibility Check",
        desc: "Share income and documents for a quick eligibility view",
        day: "Step 1",
      },
      {
        title: "Bank Comparison",
        desc: "Compare offers from partnered lenders",
        day: "Step 2",
      },
      {
        title: "Application & Sanction",
        desc: "Paperwork support until loan sanction letter",
        day: "Step 3",
      },
      {
        title: "Disbursement",
        desc: "Coordinated disbursement aligned to construction stages",
        day: "Step 4",
      },
    ],
  },
  {
    title: "Land Acquisition",
    icon: MapPinned,
    desc: "We work with landowners on joint developments, outright purchase, and collaboration agreements to unlock premium development parcels.",
    accent: "from-[#8a6a1f] to-[#b3913c]",
    iconBg: "bg-[#fbf3df]",
    headerFrom: "#8a6a1f",
    headerTo: "#b3913c",
    accentColor: "#8a6a1f",
    features: [
      "Joint Developments",
      "Outright Land Purchase",
      "Landowner Collaborations",
      "Title Due Diligence",
    ],
    process: [
      {
        title: "Initial Discussion",
        desc: "Understand the parcel, title, and owner expectations",
        day: "Step 1",
      },
      {
        title: "Site & Title Review",
        desc: "On-ground assessment and document verification",
        day: "Step 2",
      },
      {
        title: "Commercial Structure",
        desc: "Finalize JV share, purchase price, or collaboration terms",
        day: "Step 3",
      },
      {
        title: "Agreement & Kick-Off",
        desc: "Sign agreements and begin development planning",
        day: "Step 4",
      },
    ],
  },
  {
    title: "Customer Care & Handover",
    icon: Wrench,
    desc: "Dedicated post-sales team supporting you from allotment to possession — including snagging, fit-outs, and move-in coordination.",
    accent: "from-[#8d3030] to-[#bc5a5a]",
    iconBg: "bg-[#fdeeee]",
    headerFrom: "#8d3030",
    headerTo: "#bc5a5a",
    accentColor: "#8d3030",
    features: [
      "Dedicated Relationship Manager",
      "Snag List Resolution",
      "Fit-Out Coordination",
      "Move-In Support",
    ],
    process: [
      {
        title: "Pre-Handover Inspection",
        desc: "Walk the unit and capture any snags together",
        day: "Step 1",
      },
      {
        title: "Snag Resolution",
        desc: "Fix all open items before formal handover",
        day: "Step 2",
      },
      {
        title: "Key Handover",
        desc: "Formal handover of keys and documentation kit",
        day: "Step 3",
      },
      {
        title: "Post-Move-In Support",
        desc: "Ongoing customer care after possession",
        day: "Step 4",
      },
    ],
  },
  {
    title: "Sell Property In Dubai",
    icon: Globe2,
    desc: "We sell premium properties across Dubai — apartments, villas, and commercial units listed on our portfolio with verified titles, transparent pricing, and full DLD-compliant paperwork.",
    accent: "from-[#b88746] to-[#d4a55f]",
    iconBg: "bg-[#fbf2e3]",
    headerFrom: "#a3743a",
    headerTo: "#c89853",
    accentColor: "#a3743a",
    features: [
      "Apartments, Villas & Commercial",
      "Verified Title & Ownership",
      "DLD-Compliant Paperwork",
      "Transparent Pricing",
    ],
    process: [
      {
        title: "Property Walkthrough",
        desc: "Explore our Dubai inventory and shortlist units that match your budget and goals",
        day: "Step 1",
      },
      {
        title: "Site Visit",
        desc: "Visit the property in person or via guided virtual tour with our Dubai team",
        day: "Step 2",
      },
      {
        title: "Booking & Agreement",
        desc: "Lock the price with a clear MOU and transparent payment plan",
        day: "Step 3",
      },
      {
        title: "DLD Transfer & Handover",
        desc: "Full coordination of NOC, DLD transfer, and key handover",
        day: "Step 4",
      },
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedService]);

  return (
    <section className="bg-[#f8fbfd] py-20 sm:pt-20 sm:pb-8">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-[620px] text-center">
          <p className="text-size-12 font-semibold uppercase tracking-[0.28em] text-[#123f72]">
            Services
          </p>
          <h2 className="mt-3 text-size-34 font-semibold tracking-[-0.04em] text-[#172033] sm:text-size-42">
            <span className="text-[#123f72]">Services</span> We Provide
          </h2>
          <p className="mt-4 text-size-15 leading-7 text-[#7d8797]">
            Homes, commercial spaces, plots, and integrated townships across
            India — plus property sale support in Dubai — backed by in-house
            design, legal, and customer care teams for a seamless experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-[20px] border border-[#edf0f4] bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(15,23,42,0.1)]"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-[16px] ${service.iconBg}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-[12px] bg-gradient-to-br ${service.accent} text-white shadow-sm`}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="mt-5 text-size-24 font-semibold tracking-[-0.03em] text-[#1c2331]">
                  {service.title}
                </h3>

                <p className="mt-3 text-size-14 leading-7 text-[#80899a]">
                  {service.desc}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="mt-5 inline-flex items-center gap-2 text-size-14 font-semibold text-[#1c2331] transition group-hover:text-[#123f72]"
                >
                  Learn More
                  <ArrowRight size={14} />
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0a172c]/55 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="flex max-h-[calc(100vh-2rem)] w-full max-w-[980px] flex-col overflow-hidden rounded-[22px] border border-[#dde5f2] bg-white shadow-[0_20px_56px_rgba(8,18,36,0.22)] sm:max-h-[calc(100vh-3rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="relative overflow-hidden px-5 pb-0 pt-4 text-white sm:px-8 sm:pb-4 sm:pt-5"
              style={{
                backgroundImage: `linear-gradient(to right, ${selectedService.headerFrom}, ${selectedService.headerTo})`,
              }}
            >
              <div className="pointer-events-none absolute -left-12 top-8 h-24 w-24 rounded-full bg-white/8" />
              <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10" />

              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/18"
              >
                <X size={20} />
              </button>

              <div className="relative flex items-start gap-4 pr-14">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-white/14">
                  <FileBadge2 size={28} />
                </div>
                <div>
                  <h3 className="text-size-24 font-semibold leading-none tracking-[-0.03em] sm:text-size-30">
                    {selectedService.title}
                  </h3>
                  <p className="mt-1 max-w-[760px] text-size-14 leading-4 text-white/90">
                    {selectedService.desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} style={{ color: selectedService.accentColor }} />
                <h4 className="text-size-18 font-semibold text-[#111827] sm:text-size-20">
                  Service Features
                </h4>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {selectedService.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-[12px] px-4 py-4"
                    style={{ backgroundColor: `${selectedService.accentColor}0a` }}
                  >
                    <CircleDot size={12} className="shrink-0" style={{ color: selectedService.accentColor }} />
                    <span className="text-size-15 font-medium text-[#334155]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <Clock3 size={20} style={{ color: selectedService.accentColor }} />
                  <h4 className="text-size-18 font-semibold text-[#111827] sm:text-size-20">
                    How It Works
                  </h4>
                </div>

                <div className="mt-5 space-y-4">
                  {selectedService.process.map((step, index) => (
                    <div
                      key={`${step.title}-${index}`}
                      className="flex items-start justify-between gap-4 rounded-[14px] border border-[#e2e8f0] bg-white px-4 py-5"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-size-18 font-semibold text-white"
                          style={{ backgroundColor: selectedService.accentColor }}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="text-size-16 font-semibold text-[#111827] sm:text-size-18">
                            {step.title}
                          </h5>
                          <p className="mt-2 text-size-14 leading-6 text-[#64748b] sm:text-size-15">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 rounded-[8px] bg-[#f3f4f6] px-3 py-2 text-size-14 font-semibold text-[#7c8799]">
                        {step.day}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[14px] px-6 py-3.5 text-size-16 font-semibold text-white transition"
                  style={{ backgroundColor: selectedService.accentColor }}
                >
                  Book A Site Visit
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center rounded-[14px] border border-[#d6deea] bg-white px-6 py-3.5 text-size-16 font-semibold text-[#223146] transition hover:bg-[#f8fafc]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
