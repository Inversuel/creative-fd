import React, { useEffect, useRef } from "react";
import styles from "./button.module.css";

type ButtonType = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonType) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef === null || buttonRef.current === null) return;
    buttonRef.current.onmousemove = function (e) {
      const x = e.layerX;
      const y = e.layerY;

      buttonRef.current?.style.setProperty("--y", y + "px");
      buttonRef.current?.style.setProperty("--x", x + "px");
    };
  }, []);

  return (
    <button ref={buttonRef} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
