import {
  BadgeCheck,
  Building2,
  CircleParking,
  DraftingCompass,
  House,
  MapPinned,
} from "lucide-react";

const defaultSteps = [
  {
    title: "900+ projects all over the world",
    text: "We have delivered interiors and lifestyle-driven spaces across the world with detailed design direction.",
  },
  {
    title: "Bespoke Design Tailored to You",
    text: "We shape every layout, finish, and atmosphere around your needs, goals, and visual identity.",
  },
  {
    title: "From Sketch to Launch, We're With You",
    text: "We guide through every step, from planning and approvals to the final delivery experience.",
  },
];

const defaultFeatureIcons = [
  { label: "Residence", Icon: House, active: false },
  { label: "Parking", Icon: CircleParking, active: false },
  { label: "Planning", Icon: DraftingCompass, active: false },
  { label: "Location", Icon: MapPinned, active: false },
  { label: "Luxury", Icon: BadgeCheck, active: true },
];

function FeatureIcon({ Icon, label, active }) {
  return (
    <div className="flex min-w-[58px] flex-col items-center gap-2 text-center">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full ${
          active ? "bg-[#0c1630] text-white" : "bg-[#eef3f8] text-[#5f6f85]"
        }`}
      >
        <Icon size={17} strokeWidth={2.1} />
      </div>
      <span
        className={`text-size-11 font-medium ${
          active ? "text-[#0c1630]" : "text-[#8e97a7]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function WorkProcessSection({
  className = "",
  titleStart = "Our work process make",
  titleHighlight = "your dream true",
  imageSrc = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Luxury interior lounge",
  steps = defaultSteps,
  featureIcons = defaultFeatureIcons,
}) {
  return (
    <section className={`bg-white py-20 sm:pt-20 sm:pb-8 ${className}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-[2px] border border-[#eceef3] bg-[#f7f8fb] shadow-[0_16px_34px_rgba(15,23,42,0.08)]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-[260px] w-full object-cover sm:h-[300px] lg:h-[332px]"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4 pl-2">
              {featureIcons.map((item) => (
                <FeatureIcon key={item.label} {...item} />
              ))}
            </div>
          </div>

          <div className="max-w-[540px] lg:ml-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h2 className="text-size-34 font-semibold leading-[0.98] tracking-[-0.05em] text-[#1a2230] sm:text-size-40 lg:text-size-48">
                  <span className="block">{titleStart}</span>
                  <span className="block text-[#123f72]">{titleHighlight}</span>
                </h2>
              </div>

              <div className="hidden rounded-2xl bg-[#f4f7fb] p-3 text-[#7b8497] lg:flex">
                <Building2 size={22} />
              </div>
            </div>

            <div className="mt-8 space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#123f72] text-size-12 font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="max-w-[430px]">
                    <h3 className="text-size-18 font-semibold leading-6 tracking-[-0.03em] text-[#1f2735]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-size-13 leading-6 text-[#7e8798]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
