"use client";

import React, { useEffect, useRef } from "react";

export const SECTIONS = [
  "home",
  "about",
  "skills",
  "services",
  "approach",
  "work",
  "testimonials",
  "contact",
];

export default function FullPageScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeIndexRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const lastScrollDirectionRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Accurate section index detection from DOM offsetTop
    const getSectionIndexFromScroll = () => {
      const scrollPos = container.scrollTop;
      let closestIndex = 0;
      let minDiff = Infinity;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i]);
        if (el) {
          const diff = Math.abs(el.offsetTop - scrollPos);
          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
          }
        }
      }
      return closestIndex;
    };

    activeIndexRef.current = getSectionIndexFromScroll();

    // Sync activeIndex on scroll end
    const handleScrollSync = () => {
      activeIndexRef.current = getSectionIndexFromScroll();
    };

    container.addEventListener("scroll", handleScrollSync, { passive: true });

    const scrollToSectionIndex = (index: number) => {
      if (index < 0 || index >= SECTIONS.length) return;
      const targetId = SECTIONS[index];
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        lastScrollTimeRef.current = Date.now();
        lastScrollDirectionRef.current = index > activeIndexRef.current ? 1 : -1;
        activeIndexRef.current = index;

        container.scrollTo({
          top: targetEl.offsetTop,
          behavior: "smooth",
        });
        window.history.replaceState(null, "", `#${targetId}`);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // 1. Check if target is inside an internally scrollable element
      let target = e.target as HTMLElement | null;
      let isInsideScrollable = false;
      while (target && target !== container) {
        if (
          target.scrollHeight > target.clientHeight &&
          (window.getComputedStyle(target).overflowY === "auto" ||
            window.getComputedStyle(target).overflowY === "scroll")
        ) {
          if (
            (e.deltaY > 0 &&
              target.scrollTop + target.clientHeight < target.scrollHeight - 2) ||
            (e.deltaY < 0 && target.scrollTop > 2)
          ) {
            isInsideScrollable = true;
            break;
          }
        }
        target = target.parentElement;
      }

      if (isInsideScrollable) return;

      // Prevent native chaotic partial scrolling
      e.preventDefault();

      const now = Date.now();
      const elapsed = now - lastScrollTimeRef.current;
      const direction = e.deltaY > 0 ? 1 : -1;
      const absDelta = Math.abs(e.deltaY);

      // Phase 1: During the initial glide animation (first 460ms),
      // consume events so the transition glides smoothly without interruption
      if (elapsed < 460) {
        return;
      }

      // Phase 2: Between 460ms and 1100ms, filter out residual momentum tail in the same direction.
      // A decaying momentum tail on macOS trackpad has low delta (< 26).
      // A new, intentional user swipe has a fresh burst of energy (absDelta >= 26).
      if (elapsed < 1100 && direction === lastScrollDirectionRef.current) {
        if (absDelta < 26) {
          return; // Discard residual momentum tail to prevent 1-second auto-jump
        }
      }

      // Minimum delta to trigger an intentional section change
      if (absDelta < 18) return;

      // Verified intentional scroll: advance section
      const currentIndex = getSectionIndexFromScroll();
      const targetIndex = direction > 0 ? currentIndex + 1 : currentIndex - 1;

      if (targetIndex >= 0 && targetIndex < SECTIONS.length) {
        scrollToSectionIndex(targetIndex);
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (Date.now() - lastScrollTimeRef.current < 460) return;

      const currentIndex = getSectionIndexFromScroll();

      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        (e.key === " " && !e.shiftKey)
      ) {
        e.preventDefault();
        if (currentIndex < SECTIONS.length - 1) {
          scrollToSectionIndex(currentIndex + 1);
        }
      } else if (
        e.key === "ArrowUp" ||
        e.key === "PageUp" ||
        (e.key === " " && e.shiftKey)
      ) {
        e.preventDefault();
        if (currentIndex > 0) {
          scrollToSectionIndex(currentIndex - 1);
        }
      }
    };

    // Touch swipe navigation for mobile & tablets
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      if (Date.now() - lastScrollTimeRef.current < 460) return;

      if (Math.abs(diffY) > 40) {
        const currentIndex = getSectionIndexFromScroll();
        if (diffY > 0 && currentIndex < SECTIONS.length - 1) {
          scrollToSectionIndex(currentIndex + 1);
        } else if (diffY < 0 && currentIndex > 0) {
          scrollToSectionIndex(currentIndex - 1);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScrollSync);
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="fullpage-scroll-container"
      className="h-screen h-[100dvh] w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth relative [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {children}
    </div>
  );
}
