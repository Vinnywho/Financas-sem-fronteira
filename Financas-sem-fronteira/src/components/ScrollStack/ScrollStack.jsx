import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import styles from "./ScrollStack.module.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`${styles["scroll-stack-card"]} ${itemClassName}`.trim()}>
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemStackDistance = 20,
  stackPosition = "12%",
  baseScale = 0.92,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const cardOffsets = useRef([]);
  const containerInfo = useRef({ top: 0, height: 0 });

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx =
      (parseFloat(stackPosition) / 100) * containerHeight;

    const containerTop = containerInfo.current.top;
    const containerBottom = containerTop + containerInfo.current.height;
    const endPoint = containerBottom - containerHeight;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const originalTop = cardOffsets.current[i];
      const pinStart = originalTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endPoint + itemStackDistance * i;

      let translateY = 0;
      let scale = 1;

      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY =
          scrollTop - originalTop + stackPositionPx + itemStackDistance * i;
        const scrollProgress = Math.min(
          1,
          (scrollTop - pinStart) / 500
        );
        const targetScale = baseScale + i * 0.02;
        scale = 1 - scrollProgress * (1 - targetScale);
      } else if (scrollTop > pinEnd) {
        translateY =
          pinEnd - originalTop + stackPositionPx + itemStackDistance * i;
        scale = baseScale + i * 0.02;
      }

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      card.style.zIndex = i;
    });
  }, [baseScale, itemStackDistance, stackPosition]);

  useLayoutEffect(() => {
    const lenis = new Lenis({ duration: 1.2, lerp: 0.1, smoothWheel: true });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const calculatePositions = () => {
      if (!scrollerRef.current) return;
      const cards = Array.from(
        scrollerRef.current.querySelectorAll(
          `.${styles["scroll-stack-card"]}`
        )
      );
      cardsRef.current = cards;
      cardOffsets.current = cards.map(
        (card) => card.offsetTop + scrollerRef.current.offsetTop
      );

      const rect = scrollerRef.current.getBoundingClientRect();
      containerInfo.current = {
        top: rect.top + window.scrollY,
        height: rect.height,
      };
    };

    rafId = requestAnimationFrame(raf);
    lenis.on("scroll", updateCardTransforms);
    calculatePositions();

    window.addEventListener("resize", calculatePositions);
    updateCardTransforms();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener("resize", calculatePositions);
    };
  }, [updateCardTransforms]);

  return (
    <div
      className={`${styles["scroll-stack-scroller"]} ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className={styles["scroll-stack-inner"]}>
        {children}
        <div className={styles["scroll-stack-end"]} />
      </div>
    </div>
  );
};

export default ScrollStack;