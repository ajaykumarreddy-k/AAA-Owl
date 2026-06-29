import React, { useEffect, useRef, useState, startTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultBgImage = {
  src: "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg",
  alt: "Gradient 1 - Blue",
};

const positionMap = {
  "bottom-right": { justifyContent: "flex-end", alignItems: "flex-end" },
  "bottom-left": { justifyContent: "flex-end", alignItems: "flex-start" },
  "top-right": { justifyContent: "flex-start", alignItems: "flex-end" },
  "top-left": { justifyContent: "flex-start", alignItems: "flex-start" },
  center: { justifyContent: "center", alignItems: "center" },
} as const;

type Position = keyof typeof positionMap;

export interface LoadingScreenProps {
  backgroundColor?: string;
  backgroundImage?: { src: string; alt?: string };
  useImage?: boolean;
  countFont?: React.CSSProperties;
  countColor?: string;
  countSpeed?: number;
  countStyle?: "default" | "monospace";
  countPrefix?: string;
  countSuffix?: string;
  countPosition?: Position;
  showPercent?: boolean;
  swipeDuration?: number;
  style?: React.CSSProperties;
  scrollBlock?: boolean;
}

export default function LoadingScreen({
  backgroundColor = "#EBE7DB", // Default to paper theme color
  backgroundImage = defaultBgImage,
  useImage = false,
  countFont = { fontSize: "96px", fontWeight: "900", fontFamily: "var(--font-serif)" },
  countColor = "#1a1a1a", // Default to ink theme color
  countSpeed = 18,
  countStyle = "default",
  countPrefix = "",
  countSuffix = "",
  countPosition = "center", // Center for dramatic effect
  showPercent = true,
  swipeDuration = 800,
  style,
  scrollBlock = true,
}: LoadingScreenProps) {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [swipe, setSwipe] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollBlockedRef = useRef(false);

  // Block scroll when loading
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    
    function preventScroll(e: Event) {
      e.preventDefault();
    }
    
    if (loading && scrollBlock && !scrollBlockedRef.current) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      scrollBlockedRef.current = true;
    } else if ((!loading || scrollBlock === false) && scrollBlockedRef.current) {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll, false);
      window.removeEventListener("touchmove", preventScroll, false);
      scrollBlockedRef.current = false;
    }
    
    return () => {
      if (scrollBlockedRef.current) {
        document.body.style.overflow = "";
        window.removeEventListener("wheel", preventScroll, false);
        window.removeEventListener("touchmove", preventScroll, false);
        scrollBlockedRef.current = false;
      }
    };
  }, [loading, scrollBlock]);

  // Counting logic
  useEffect(() => {
    if (!loading) return;
    
    if (count >= 100) {
      timerRef.current = setTimeout(() => {
        startTransition(() => setSwipe(true));
        timerRef.current = setTimeout(() => {
          startTransition(() => setLoading(false));
        }, swipeDuration);
      }, 400);
      return;
    }
    
    timerRef.current = setTimeout(() => {
      startTransition(() => setCount((c) => c + 1));
    }, countSpeed);
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [count, loading, countSpeed, swipeDuration]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const pos = positionMap[countPosition] || positionMap["bottom-right"];

  const swipeVariants = {
    initial: { y: 0 },
    animate: {
      y: "-100%",
      transition: { duration: swipeDuration / 1000, ease: [0.76, 0, 0.24, 1] }, // dramatic cubic bezier for retro theme
    },
    exit: { y: "-100%" },
  };

  const countStyles: React.CSSProperties = {
    ...countFont,
    color: countColor,
    fontVariantNumeric: countStyle === "monospace" ? "tabular-nums" : undefined,
    fontFamily: countStyle === "monospace" ? "monospace" : countFont?.fontFamily,
    textAlign: "center",
    margin: 0,
    userSelect: "none",
    transition: "color 0.3s, font-size 0.3s",
  };

  // If already loaded and swiped, don't render the wrapper at all so it doesn't block clicks.
  if (!loading) return null;

  return (
    <div
      style={{
        ...style,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none"
      }}
    >
      <AnimatePresence>
        {loading && (
          <motion.div
            initial="initial"
            animate={swipe ? "animate" : "initial"}
            exit="exit"
            variants={swipeVariants}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "auto",
              background:
                useImage && backgroundImage?.src
                  ? `url(${backgroundImage.src}) center/cover no-repeat`
                  : backgroundColor,
              display: "flex",
              flexDirection: "column",
              justifyContent: pos.justifyContent,
              alignItems: pos.alignItems,
            }}
            aria-label="Loading screen"
            role="dialog"
            aria-modal="true"
            tabIndex={0}
            aria-live="polite"
            aria-busy={loading}
            onKeyDown={(e) => {
              if (e.key === "Escape" && loading) {
                startTransition(() => setLoading(false));
              }
            }}
          >
            {/* Retro grid background decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
              backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
              backgroundSize: '100px 100px',
              backgroundPosition: 'center center'
            }}></div>
            
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: pos.justifyContent,
                alignItems: pos.alignItems,
                pointerEvents: "none",
                padding: "2rem",
                position: "relative",
                zIndex: 10
              }}
            >
              <span
                style={{ ...countStyles }}
                aria-live="polite"
                aria-atomic="true"
                tabIndex={0}
              >
                {countPrefix}
                {count}
                {showPercent ? "%" : null}
                {countSuffix}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
