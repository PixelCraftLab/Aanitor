import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, Zap, Droplets } from "lucide-react";
import ImagePlaceholder from "../common/ImagePlaceholder";

const ingredients = [
  {
    number: "01",
    icon: Zap,
    name: "Energy",
    description:
      "A carefully considered energy profile designed for modern routines.",
  },
  {
    number: "02",
    icon: Leaf,
    name: "Ingredients",
    description:
      "Thoughtfully selected ingredients with a focus on a clean, simple experience.",
  },
  {
    number: "03",
    icon: Droplets,
    name: "Refresh",
    description:
      "A refreshing format made to fit naturally into your everyday moments.",
  },
];

const ProductIngredients = () => {
  return (
    <section
      id="ingredients"
      className="relative overflow-hidden bg-[var(--color-background-soft)] py-24 text-[var(--color-text)] sm:py-32 lg:py-40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/20 blur-3xl" />

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
              What's Inside
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
              Simple
              <br />

              <span className="text-black/25">
                by design.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              We're taking a thoughtful approach to what's inside the can.
              Every ingredient has a purpose and every detail matters.
            </p>
          </motion.div>
        </div>

        {/* Main visual */}
        <div className="mt-20 grid gap-10 sm:mt-28 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">

          {/* Product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[550px] items-center justify-center overflow-hidden rounded-[2rem] bg-[var(--color-background)] sm:min-h-[650px]"
          >
            {/* Organic background */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[70%] w-[60%] rounded-[50%_45%_55%_45%/45%_55%_45%_55%] bg-[var(--color-primary)]"
            />

            {/* Product */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[200px] sm:w-[250px] lg:w-[280px]"
            >
              <div className="relative aspect-[3/5] overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-2xl">

                <ImagePlaceholder
                  src=""
                  alt="product image"
                  className="h-full w-full object-contain"
                />

                {/* Temporary branding */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-black/40">
                    Your Brand
                  </span>

                  <span className="mt-5 font-[var(--font-heading)] text-4xl font-bold uppercase leading-none tracking-[-0.06em] text-black sm:text-5xl">
                    Energy
                  </span>

                  <span className="mt-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-black/40">
                    Coming Soon
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating labels */}
            <div className="absolute left-6 top-6 z-20">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                Formula / 01
              </span>
            </div>

            <div className="absolute bottom-6 right-6 z-20">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                In development
              </span>
            </div>

            {/* Decorative number */}
            <span className="absolute bottom-4 left-5 font-[var(--font-heading)] text-[8rem] font-bold leading-none tracking-[-0.1em] text-black/5 sm:text-[11rem]">
              04
            </span>
          </motion.div>

          {/* Ingredients */}
          <div>
            {ingredients.map((ingredient, index) => {
              const Icon = ingredient.icon;

              return (
                <motion.div
                  key={ingredient.number}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className="group border-t border-black/10 py-8 last:border-b"
                >
                  <div className="flex items-start justify-between gap-5">

                    {/* Number */}
                    <span className="text-xs font-semibold text-black/30">
                      {ingredient.number}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-300 group-hover:bg-[var(--color-primary)]">
                          <Icon size={18} />
                        </div>

                        <h3 className="font-[var(--font-heading)] text-2xl font-bold uppercase tracking-[-0.04em] sm:text-3xl">
                          {ingredient.name}
                        </h3>
                      </div>

                      <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
                        {ingredient.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-black sm:flex">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-black/10 pt-8"
        >
          <p className="max-w-3xl text-xs leading-5 text-black/40">
            Final ingredients, nutritional information and product claims will
            be published once the formulation is finalized. Product details
            shown here are for the upcoming launch.
          </p>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col justify-between gap-8 sm:mt-28 sm:flex-row sm:items-end"
        >
          <h3 className="max-w-3xl font-[var(--font-heading)] text-4xl font-bold uppercase leading-[0.9] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Nothing
            <br />
            <span className="text-black/25">
              unnecessary.
            </span>
          </h3>

          <a
            href="#preorder"
            className="group inline-flex w-fit items-center gap-3 border-b border-black/20 pb-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:border-black"
          >
            Get early access

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductIngredients;