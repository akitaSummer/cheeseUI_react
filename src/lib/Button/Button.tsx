import React from "react";

import "./Button.scss";

type LevelType = "main" | "normal" | "danger";
type ThemeType = "button" | "link" | "text";
type SizeType = "small" | "normal" | "big";

export interface ButtonProps {
  theme?: ThemeType;
  size?: SizeType;
  level?: LevelType;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLElement>
> = ({
  theme = "button",
  size = "normal",
  level = "normal",
  disabled = false,
  loading = false,
  children,
  onClick,
}) => {
  return (
    <button
      className={`cheese-button cheese-theme-${theme} cheese-size-${size} cheese-level-${level}`}
      disabled={disabled}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {loading && <span className="cheese-loadingIndicator"></span>}
      {children}
    </button>
  );
};

export default Button;
