import { useEffect } from "react";
import { StringParam, useQueryParam } from "use-query-params";
import "./App.css";
import { useAppDispatch } from "./common/store/hooks";
import { setTenant } from "./common/tenant-details/tenant-details.thunks";
import FileUploadDialog from "./features/onboarding-workflow/components/FileUploadDialog";
import Footer from "./features/site/components/Footer";
import NavigationBar from "./features/site/components/NavigationBar";
import OnboardingView from "./pages/Onboarding";

function App() {
  const dispatch = useAppDispatch();
  const [link] = useQueryParam("q", StringParam);

  useEffect(() => {
    if (link) {
      dispatch(setTenant(link));
    }
  }, [link]);

  return (
    <div data-theme="verifax" className="flex flex-col justify-start h-screen">
      <NavigationBar />
      <div className="overflow-auto flex flex-col justify-between h-full">
        <OnboardingView />
        <Footer />
      </div>
      <FileUploadDialog />
    </div>
  );
}

export default App;
