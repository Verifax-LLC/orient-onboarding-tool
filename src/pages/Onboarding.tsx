import { ClientDetailsStatus } from "../common/client-details/client-details.enums";
import {
  setBasicDetails,
  setClientDetailsStatus,
  setSocialMediaDetails,
} from "../common/client-details/client-details.thunks";
import { useAppDispatch, useAppSelector } from "../common/store/hooks";
import { RootState } from "../common/store/store";
import BasicDetailsView, {
  BasicDetailsFormData,
} from "../features/onboarding-workflow/views/BasicDetailsView";
import ContentSpecsView from "../features/onboarding-workflow/views/ContentSpecsView";
import PreparationView from "../features/onboarding-workflow/views/PreparationView";
import SocialMediaView, {
  SocialMediaDetailsFormData,
} from "../features/onboarding-workflow/views/SocialMediaView";

const OnboardingView: React.FC = () => {
  const dispatch = useAppDispatch();
  const formStatus = useAppSelector((s: RootState) => s.clientDetails.status);

  const handlePassedBasicDetails = (values: BasicDetailsFormData) => {
    dispatch(setBasicDetails(values));
  };

  const handlePassedSocialMedia = (values: SocialMediaDetailsFormData) => {
    dispatch(setSocialMediaDetails(values));
  };

  if (formStatus === ClientDetailsStatus.Preparation) {
    return (
      <PreparationView
        onClick={() =>
          dispatch(setClientDetailsStatus(ClientDetailsStatus.BasicDetails))
        }
      />
    );
  }

  if (formStatus === ClientDetailsStatus.BasicDetails) {
    return (
      <BasicDetailsView
        onClick={(values: BasicDetailsFormData) =>
          handlePassedBasicDetails(values)
        }
      />
    );
  }

  if (formStatus === ClientDetailsStatus.SocialMediaDetails) {
    return (
      <SocialMediaView
        onClick={(values: SocialMediaDetailsFormData) =>
          handlePassedSocialMedia(values)
        }
      />
    );
  }

  if (formStatus === ClientDetailsStatus.ContentSpecs) {
    return <ContentSpecsView />;
  }

  return <div>Onboarding complete</div>;
};

export default OnboardingView;
