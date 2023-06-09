import classNames from "classnames";
import React from "react";

interface VButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  classNames?: string[];
  disabled?: boolean;
  size?: "sm" | "lg";
  tabIndex?: number;
  children?: React.ReactNode;
}

const VButton: React.FC<VButtonProps> = (props: VButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(e);
  };

  props.size === "sm" ? "btn-md" : "btn-lg";

  const classStr = classNames(
    props.classNames,
    "btn xs:btn-lg lg:btn-md btn-primary"
  );

  return (
    <button
      type={props.type}
      className={classStr}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
      disabled={props.disabled}
      style={{ color: "white" }}
      onKeyDown={props.onKeyDown}
    >
      {props.text ?? props.children}
    </button>
  );
};

export default VButton;
