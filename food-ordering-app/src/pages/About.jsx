import React from "react";
import {
  ShoppingCart,
  UtensilsCrossed,
  UserCircle,
  Layers,
  Code2,
  Rocket,
  ArrowRight,
  GitBranch,
} from "lucide-react";

const techStack = [
  { name: "React 18", detail: "Component-based UI" },
  { name: "Redux Toolkit", detail: "Global state management" },
  { name: "Firebase", detail: "Auth & Firestore DB" },
  { name: "React Router", detail: "Client-side routing" },
  { name: "Parcel", detail: "Zero-config bundler" },
  { name: "Tailwind CSS", detail: "Utility-first styling" },
];

const features = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Discovery",
    description:
      "Browse a curated list of restaurants powered by live Swiggy data. Filter, explore, and find exactly what you're craving.",
  },
  {
    icon: ShoppingCart,
    title: "Cart & Checkout Flow",
    description:
      "Add items from any restaurant menu, review your order summary with itemised billing, taxes, and delivery charges.",
  },
  {
    icon: UserCircle,
    title: "User Authentication",
    description:
      "Secure sign-in and sign-up flows backed by Firebase Authentication, with protected routes and persistent session state.",
  },
  {
    icon: Layers,
    title: "Menu Exploration",
    description:
      "Accordion-style category navigation lets you browse a full restaurant menu — section by section — without feeling overwhelmed.",
  },
];

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gray-100">
        {/* subtle orange radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(252,128,25,0.08),transparent)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-swiggy-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-swiggy-orange animate-pulse" />
            In Active Development
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-swiggy-dark md:text-6xl">
            A production-minded{" "}
            <span className="text-swiggy-orange">food ordering</span> app built
            from scratch.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-swiggy-text-muted md:text-lg">
            Namaste Food is a personal full-stack project — currently in active
            development — exploring the real-world patterns behind food
            discovery, cart management, and user authentication. Built with
            modern React and industry-standard tooling.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/md-mustafa-hossain-create/namaste-react"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-swiggy-dark px-6 py-3 text-sm font-bold text-white transition-all hover:bg-opacity-85 hover:-translate-y-0.5 shadow-md"
            >
              <GitBranch className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────── */}
      <section className="bg-swiggy-bg/40 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-swiggy-orange">
            Built With
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-swiggy-dark">
            Modern, production-grade tooling.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col gap-1 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-sm font-black text-swiggy-dark">
                  {tech.name}
                </span>
                <span className="text-xs text-swiggy-text-muted leading-tight">
                  {tech.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-swiggy-orange">
            What's Inside
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-swiggy-dark">
            Core features implemented so far.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-7 text-swiggy-text-muted">
            Every feature below is fully working — not a mockup. The goal is a
            real, functional ordering flow from discovery to checkout.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-[0_8px_30px_-8px_rgba(252,128,25,0.18)] hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 rounded-xl bg-swiggy-orange/10 p-3 text-swiggy-orange h-fit">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-swiggy-dark">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-swiggy-text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Roadmap / Vision ─────────────────────────────── */}
      <section className="border-t border-gray-100 bg-swiggy-dark">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-swiggy-orange">
                <Rocket className="h-3 w-3" />
                What's next
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-white">
                The foundation is set for a full-scale app.
              </h2>
              <p className="mt-4 text-sm leading-8 text-gray-400">
                The architecture is designed with scalability in mind. Future
                plans include real order tracking, restaurant partner
                onboarding, payment gateway integration, and a full production
                deployment. Everything built today is structured to support
                those additions without a rewrite.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:flex-shrink-0">
              {[
                "Comprehensive Profile Page",
                "Secure Payment Gateway Integration",
                "Full-featured Grocery Vertical",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-300"
                >
                  <ArrowRight className="h-4 w-4 text-swiggy-orange flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
