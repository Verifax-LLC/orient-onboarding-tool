import { useState } from "react";
import "./App.css";
import VerificaitionWorkflowView from "./features/verification-workflow/views/VerificationView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-theme="verifax" className="h-screen flex justify-center">
      <VerificaitionWorkflowView />
    </div>
  );
}

export default App;
