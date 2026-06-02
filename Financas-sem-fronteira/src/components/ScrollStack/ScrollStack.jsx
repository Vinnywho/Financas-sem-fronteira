import { useEffect, useRef, useCallback } from "react";
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
  const rafRef = useRef(null);
  const lastScrollRef = useRef(-1);

  const calculatePositions = useCallback(() => {
    if (!scrollerRef.current) return;

    const cards = Array.from(
      scrollerRef.current.querySelectorAll(`.${styles["scroll-stack-card"]}`)
    );
    cardsRef.current = cards;

    cards.forEach((card) => {
      card.style.transform = "";
    });

    cardOffsets.current = cards.map(
      (card) => card.getBoundingClientRect().top + window.scrollY
    );

    const rect = scrollerRef.current.getBoundingClientRect();
    containerInfo.current = {
      top: rect.top + window.scrollY,
      height: rect.height,
    };
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || !scrollerRef.current) return;

    const scrollTop = window.scrollY;

    if (Math.abs(scrollTop - lastScrollRef.current) < 0.5) return;
    lastScrollRef.current = scrollTop;

    const viewportHeight = window.innerHeight;
    const stackPositionPx = (parseFloat(stackPosition) / 100) * viewportHeight;
    
    const totalCards = cardsRef.current.length;
    const lastCardOriginalTop = cardOffsets.current[totalCards - 1];
    const endPoint = lastCardOriginalTop - stackPositionPx - itemStackDistance * (totalCards - 1);

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const originalTop = cardOffsets.current[i];
      const pinStart = originalTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endPoint + itemStackDistance * i;

      let translateY = 0;
      let scale = 1;

      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - originalTop + stackPositionPx + itemStackDistance * i;
        const scrollProgress = Math.min(1, (scrollTop - pinStart) / 600);
        const targetScale = baseScale + i * 0.02;
        scale = 1 - scrollProgress * (1 - targetScale);
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - originalTop + stackPositionPx + itemStackDistance * i;
        scale = baseScale + i * 0.02;
      }

      card.style.transform = `translate3d(0, ${Math.round(translateY)}px, 0) scale(${scale.toFixed(4)})`;
      card.style.zIndex = i + 1;
    });
  }, [baseScale, itemStackDistance, stackPosition]);

  useEffect(() => {
    let running = true;

    const loop = () => {
      if (!running) return;
      updateCardTransforms();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateCardTransforms]);

  useEffect(() => {
    const initId = requestAnimationFrame(() => {
      calculatePositions();
      updateCardTransforms();
    });

    let resizeTimer = null;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        calculatePositions();
        lastScrollRef.current = -1;
      }, 150);
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("load", calculatePositions, { passive: true });

    return () => {
      cancelAnimationFrame(initId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", calculatePositions);
    };
  }, [calculatePositions, updateCardTransforms]);

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