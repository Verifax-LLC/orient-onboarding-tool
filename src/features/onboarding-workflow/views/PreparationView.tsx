import React from "react";
import { useAppSelector } from "../../../common/store/hooks";
import { RootState } from "../../../common/store/store";
import VGridContainer from "../../../ui/grid-container/VGridContainer";
import OnboardingFooter from "../components/OnboardingFooter";

interface PreparationViewProps {
  onClick?: () => void;
}

const PreparationView: React.FC<PreparationViewProps> = (
  props: PreparationViewProps
) => {
  const tenant = useAppSelector((s: RootState) => s.tenantDetails.tenant);
  return (
    <VGridContainer>
      <p className="text-3xl font-medium">Get onboarded fast</p>
      {tenant?.name && (
        <p className="text-sm font-medium">
          {tenant.name} would like to get you onboarded
        </p>
      )}
      <div className="mx-auto">
        <img src={"/onboard.png"} />
      </div>
      <p className="text-sm font-bold">
        Make sure you meet the following criteria
      </p>
      <div className="w-[290px] text-start mx-auto">
        <div
          className="badge badge-success inline-flex"
          style={{ backgroundColor: "#D1FADF" }}
        >
          &#x2714;
        </div>
        <p className="text-sm font-medium inline-flex ml-1">
          You have the point of contact info
        </p>
      </div>
      <div className="w-[290px] text-start mx-auto">
        <div
          className="badge badge-success inline-flex"
          style={{ backgroundColor: "#D1FADF" }}
        >
          &#x2714;
        </div>
        <p className="text-sm font-medium inline-flex ml-1">
          You have valid social media links{" "}
        </p>
      </div>
      <div className="w-[290px] text-start mx-auto">
        <div
          className="badge badge-success inline-flex"
          style={{ backgroundColor: "#D1FADF" }}
        >
          &#x2714;
        </div>
        <p className="text-sm font-medium inline-flex ml-1">
          Documents (style guide, logos, etc)
        </p>
      </div>
      <OnboardingFooter
        text="Let's go  &#8680;"
        onClick={props.onClick}
        hideBackButton
      />
    </VGridContainer>
  );
};

export default PreparationView;
