import { useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  CircleDot,
  Clock3,
  FileBadge2,
  FileCheck,
  FileText,
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
    title: "Building Permissions",
    icon: Building2,
    desc: "Nagar Nigam approvals, construction permits, and municipal permission support for residential and commercial projects.",
    accent: "from-[#123f72] to-[#2d5f95]",
    iconBg: "bg-[#eaf1f8]",
    headerFrom: "#123f72",
    headerTo: "#2d5f95",
    accentColor: "#123f72",
    features: [
      "Document Preparation",
      "Site Plan Review",
      "Municipal Submission",
      "Approval Processing",
    ],
    process: [
      {
        title: "Initial Consultation",
        desc: "Document review and requirement analysis",
        day: "Day 1",
      },
      {
        title: "Documentation Preparation",
        desc: "Preparation and verification of all required documents",
        day: "Day 2-3",
      },
      {
        title: "Application Submission",
        desc: "Filing applications with relevant authorities",
        day: "Day 4",
      },
      {
        title: "Follow-up & Approval",
        desc: "Regular follow-up until final approval",
        day: "Day 5-15",
      },
    ],
  },
  {
    title: "NOC Services",
    icon: ShieldCheck,
    desc: "Fire NOC, environmental NOC, and departmental clearances managed with complete document assistance and follow-up.",
    accent: "from-[#cb3c34] to-[#df635c]",
    iconBg: "bg-[#fceceb]",
    headerFrom: "#cb3c34",
    headerTo: "#df635c",
    accentColor: "#cb3c34",
    features: [
      "Fire NOC Support",
      "Legal Verification",
      "Department Filing",
      "Clearance Follow-Up",
    ],
    process: [
      {
        title: "Requirement Review",
        desc: "Identify the exact NOC and required papers",
        day: "Day 1",
      },
      {
        title: "Documentation Setup",
        desc: "Prepare forms and clearance documents",
        day: "Day 2-3",
      },
      {
        title: "Department Submission",
        desc: "Submit applications to the relevant offices",
        day: "Day 4",
      },
      {
        title: "Approval Coordination",
        desc: "Follow up until final departmental clearance",
        day: "Day 5-15",
      },
    ],
  },
  {
    title: "Property Documentation",
    icon: FileText,
    desc: "Title verification, property papers, legal records, and compliance-focused documentation for secure property transactions.",
    accent: "from-[#f3b333] to-[#f0c45e]",
    iconBg: "bg-[#fff5dc]",
    headerFrom: "#c28a17",
    headerTo: "#e0ad33",
    accentColor: "#c28a17",
    features: [
      "Title Verification",
      "Legal Verification",
      "Record Checking",
      "Compliance Guidance",
    ],
    process: [
      {
        title: "Document Collection",
        desc: "Review ownership files and supporting records",
        day: "Day 1",
      },
      {
        title: "Verification Process",
        desc: "Validate the papers for legality and consistency",
        day: "Day 2-3",
      },
      {
        title: "File Structuring",
        desc: "Prepare the final verified documentation set",
        day: "Day 4",
      },
      {
        title: "Client Handover",
        desc: "Share the completed compliant document pack",
        day: "Day 5",
      },
    ],
  },
  {
    title: "Liaison Services",
    icon: Workflow,
    desc: "Professional coordination with departments and authorities for smoother approval processing and faster submissions.",
    accent: "from-[#1e6f6a] to-[#4b9b93]",
    iconBg: "bg-[#e5f5f2]",
    headerFrom: "#1e6f6a",
    headerTo: "#4b9b93",
    accentColor: "#1e6f6a",
    features: [
      "Authority Coordination",
      "Legal Verification",
      "Submission Support",
      "Status Tracking",
    ],
    process: [
      {
        title: "Initial Mapping",
        desc: "Identify required departments and submission route",
        day: "Day 1",
      },
      {
        title: "Coordination Phase",
        desc: "Manage files, meetings, and responses",
        day: "Day 2-3",
      },
      {
        title: "Department Filing",
        desc: "Complete submission with required authorities",
        day: "Day 4",
      },
      {
        title: "Follow-up Support",
        desc: "Track progress until successful completion",
        day: "Day 5-15",
      },
    ],
  },
  {
    title: "Legal Consultation",
    icon: Scale,
    desc: "Property law guidance, documentation review, and legal consultation to reduce risk and improve compliance.",
    accent: "from-[#5a3fa4] to-[#7e62c8]",
    iconBg: "bg-[#f0ebff]",
    headerFrom: "#5a3fa4",
    headerTo: "#7e62c8",
    accentColor: "#5a3fa4",
    features: [
      "Legal Review",
      "Case Verification",
      "Compliance Advice",
      "Action Guidance",
    ],
    process: [
      {
        title: "Initial Consultation",
        desc: "Understand the issue and current documentation",
        day: "Day 1",
      },
      {
        title: "Legal Analysis",
        desc: "Assess the papers and possible compliance risks",
        day: "Day 2-3",
      },
      {
        title: "Strategy Advice",
        desc: "Recommend corrective or filing actions",
        day: "Day 4",
      },
      {
        title: "Next-Step Support",
        desc: "Guide execution for closure or compliance",
        day: "Day 5-15",
      },
    ],
  },
  {
    title: "TNCP Approvals",
    icon: Stamp,
    desc: "Specialized support for TNCP permissions, scrutiny, and approval procedures with proper document planning.",
    accent: "from-[#ad4c19] to-[#cc7541]",
    iconBg: "bg-[#fcefe7]",
    headerFrom: "#ad4c19",
    headerTo: "#cc7541",
    accentColor: "#ad4c19",
    features: [
      "Layout Preparation",
      "Planning Review",
      "Scrutiny Support",
      "Approval Filing",
    ],
    process: [
      {
        title: "Project Assessment",
        desc: "Review planning scope and TNCP needs",
        day: "Day 1",
      },
      {
        title: "Document Preparation",
        desc: "Prepare layouts, forms, and declarations",
        day: "Day 2-3",
      },
      {
        title: "Application Submission",
        desc: "File the TNCP approval package",
        day: "Day 4",
      },
      {
        title: "Scrutiny & Approval",
        desc: "Resolve queries and track final permission",
        day: "Day 5-15",
      },
    ],
  },
  {
    title: "Namantaran Services",
    icon: FileCheck,
    desc: "End-to-end assistance for Namantaran applications, ownership updates, and related municipal record procedures.",
    accent: "from-[#214d78] to-[#4677a6]",
    iconBg: "bg-[#eaf1f8]",
    headerFrom: "#214d78",
    headerTo: "#4677a6",
    accentColor: "#214d78",
    features: [
      "Ownership Transfer",
      "Record Update Filing",
      "Municipal Verification",
      "Application Tracking",
    ],
    process: [
      {
        title: "Requirement Check",
        desc: "Assess the ownership change documents",
        day: "Day 1",
      },
      {
        title: "Paper Preparation",
        desc: "Prepare application and transfer support documents",
        day: "Day 2-3",
      },
      {
        title: "Namantaran Submission",
        desc: "Submit file to the relevant authority",
        day: "Day 4",
      },
      {
        title: "Mutation Follow-up",
        desc: "Track the update until final completion",
        day: "Day 5-15",
      },
    ],
  },
  {
    title: "Land Diversion",
    icon: MapPinned,
    desc: "Guidance for land diversion applications, land-use changes, and essential records needed for approval.",
    accent: "from-[#8a6a1f] to-[#b3913c]",
    iconBg: "bg-[#fbf3df]",
    headerFrom: "#8a6a1f",
    headerTo: "#b3913c",
    accentColor: "#8a6a1f",
    features: [
      "Land Assessment",
      "Legal Verification",
      "Application Filing",
      "Diversion Follow-Up",
    ],
    process: [
      {
        title: "Land Review",
        desc: "Check classification and diversion requirement",
        day: "Day 1",
      },
      {
        title: "File Preparation",
        desc: "Prepare forms and supporting paperwork",
        day: "Day 2-3",
      },
      {
        title: "Department Submission",
        desc: "Submit the diversion request file",
        day: "Day 4",
      },
      {
        title: "Approval Follow-up",
        desc: "Coordinate until diversion is granted",
        day: "Day 5-15",
      },
    ],
  },
  {
    title: "Municipal Clearances",
    icon: Wrench,
    desc: "Reliable support for municipal paperwork, local clearances, inspections, and submission readiness.",
    accent: "from-[#8d3030] to-[#bc5a5a]",
    iconBg: "bg-[#fdeeee]",
    headerFrom: "#8d3030",
    headerTo: "#bc5a5a",
    accentColor: "#8d3030",
    features: [
      "Inspection Readiness",
      "Clearance Filing",
      "Document Compliance",
      "Approval Coordination",
    ],
    process: [
      {
        title: "Clearance Planning",
        desc: "Identify required municipal clearances",
        day: "Day 1",
      },
      {
        title: "Documentation Preparation",
        desc: "Prepare forms and required records",
        day: "Day 2-3",
      },
      {
        title: "Application Submission",
        desc: "Submit clearances to local departments",
        day: "Day 4",
      },
      {
        title: "Inspection & Closure",
        desc: "Support inspection and final completion",
        day: "Day 5-15",
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
            Professional property documentation, approvals, liaison, and legal
            support services for residential, commercial, and development
            projects.
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
                  Get Started
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
                    Process Timeline
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
                  Get Started Now
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
