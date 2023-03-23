import React from "react";
import VButton from "../../../ui/button/VButton";

interface PreparationStep {
  onClick?: () => void;
}

const PreparationStep: React.FC<PreparationStep> = (props: PreparationStep) => {
  return (
    <div className="grid gap-10 grid-cols-1 text-center shadow-xl xs:w-full lg:w-1/2 mx-auto p-6 rounded-4xl self-center">
      <p className="text-xl font-medium">Get verified now</p>
      <p className="text-sm font-medium">
        Company name would like to confirm your identity.
      </p>
      <p className="text-sm font-bold">
        Make sure you meet the following requirements
      </p>
      <div className="w-[290px] text-start mx-auto">
        <div className="badge badge-success inline-flex">&#x2714;</div>
        <p className="text-sm font-medium inline-flex ml-1">
          You have a valid government issued ID
        </p>
      </div>
      <div className="w-[290px] text-start mx-auto">
        <div className="badge badge-success inline-flex">&#x2714;</div>
        <p className="text-sm font-medium inline-flex ml-1">
          You have the ability to take a selfie
        </p>
      </div>
      <div className="w-[290px] text-start mx-auto">
        <div className="badge badge-success inline-flex">&#x2714;</div>
        <p className="text-sm font-medium inline-flex ml-1">
          You are in a well-lit room
        </p>
      </div>
      <VButton
        text="I'm ready"
        onClick={() => props.onClick?.()}
        classNames={["w-[290px] m-auto"]}
      />
    </div>
  );
};

export default PreparationStep;
