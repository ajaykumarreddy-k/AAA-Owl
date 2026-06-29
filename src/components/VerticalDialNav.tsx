import React, { useEffect, useRef, useState, useCallback, startTransition } from "react";

export interface Section {
  id: string;
  label: string;
}

export interface VerticalDialNavProps {
  sections: Section[];
  activeColor?: string;
  fadeDistance?: number;
  font?: {
    fontSize?: number;
    fontFamily?: string;
    letterSpacing?: string;
    lineHeight?: string;
  };
  dialWidth?: number | string;
  dialRadius?: number | string;
  itemSpacing?: number;
  alignment?: "left" | "center" | "right";
  style?: React.CSSProperties;
}

export default function VerticalDialNav({
  sections = [],
  activeColor = "#7dd3fc", // Cyan highlight for the beige theme
  fadeDistance = 2,
  font = { fontSize: 13, fontFamily: "sans-serif" },
  dialWidth = 140,
  dialRadius = 0,
  itemSpacing = 16,
  alignment = "right",
  style,
}: VerticalDialNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Use IntersectionObserver instead of a continuous scroll listener for O(1) performance
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) {
              startTransition(() => setActiveIndex(idx));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // Trigger when element is near the middle of the screen
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Scroll to section when clicked
  const handleClick = useCallback(
    (id: string, idx: number) => (e: React.MouseEvent) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Optimistically update active index
        startTransition(() => setActiveIndex(idx));
      }
    },
    []
  );

  const dialRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Only scroll the dial menu itself if it's overflowing (for very large menus)
  useEffect(() => {
    if (!dialRef.current || !itemRefs.current[activeIndex]) return;
    
    // We only scroll into view if there's a scrollbar in the nav menu itself.
    itemRefs.current[activeIndex]?.scrollIntoView({
      behavior: "auto",
      block: "nearest",
    });
  }, [activeIndex]);

  // Fade function
  function getOpacity(idx: number) {
    const dist = Math.abs(idx - activeIndex);
    if (dist === 0) return 1;
    if (dist > fadeDistance) return 0.2;
    return 1 - (dist / (fadeDistance + 1)) * 0.8;
  }

  return (
    <nav
      style={{
        ...style,
        width: dialWidth,
        height: "100%",
        minWidth: dialWidth,
        background: "none",
        borderRadius: dialRadius,
        display: "flex",
        flexDirection: "column",
        alignItems:
          alignment === "left"
            ? "flex-start"
            : alignment === "right"
            ? "flex-end"
            : "center",
        justifyContent: "center",
        overflow: "visible",
        position: "relative",
        boxShadow: "none",
        zIndex: 50,
      }}
      aria-label="Section navigation"
    >
      <div
        ref={dialRef}
        style={{
          width: "100%",
          maxHeight: "100%",
          overflowY: "auto",
          overflowX: "visible",
          display: "flex",
          flexDirection: "column",
          alignItems:
            alignment === "left"
              ? "flex-start"
              : alignment === "right"
              ? "flex-end"
              : "center",
          justifyContent: "center",
          gap: Math.max(0, itemSpacing),
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingRight: alignment === "right" ? 24 : 0,
          paddingLeft: alignment === "left" ? 24 : 0,
        }}
        tabIndex={0}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {sections.map((section, idx) => (
          <a
            key={section.id}
            ref={(el) => (itemRefs.current[idx] = el)}
            href={`#${section.id}`}
            onClick={handleClick(section.id, idx)}
            style={{
              color: idx === activeIndex ? activeColor : "#1a1a1a", // Uses ink color for inactive in beige theme
              ...font,
              opacity: getOpacity(idx),
              transition:
                "opacity 0.4s cubic-bezier(.4,0,.2,1), color 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)",
              padding: 0,
              width: "auto",
              textAlign: alignment,
              cursor: "pointer",
              userSelect: "none",
              textDecoration: "none",
              fontWeight: idx === activeIndex ? 600 : 400,
              fontSize: font?.fontSize || 14,
              borderRadius: 6,
              background: "transparent",
              outline: "none",
              transform: idx === activeIndex ? "scale(1.15)" : "scale(1)",
              transformOrigin: alignment === "right" ? "right center" : alignment === "left" ? "left center" : "center center",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              willChange: "opacity, color, transform",
              minHeight: 0,
              lineHeight: 1.2,
              boxSizing: "border-box",
              paddingRight: 0,
              paddingLeft: 0,
              margin: 0,
              whiteSpace: "nowrap"
            }}
            aria-current={idx === activeIndex ? "true" : undefined}
            tabIndex={0}
            role="link"
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
