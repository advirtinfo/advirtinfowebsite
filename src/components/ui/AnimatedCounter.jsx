import React, { useEffect, useRef } from 'react';
import { useMotionValue, animate, useInView } from 'framer-motion';

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2.5 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const displayRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (latest) => {
          if (displayRef.current) {
            displayRef.current.textContent = prefix + Math.round(latest) + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, target, duration, prefix, suffix, motionValue]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>{prefix}0{suffix}</span>
    </span>
  );
}
