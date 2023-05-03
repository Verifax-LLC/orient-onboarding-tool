import {
  setBasicDetails,
  setClientDetailsStatus,
  setContentSpecs,
  setSocialMediaDetails,
} from "../common/client-details/client-details.thunks";
import { ProcessStatus } from "../common/models/process.enums";
import { useAppDispatch, useAppSelector } from "../common/store/hooks";
import { RootState } from "../common/store/store";
import BasicDetailsView, {
  BasicDetailsFormData,
} from "../features/onboarding-workflow/views/BasicDetailsView";
import ContentSpecsView, {
  ContentSpecsFormData,
} from "../features/onboarding-workflow/views/ContentSpecsView";
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

  const handlePassedContentSpecs = (values: ContentSpecsFormData) => {
    dispatch(setContentSpecs(values));
  };

  if (formStatus === ProcessStatus.Preparation) {
    return (
      <PreparationView
        onClick={() =>
          dispatch(setClientDetailsStatus(ProcessStatus.BasicDetails))
        }
      />
    );
  }

  if (formStatus === ProcessStatus.BasicDetails) {
    return (
      <BasicDetailsView
        onClick={(values: BasicDetailsFormData) =>
          handlePassedBasicDetails(values)
        }
      />
    );
  }

  if (formStatus === ProcessStatus.SocialMediaDetails) {
    return (
      <SocialMediaView
        onClick={(values: SocialMediaDetailsFormData) =>
          handlePassedSocialMedia(values)
        }
      />
    );
  }

  if (formStatus === ProcessStatus.ContentSpecs) {
    return (
      <ContentSpecsView
        onClick={(values: ContentSpecsFormData) =>
          handlePassedContentSpecs(values)
        }
      />
    );
  }

  return <div>Onboarding complete</div>;
};

export default OnboardingView;
