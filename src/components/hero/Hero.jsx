import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BRAND } from "../../utils/constants";
import ImagePlaceholder from "../common/ImagePlaceholder";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]"
    >
      {/* Decorative background shapes */}
      <motion.div
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/40 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#e5d9c2]/60 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* LEFT */}
          <div className="relative z-20">
            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/50 px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">
                Coming Soon
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl font-[var(--font-heading)] text-[clamp(4rem,10vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.07em]"
            >
              Energy
              <br />

              <span className="relative inline-block">
                For What's
              </span>

              <br />

              <span className="relative inline-block">
                Next.
                <span className="absolute -bottom-3 left-0 h-2 w-1/2 rounded-full bg-[var(--color-primary)] sm:-bottom-5 sm:h-3" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-10 max-w-lg text-base leading-7 text-[var(--color-text-muted)] sm:text-lg"
            >
              {BRAND.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#preorder"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-black)] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary)] hover:text-black"
              >
                Get Early Access

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-3 px-4 py-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-text)]"
              >
                Discover More

                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — PRODUCT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[500px] items-center justify-center lg:min-h-[650px]"
          >
            {/* Large organic shape */}
            <motion.div
              animate={{
                rotate: [0, 3, -3, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[390px] w-[300px] rounded-[45%_55%_48%_52%/42%_45%_55%_58%] bg-[var(--color-primary)] sm:h-[500px] sm:w-[390px] lg:h-[580px] lg:w-[450px]"
            />

            {/* Product placeholder */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-2, 1, -2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[210px] sm:w-[270px] lg:w-[330px]"
            >
              <div className="flex aspect-[3/5] items-center justify-center rounded-[2rem] border border-black/10 bg-white/70 shadow-2xl backdrop-blur-sm">
                <ImagePlaceholder
                  src=""
                  alt="product image"
                  className="h-full w-full rounded-[2rem] object-contain"
                />

                {/* Temporary product text */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/40">
                    Your Brand
                  </span>

                  <span className="mt-4 font-[var(--font-heading)] text-4xl font-bold uppercase leading-none tracking-[-0.05em] text-black sm:text-5xl">
                    Energy
                  </span>

                  <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                    Coming Soon
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
              className="absolute right-0 top-16 z-20 hidden rounded-full border border-black/10 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-md sm:block lg:right-4"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black">
                Made for movement
              </p>
            </motion.div>

            {/* Floating number */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.1,
              }}
              className="absolute bottom-20 left-0 z-20 hidden lg:block"
            >
              <p className="font-[var(--font-heading)] text-7xl font-bold leading-none tracking-[-0.08em] text-black/10">
                01
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.3,
          }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-text-light)]">
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown
              size={18}
              className="text-[var(--color-text)]"
            />
          </motion.div>
        </motion.div>

        {/* Vertical side text */}
        <div className="pointer-events-none absolute bottom-32 left-3 hidden -rotate-90 origin-left lg:block">
          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-black/20">
            A new kind of energy
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;