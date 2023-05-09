import { useEffect } from "react";
import { StringParam, useQueryParam } from "use-query-params";
import "./App.css";
import {
  LinkVerificationStatus,
  OnboardingLinkRequest,
} from "./common/client-details/client-details.models";
import {
  fetchOnboardingLink,
  setLinkVerificationState,
} from "./common/client-details/client-details.thunks";
import { useAppDispatch, useAppSelector } from "./common/store/hooks";
import { RootState } from "./common/store/store";
import DataFetchingPlaceholder from "./features/onboarding-workflow/components/DataFetchingPlaceholder";
import FileUploadDialog from "./features/onboarding-workflow/components/FileUploadDialog";
import Footer from "./features/site/components/Footer";
import NavigationBar from "./features/site/components/NavigationBar";
import OnboardingView from "./pages/Onboarding";
import VGridContainer from "./ui/grid-container/VGridContainer";

function App() {
  const dispatch = useAppDispatch();
  const [link] = useQueryParam("q", StringParam);

  const validOnboardingLink = useAppSelector(
    (s: RootState) => s.clientDetails.linkVerificationState
  );

  useEffect(() => {
    if (link) {
      const linkRequest: OnboardingLinkRequest = {
        link: link,
      };
      dispatch(fetchOnboardingLink(linkRequest));
    } else {
      dispatch(setLinkVerificationState(LinkVerificationStatus.FAILED));
    }
  }, [link]);

  return (
    <div data-theme="verifax" className="flex flex-col justify-start h-screen">
      <NavigationBar />
      <div className="overflow-auto flex flex-col justify-between h-full">
        {validOnboardingLink === LinkVerificationStatus.SUCCESS ? (
          <>
            <OnboardingView />
          </>
        ) : validOnboardingLink === LinkVerificationStatus.FAILED ? (
          <>
            <h1 className="text-4xl font-bold text-center mt-10">
              This link is invalid, please request a new link from your vendor.
            </h1>
            <img
              src="/locked.jpg"
              alt="Error, invalid link"
              height={5000}
              width={500}
              className="mx-auto"
            />
          </>
        ) : (
          <VGridContainer>
            <p className="text-3xl font-medium">Verifying your link...</p>
            <DataFetchingPlaceholder />
          </VGridContainer>
        )}
        <Footer />
      </div>
      <FileUploadDialog />
    </div>
  );
}

export default App;
