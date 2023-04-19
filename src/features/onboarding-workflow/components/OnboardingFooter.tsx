import React from "react";
import VButton from "../../../ui/button/VButton";

interface OnboardingFooterProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const OnboardingFooter: React.FC<OnboardingFooterProps> = (
  props: OnboardingFooterProps
) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-secondary">Powered by Verifax</p>
      <VButton
        type={props.type ?? "button"}
        text="Continue  &#8680;"
        onClick={() => props.onClick?.()}
        disabled={props.disabled}
        classNames={["w-[343px] m-auto"]}
      />
    </div>
  );
};

export default OnboardingFooter;
