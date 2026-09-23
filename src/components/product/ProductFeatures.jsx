import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Clock3,
  Sparkles,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Brain,
    title: "Focus",
    description:
      "Designed for the moments when you need to stay sharp, present and locked in.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Energy",
    description:
      "A modern energy experience created to fit naturally into your everyday routine.",
  },
  {
    number: "03",
    icon: Clock3,
    title: "Momentum",
    description:
      "From your first task to your final goal, keep moving without slowing down.",
  },
];

const ProductFeatures = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 text-[var(--color-text)] sm:py-32 lg:py-40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/20 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
              Why it exists
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.85] tracking-[-0.07em]">
              Built for
              <br />

              <span className="text-black/25">
                your next
              </span>

              <br />

              move.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              Your energy should work with your lifestyle. Every part of the
              experience is being designed around the way modern people move.
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 border-t border-black/10 sm:mt-28">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group grid gap-8 border-b border-black/10 py-10 transition-all duration-500 hover:bg-black/[0.02] sm:grid-cols-[100px_0.8fr_1fr] sm:items-center sm:gap-10 sm:py-14"
              >
                {/* Number */}
                <div>
                  <span className="font-[var(--font-heading)] text-sm font-semibold text-black/30">
                    {feature.number}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-primary)]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-[var(--font-heading)] text-3xl font-bold uppercase tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex items-center justify-between gap-6">
                  <p className="max-w-md text-sm leading-6 text-[var(--color-text-muted)] sm:text-base">
                    {feature.description}
                  </p>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-black sm:flex">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom visual statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] bg-[var(--color-background-soft)] p-8 sm:mt-28 sm:p-12 lg:p-16"
        >
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
              The philosophy
            </span>

            <h3 className="mt-6 font-[var(--font-heading)] text-4xl font-bold uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Don't just
              <br />
              <span className="text-black/25">
                get through
              </span>
              <br />
              the day.
            </h3>

            <p className="mt-8 max-w-xl text-sm leading-6 text-[var(--color-text-muted)] sm:text-base">
              Make something out of it.
            </p>
          </div>

          {/* Decorative circle */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border-[60px] border-[var(--color-primary)]/70 sm:h-[500px] sm:w-[500px]"
          />

          <div className="absolute bottom-8 right-8 hidden sm:block">
            <span className="font-[var(--font-heading)] text-[8rem] font-bold leading-none tracking-[-0.1em] text-black/5">
              03
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 flex justify-end">
          <a
            href="#ingredients"
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide"
          >
            Discover the ingredients

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;