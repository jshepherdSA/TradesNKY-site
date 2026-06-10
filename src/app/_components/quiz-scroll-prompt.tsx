"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Fixed bottom overlay that appears while the Five Pillars accordion
 * section is in the viewport. Clicking it smoothly scrolls down to the
 * QuizTeaser section (id="quiz-teaser"). Desktop-only (md+); hidden on
 * mobile. Driven by an IntersectionObserver watching #five-pillars-section.
 */
export function QuizScrollPrompt() {
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setVisible(false);
      return;
    }
    const target = document.getElementById("five-pillars-section");
    if (!target) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [isDesktop]);

  function handleClick() {
    const teaser = document.getElementById("quiz-teaser");
    teaser?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  if (!isDesktop) return null;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="quiz-scroll-prompt"
          type="button"
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.3 }}
          aria-label="Scroll to the career quiz"
          className="fixed inset-x-0 bottom-0 z-40 flex w-full cursor-pointer flex-col items-center justify-end gap-2 pt-16 pb-6 text-tnky-white focus-visible:outline-none"
          style={{
            background:
              "linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.5) 40%, rgba(15, 23, 42, 0) 100%)",
          }}
        >
          <span className="font-display font-bold text-card-title text-tnky-white">
            Scroll to Take the Quiz
          </span>
          <motion.span
            aria-hidden="true"
            animate={
              reducedMotion ? undefined : { y: [0, 6, 0] }
            }
            transition={
              reducedMotion
                ? undefined
                : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <ChevronDown className="h-6 w-6 text-tnky-white" strokeWidth={2} />
          </motion.span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
