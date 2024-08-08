import { animate, useInView } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

export default function Counter({ from, to, animationConfigs }) {
  const ref = useRef();
  const inView = useInView(ref);

  useLayoutEffect(() => {
    if (!inView) return;

    const controls = animate(from, to, {
      duration: 5,
      ease: [0.0, 0.99, 0.26, 1.005],
      onUpdate: (latest) => {
        ref.current.textContent = String(latest.toFixed(0)) + "+";
      },
    });
  }, [inView, from, to]);

  return <span ref={ref} />;
}
