import "./App.css";
import OnboardingView from "./pages/Onboarding";

function App() {
  return (
    <div
      data-theme="verifax"
      className="flex justify-center min-h-screen overflow-auto"
    >
      <OnboardingView />
    </div>
  );
}

export default App;
