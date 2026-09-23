import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import ImagePlaceholder from "../common/ImagePlaceholder";

const PreorderSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const increaseQuantity = () => {
    setQuantity((current) => Math.min(current + 1, 12));
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(current - 1, 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="preorder"
      className="relative overflow-hidden bg-[var(--color-black)] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* Background shapes */}
      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[var(--color-primary)] opacity-90"
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 right-[-120px] h-[500px] w-[500px] rounded-full border-[70px] border-white/5"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-black">
            <Sparkles size={16} />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Coming Soon
          </span>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Be among the first
            </p>

            <h2 className="max-w-3xl font-[var(--font-heading)] text-6xl font-bold uppercase leading-[0.84] tracking-[-0.07em] sm:text-7xl lg:text-[7.5rem]">
              Taste
              <br />
              what's
              <br />
              <span className="text-white/25">
                next.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              We're getting ready to launch a new kind of energy.
              Reserve your place now and be the first to experience
              the product when it goes live.
            </p>

            {/* Benefits */}
            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                "Early access",
                "Launch updates",
                "First availability",
              ].map((item, index) => (
                <div
                  key={item}
                  className="border-l border-white/15 pl-4"
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    0{index + 1}
                  </span>

                  <p className="mt-2 text-xs font-medium text-white/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] bg-[var(--color-background)] text-black shadow-2xl">

              {/* Product visual */}
              <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden bg-[var(--color-primary)]">

                <motion.div
                  animate={{
                    rotate: [0, 4, -4, 0],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-[360px] w-[360px] rounded-full bg-white/20"
                />

                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-[135px] sm:w-[155px]"
                >
                  <div className="relative aspect-[3/5] overflow-hidden rounded-[1.5rem] bg-white shadow-2xl">

                    <ImagePlaceholder
                      src=""
                      alt="product image"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">

                      <span className="text-[7px] font-semibold uppercase tracking-[0.35em] text-black/40">
                        Your Brand
                      </span>

                      <span className="mt-4 font-[var(--font-heading)] text-3xl font-bold uppercase leading-none tracking-[-0.06em]">
                        Energy
                      </span>

                      <div className="mt-4 h-1.5 w-10 rounded-full bg-[var(--color-primary)]" />

                    </div>
                  </div>
                </motion.div>

                <span className="absolute bottom-5 left-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-black/40">
                  First release
                </span>

              </div>

              {/* FORM */}
              <div className="p-7 sm:p-9">

                {!submitted ? (
                  <>
                    <div className="flex items-start justify-between gap-5">

                      <div>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/35">
                          Reserve yours
                        </span>

                        <h3 className="mt-2 font-[var(--font-heading)] text-3xl font-bold uppercase leading-none tracking-[-0.05em]">
                          Early
                          <br />
                          Preorder
                        </h3>
                      </div>

                      <div className="rounded-full bg-black px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white">
                        Coming soon
                      </div>

                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-8"
                    >

                      {/* Name */}
                      <div>
                        <label
                          htmlFor="preorder-name"
                          className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40"
                        >
                          Name
                        </label>

                        <input
                          id="preorder-name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="h-13 w-full rounded-full border border-black/10 bg-black/[0.03] px-5 text-sm outline-none transition-all placeholder:text-black/25 focus:border-black"
                        />
                      </div>

                      {/* Email */}
                      <div className="mt-5">

                        <label
                          htmlFor="preorder-email"
                          className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40"
                        >
                          Email
                        </label>

                        <input
                          id="preorder-email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="h-13 w-full rounded-full border border-black/10 bg-black/[0.03] px-5 text-sm outline-none transition-all placeholder:text-black/25 focus:border-black"
                        />

                      </div>

                      {/* Quantity */}
                      <div className="mt-5">

                        <div className="mb-2 flex items-center justify-between">

                          <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
                            Quantity
                          </label>

                          <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                            Max 12
                          </span>

                        </div>

                        <div className="flex h-13 items-center justify-between rounded-full border border-black/10 bg-black/[0.03] px-2">

                          <button
                            type="button"
                            onClick={decreaseQuantity}
                            disabled={quantity === 1}
                            aria-label="Decrease quantity"
                            className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="font-[var(--font-heading)] text-lg font-bold">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            onClick={increaseQuantity}
                            disabled={quantity === 12}
                            aria-label="Increase quantity"
                            className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
                          >
                            <Plus size={15} />
                          </button>

                        </div>

                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="group mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-black text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary)] hover:text-black"
                      >
                        Reserve my spot

                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </button>

                      <p className="mt-4 text-center text-[9px] leading-4 text-black/30">
                        No payment required. We'll contact you when
                        preorders officially open.
                      </p>

                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="flex min-h-[440px] flex-col justify-center"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]">
                      <Check size={25} />
                    </div>

                    <h3 className="mt-7 font-[var(--font-heading)] text-4xl font-bold uppercase leading-[0.9] tracking-[-0.06em]">
                      You're
                      <br />
                      <span className="text-black/25">
                        reserved.
                      </span>
                    </h3>

                    <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                      We've saved your place for the first release.
                      We'll be in touch when preorder officially
                      opens.
                    </p>

                    <div className="mt-7 rounded-2xl bg-black/[0.04] p-5">

                      <div className="flex items-center justify-between">

                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                          Reserved quantity
                        </span>

                        <span className="font-[var(--font-heading)] text-xl font-bold">
                          {quantity}
                        </span>

                      </div>

                    </div>

                  </motion.div>
                )}

              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/10 pt-8"
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <p className="max-w-xl font-[var(--font-heading)] text-2xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white/80 sm:text-3xl">
              Energy is coming.
              <br />
              <span className="text-white/25">
                Stay close.
              </span>
            </p>

            <p className="max-w-xs text-xs leading-5 text-white/30 sm:text-right">
              Product details, formulation and availability will be
              announced as we approach launch.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default PreorderSection;