import { useState } from "react";
import BasicDetailsView from "../features/onboarding-workflow/views/BasicDetailsView";
import PreparationView from "../features/onboarding-workflow/views/PreparationView";

const OnboardingView = () => {
  const [passedPreparation, setPassedPreparation] = useState(false);

  return (
    <>
      {!passedPreparation ? (
        <PreparationView onClick={() => setPassedPreparation(true)} />
      ) : (
        <BasicDetailsView />
      )}
    </>
  );
};

export default OnboardingView;
