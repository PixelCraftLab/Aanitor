import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import ImagePlaceholder from "../common/ImagePlaceholder";

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const productY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const productRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const shapeScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative overflow-hidden bg-[var(--color-background-soft)] py-24 text-[var(--color-text)] sm:py-32 lg:py-40"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full border border-black/5" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr]">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
              The Product
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.85] tracking-[-0.07em]">
              More than
              <br />

              <span className="text-black/25">
                a boost.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              A new approach to everyday energy. Designed to keep up with
              your body, your ambition and everything you want to accomplish.
            </p>
          </motion.div>
        </div>

        {/* Main product area */}
        <div className="relative mt-20 min-h-[700px] sm:mt-28 lg:mt-36">

          {/* Background shape */}
          <motion.div
            style={{
              scale: shapeScale,
            }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[48%_52%_45%_55%/50%_45%_55%_50%] bg-[var(--color-primary)] sm:h-[650px] sm:w-[440px] lg:h-[700px] lg:w-[500px]"
          />

          {/* Product */}
          <motion.div
            style={{
              y: productY,
              rotate: productRotate,
            }}
            className="absolute left-1/2 top-1/2 z-20 w-[210px] -translate-x-1/2 -translate-y-1/2 sm:w-[280px] lg:w-[330px]"
          >
            <div className="relative aspect-[3/5] overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

              <ImagePlaceholder
                src=""
                alt="product image"
                className="h-full w-full object-contain"
              />

              {/* Temporary product branding */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-black/40">
                  Your Brand
                </span>

                <h3 className="mt-5 font-[var(--font-heading)] text-4xl font-bold uppercase leading-none tracking-[-0.06em] text-black sm:text-5xl">
                  Energy
                </h3>

                <span className="mt-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-black/40">
                  Coming Soon
                </span>

                <div className="mt-6 h-2 w-14 rounded-full bg-[var(--color-primary)]" />
              </div>
            </div>
          </motion.div>

          {/* Left information */}
          <motion.div
            style={{ y: textY }}
            className="absolute left-0 top-24 z-30 hidden max-w-[220px] lg:block"
          >
            <div className="border-t border-black/20 pt-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                Designed differently
              </span>

              <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">
                Clean design. Bold character. Made for modern routines.
              </p>
            </div>
          </motion.div>

          {/* Right information */}
          <motion.div
            style={{ y: textY }}
            className="absolute right-0 top-1/2 z-30 hidden w-[220px] -translate-y-1/2 lg:block"
          >
            <div className="border-t border-black/20 pt-4">
              <div className="flex items-center gap-2">
                <Sparkles size={14} />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                  Coming Soon
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">
                Be among the first to experience what's next.
              </p>
            </div>
          </motion.div>

          {/* Floating number */}
          <div className="absolute bottom-10 left-0 z-10">
            <span className="font-[var(--font-heading)] text-[7rem] font-bold leading-none tracking-[-0.08em] text-black/5 sm:text-[10rem]">
              01
            </span>
          </div>

          {/* Floating label */}
          <div className="absolute bottom-20 right-0 z-30 hidden sm:block">
            <div className="rounded-full border border-black/10 bg-white/70 px-5 py-3 backdrop-blur-md">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                Built for movement
              </span>
            </div>
          </div>
        </div>

        {/* Product features */}
        <div className="border-t border-black/10 pt-10">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-0">

            <div className="sm:border-r sm:border-black/10 sm:pr-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                01
              </span>

              <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-bold uppercase tracking-[-0.04em]">
                Focus
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                Stay locked in when your day demands more.
              </p>
            </div>

            <div className="sm:px-10 sm:border-r sm:border-black/10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                02
              </span>

              <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-bold uppercase tracking-[-0.04em]">
                Energy
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                Energy that fits naturally into your everyday routine.
              </p>
            </div>

            <div className="sm:pl-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                03
              </span>

              <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-bold uppercase tracking-[-0.04em]">
                Momentum
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                Keep moving toward whatever comes next.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-black/10 pt-10 sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-[var(--font-heading)] text-3xl font-bold uppercase tracking-[-0.05em] sm:text-4xl">
              Ready for what's next?
            </p>

            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Get notified when we launch.
            </p>
          </div>

          <a
            href="#preorder"
            className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-black"
          >
            Get Early Access

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;