
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { BRAND, NAVIGATION } from "../../utils/constants";
import Button from "../common/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (href) => {
    setIsMobileMenuOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          layout
          transition={{
            layout: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          animate={{
            marginTop: isScrolled ? 14 : 0,
            width: isScrolled ? "min(1152px, 100%)" : "100%",
            borderRadius: isScrolled ? 999 : 0,
          }}
          className="
            relative
            overflow-hidden
            border
            border-transparent
            bg-transparent
          "
        >
          {/* Glass Background */}

          <motion.div
            animate={{
              opacity: isScrolled ? 1 : 0,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[inherit]
              border
              border-black/[0.08]
              bg-white/70
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              backdrop-blur-2xl
            "
          />

          {/* Subtle glass highlight */}

          <motion.div
            animate={{
              opacity: isScrolled ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-white/80
            "
          />

          {/* =================================================
              NAV CONTENT
          ================================================== */}

          <motion.div
            layout
            transition={{
              layout: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className={`
              relative
              flex
              items-center
              justify-between
              transition-[height,padding]
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isScrolled
                  ? "h-16 px-4 sm:px-5 lg:px-6"
                  : "h-20 px-5 sm:px-8 lg:px-10"
              }
            `}
          >
            {/* =================================================
                LOGO
            ================================================== */}

            <button
              onClick={() => handleNavigation("#home")}
              aria-label={`${BRAND.name} home`}
              className="group relative z-10 flex items-center gap-3"
            >
              {/* Logo */}

              <motion.div
                animate={{
                  width: isScrolled ? 36 : 40,
                  height: isScrolled ? 36 : 40,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--color-primary)]
                  text-black
                  shadow-sm
                  transition-transform
                  duration-300
                  group-hover:scale-105
                  group-hover:rotate-6
                "
              >
                <span className="font-[var(--font-heading)] text-sm font-bold">
                  Y
                </span>
              </motion.div>

              {/* Brand */}

              <motion.span
                animate={{
                  fontSize: isScrolled ? "16px" : "18px",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-[var(--font-heading)]
                  font-bold
                  tracking-tight
                  text-black
                "
              >
                {BRAND.name}
              </motion.span>
            </button>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
              {NAVIGATION.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="
                    group
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-black/65
                    transition-all
                    duration-300
                    hover:bg-black/[0.04]
                    hover:text-black
                  "
                >
                  {item.label}

                  {/* Active/Hover line */}

                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-black
                      transition-all
                      duration-300
                      group-hover:w-4
                    "
                  />
                </button>
              ))}
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================== */}

            <div className="relative z-10 hidden items-center gap-2 lg:flex">
              <button
                onClick={() => handleNavigation("#login")}
                className="
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-black/65
                  transition-all
                  duration-300
                  hover:bg-black/[0.04]
                  hover:text-black
                "
              >
                Login
              </button>

              <Button
                onClick={() => handleNavigation("#preorder")}
              >
                Early Access
              </Button>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              onClick={() =>
                setIsMobileMenuOpen((previous) => !previous)
              }
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="
                relative
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-black/[0.08]
                bg-black/[0.03]
                text-black
                transition-all
                duration-300
                hover:bg-black/[0.07]
                lg:hidden
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-x-4
              top-24
              z-40
              overflow-hidden
              rounded-3xl
              border
              border-black/[0.08]
              bg-white/80
              p-5
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              backdrop-blur-2xl
              lg:hidden
            "
          >
            {/* Mobile Links */}

            <nav className="flex flex-col">
              {NAVIGATION.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => handleNavigation(item.href)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-black/[0.08]
                    py-4
                    text-left
                    font-[var(--font-heading)]
                    text-lg
                    font-medium
                    text-black
                    transition-colors
                    duration-300
                    last:border-0
                    hover:text-black/60
                  "
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={18}
                    className="
                      text-black/40
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-black
                    "
                  />
                </motion.button>
              ))}
            </nav>

            {/* Mobile Actions */}

            <div className="mt-5 flex flex-col gap-3">
              <button
                onClick={() => handleNavigation("#login")}
                className="
                  w-full
                  rounded-full
                  border
                  border-black/[0.10]
                  bg-black/[0.03]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                Login
              </button>

              <Button
                className="w-full"
                onClick={() => handleNavigation("#preorder")}
              >
                Get Early Access
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

