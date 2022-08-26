import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export const BackgroundAnimation = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xFC1DAE,
          backgroundColor: 0x1E1E1E,
          points: 5.0,
          maxDistance: 25.0,
          spacing: 20.0,
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