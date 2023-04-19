import { useState } from "react";
import BasicDetailsView, {
  BasicDetailsFormData,
} from "../features/onboarding-workflow/views/BasicDetailsView";
import PreparationView from "../features/onboarding-workflow/views/PreparationView";
import SocialMediaView, {
  SocialMediaDetailsFormData,
} from "../features/onboarding-workflow/views/SocialMediaView";

const OnboardingView = () => {
  const [passedPreparation, setPassedPreparation] = useState(false);
  const [passedBasicDetails, setPassedBasicDetails] = useState(false);
  const [passedSocialMedia, setPassedSocialMedia] = useState(false);

  const handlePassedBasicDetails = (values: BasicDetailsFormData) => {
    console.log(values);
    setPassedBasicDetails(true);
  };

  const handlePassedSocialMedia = (values: SocialMediaDetailsFormData) => {
    console.log(values);
    setPassedSocialMedia(true);
  };

  if (!passedPreparation) {
    return <PreparationView onClick={() => setPassedPreparation(true)} />;
  }

  if (!passedBasicDetails) {
    return (
      <BasicDetailsView
        onClick={(values: BasicDetailsFormData) =>
          handlePassedBasicDetails(values)
        }
      />
    );
  }

  if (!passedSocialMedia) {
    return (
      <SocialMediaView
        onClick={(values: SocialMediaDetailsFormData) =>
          handlePassedSocialMedia(values)
        }
      />
    );
  }
};

export default OnboardingView;
