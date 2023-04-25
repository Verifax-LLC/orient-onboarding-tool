import { useEffect } from "react";
import { NumberParam, useQueryParam } from "use-query-params";
import "./App.css";
import { useAppDispatch } from "./common/store/hooks";
import { setTenant } from "./common/tenant/tenant.thunks";
import NavigationBar from "./features/site/components/NavigationBar";
import OnboardingView from "./pages/Onboarding";

function App() {
  const dispatch = useAppDispatch();
  const [tenantId, setTenantId] = useQueryParam("x", NumberParam);

  useEffect(() => {
    if (tenantId) {
      console.log(tenantId);
      dispatch(setTenant(tenantId));
    }
  }, [tenantId]);

  return (
    <div data-theme="verifax" className="flex flex-col justify-start h-screen">
      <NavigationBar />
      <div className="overflow-auto">
        <OnboardingView />
      </div>
    </div>
  );
}

export default App;
