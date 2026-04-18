import AboutPageShowcaseSection from "../Component/AboutPageShowcaseSection";
import AboutPageFeatureSection from "../Component/AboutPageFeatureSection";
import WorkProcessSection from "../Component/WorkProcessSection";
import Testomonial from "../Component/Testomonial";
import ContactSection from "../Component/ContactSection";
import FooterSection from "../Component/FooterSection";

const aboutProcessSteps = [
  {
    title: "Initial Consultation & Requirement Review",
    text: "We assess your documentation needs, project type, and approval path before starting the file process.",
  },
  {
    title: "Document Preparation & Verification",
    text: "Our team prepares, verifies, and organizes the required property papers, forms, and compliance records.",
  },
  {
    title: "Submission, Liaison & Final Approval",
    text: "We coordinate with departments and follow up consistently until the relevant approvals and clearances are completed.",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#f7f8fc] text-slate-900">
      <section
        className="relative overflow-hidden px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8 lg:pb-20 lg:pt-40"
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
          <div className="max-w-[980px] rounded-[28px] border border-white/10 bg-white/6 px-6 py-8 shadow-[0_24px_54px_rgba(3,10,24,0.24)] backdrop-blur-sm sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="text-size-12 font-semibold uppercase tracking-[0.24em] text-[#d6e4ff]">
              About Rational Consultants
            </p>
            <h1 className="mt-4 max-w-[900px] text-size-42 font-semibold leading-[0.96] tracking-[-0.05em] sm:text-size-56 lg:text-size-72">
              Trusted Property Documentation And Liaison Experts In Bhopal
            </h1>
            <p className="mt-6 max-w-[760px] text-size-16 leading-8 text-[#d8e3f6]">
              Rational Consultants brings over 20 years of experience in building
              permissions, NOC applications, municipal clearances, property
              documentation, and legal compliance support across Madhya Pradesh.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#about-showcase"
                className="inline-flex items-center justify-center rounded-[12px] bg-white px-6 py-3.5 text-size-15 font-semibold text-[#123f72] transition hover:bg-[#eef4fb]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutPageShowcaseSection className="" />
      <AboutPageFeatureSection />

      <Testomonial />
      <ContactSection className="bg-[#f8fbfd]" />
      <FooterSection />
    </main>
  );
}
