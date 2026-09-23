import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";

const EarlyAccessPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const productSection = document.getElementById("product");

    if (!productSection) {
      return;
    }

    let hasTriggered = false;

    const handleScroll = () => {
      if (hasTriggered) {
        return;
      }

      const productRect =
        productSection.getBoundingClientRect();

      /*
        Trigger when the visitor has scrolled past
        the bottom of the Product Showcase section.
      */
      const crossedProductSection =
        productRect.bottom <= window.innerHeight * 0.75;

      if (crossedProductSection) {
        hasTriggered = true;
        setIsOpen(true);

        window.removeEventListener(
          "scroll",
          handleScroll
        );
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Check once in case the page is already scrolled.
    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closePopup}
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
          />

          {/* Popup */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[var(--color-background)] shadow-2xl"
            >
              {/* Close */}
              <button
                type="button"
                onClick={closePopup}
                aria-label="Close popup"
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 transition-all duration-300 hover:rotate-90 hover:bg-black hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-[0.8fr_1.2fr]">

                {/* Visual */}
                <div className="relative hidden min-h-[460px] overflow-hidden bg-[var(--color-primary)] md:block">

                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-20 -left-20 h-[350px] w-[350px] rounded-full bg-white/20"
                  />

                  {/* Product */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 z-10 w-[145px] -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative aspect-[3/5] overflow-hidden rounded-[1.5rem] bg-white shadow-2xl">
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

                  <div className="absolute bottom-6 left-6">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/50">
                      Coming soon
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex min-h-[460px] flex-col justify-center p-7 sm:p-10">

                  {!submitted ? (
                    <>
                      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                          Early Access
                        </span>
                      </div>

                      <h2 className="max-w-md font-[var(--font-heading)] text-4xl font-bold uppercase leading-[0.9] tracking-[-0.06em] sm:text-5xl">
                        Be first
                        <br />
                        to taste
                        <br />
                        <span className="text-black/25">
                          what's next.
                        </span>
                      </h2>

                      <p className="mt-6 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
                        Join the early access list and be among
                        the first to know when we launch.
                      </p>

                      <form
                        onSubmit={handleSubmit}
                        className="mt-8"
                      >
                        <label
                          htmlFor="early-access-email"
                          className="sr-only"
                        >
                          Email address
                        </label>

                        <div className="flex flex-col gap-3 sm:flex-row">
                          <input
                            id="early-access-email"
                            type="email"
                            required
                            value={email}
                            onChange={(event) =>
                              setEmail(event.target.value)
                            }
                            placeholder="Your email address"
                            className="h-14 min-w-0 flex-1 rounded-full border border-black/10 bg-white px-5 text-sm text-black outline-none transition-all placeholder:text-black/30 focus:border-black"
                          />

                          <button
                            type="submit"
                            className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary)] hover:text-black"
                          >
                            Join

                            <ArrowUpRight
                              size={17}
                              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          </button>
                        </div>
                      </form>

                      <p className="mt-4 text-[10px] leading-4 text-black/35">
                        No spam. Just launch news, early access and
                        occasional updates.
                      </p>
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
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]">
                        <Check size={25} />
                      </div>

                      <h2 className="mt-7 font-[var(--font-heading)] text-4xl font-bold uppercase leading-[0.9] tracking-[-0.06em] sm:text-5xl">
                        You're
                        <br />
                        <span className="text-black/25">
                          on the list.
                        </span>
                      </h2>

                      <p className="mt-6 text-sm leading-6 text-[var(--color-text-muted)]">
                        Thanks for joining. We'll let you know
                        when something exciting is ready.
                      </p>

                      <button
                        type="button"
                        onClick={closePopup}
                        className="mt-8 rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[var(--color-primary)] hover:text-black"
                      >
                        Continue exploring
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EarlyAccessPopup;