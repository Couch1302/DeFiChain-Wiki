import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

import * as p5 from "p5";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

export const BackgroundAnimation = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: vantaRef.current,
          p5: p5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x39f6fe,
          backgroundColor: 0xfa00ac,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className={styles.animationOverlay} ref={vantaRef}>
    </div>
  );
};