import React from "react";
import VButton from "../../../ui/button/VButton";

interface OnboardingFooterProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  hideBackButton?: boolean;
  onBackClick?: () => void;
  disabled?: boolean;
}

const OnboardingFooter: React.FC<OnboardingFooterProps> = (
  props: OnboardingFooterProps
) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-secondary">Powered by Orient</p>
      <div className="w-[343px] m-auto">
        <VButton
          type={props.type ?? "button"}
          text={props.text ?? "Continue  &#8680;"}
          onClick={() => props.onClick?.()}
          disabled={props.disabled}
          classNames={["w-full"]}
        />
        {!props.hideBackButton && (
          <a className="link link-secondary" onClick={props.onBackClick}>
            &#8678; Back
          </a>
        )}
      </div>
    </div>
  );
};

export default OnboardingFooter;
