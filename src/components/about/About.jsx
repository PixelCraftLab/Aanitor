import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "../common/ImagePlaceholder";

const principles = [
  {
    number: "01",
    title: "Purpose",
    description:
      "Energy designed with intention. Every detail exists for a reason.",
  },
  {
    number: "02",
    title: "Progress",
    description:
      "Built for people who keep moving, creating, learning and pushing forward.",
  },
  {
    number: "03",
    title: "Movement",
    description:
      "Because your day does not stop when the clock does.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 text-[var(--color-text)] sm:py-32 lg:py-40"
    >
      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-black/5" />

      <div className="pointer-events-none absolute -right-20 top-40 h-[300px] w-[300px] rounded-full border border-black/5" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
                Our Story
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.85] tracking-[-0.07em]">
              Energy
              <br />

              <span className="text-black/25">
                should feel
              </span>

              <br />

              different.
            </h2>
          </motion.div>
        </div>

        {/* Story + Visual */}
        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-center"
          >
            <p className="text-xl font-medium leading-8 text-[var(--color-text)] sm:text-2xl sm:leading-9">
              We believe energy should do more than simply wake you up.
            </p>

            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
              It should fit into your lifestyle. Your early mornings, late
              nights, workouts, ideas, journeys and everything in between.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
              We are creating a new generation of energy drinks for people
              who are building what comes next.
            </p>

            <a
              href="#product"
              className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-black/20 pb-2 text-sm font-semibold uppercase tracking-wide text-black transition-colors duration-300 hover:border-black"
            >
              Explore the product

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[var(--color-background-soft)] sm:min-h-[600px] lg:min-h-[700px]">

              {/* Organic shape */}
              <motion.div
                animate={{
                  rotate: [0, 4, -4, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[70%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_55%_45%/50%_45%_55%_50%] bg-[var(--color-primary)]"
              />

              {/* Product placeholder */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-10 w-[190px] -translate-x-1/2 -translate-y-1/2 sm:w-[240px] lg:w-[280px]"
              >
                <div className="relative aspect-[3/5] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/70 shadow-2xl backdrop-blur-sm">

                  <ImagePlaceholder
                    src=""
                    alt="product image"
                    className="h-full w-full object-contain"
                  />

                  {/* Temporary product branding */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-black/40">
                      Your Brand
                    </span>

                    <span className="mt-4 font-[var(--font-heading)] text-3xl font-bold uppercase leading-none tracking-[-0.05em] text-black sm:text-4xl">
                      Energy
                    </span>

                    <div className="mt-5 h-2 w-12 rounded-full bg-[var(--color-primary)]" />
                  </div>
                </div>
              </motion.div>

              {/* Corner text */}
              <div className="absolute left-6 top-6 z-20">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                  2026 / 01
                </span>
              </div>

              <div className="absolute bottom-6 right-6 z-20">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                  Something is coming
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="mt-24 border-t border-black/10 pt-8 sm:mt-32 lg:mt-40">
          <div className="grid md:grid-cols-3">
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className={`py-8 md:px-8 md:py-4 ${
                  index !== 0
                    ? "border-t border-black/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                {/* Number */}
                <span className="font-[var(--font-heading)] text-sm font-semibold text-black/30">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="mt-6 font-[var(--font-heading)] text-3xl font-bold uppercase tracking-[-0.04em] sm:text-4xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-black/10 pt-10 sm:mt-32 lg:flex-row lg:items-end"
        >
          <h3 className="max-w-3xl font-[var(--font-heading)] text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Built for the people
            <br />
            <span className="text-black/25">
              who keep going.
            </span>
          </h3>

          <span className="max-w-[180px] text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-black/40">
            Energy for every version of you.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;