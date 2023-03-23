import { useState } from "react";
import PreparationStep from "../components/PreparationStep";
import UploadDocument from "../components/UploadDocuments";

const VerificaitionWorkflowView = () => {
  const [passedPreparation, setPassedPreparation] = useState(false);

  return (
    <>
      {!passedPreparation ? (
        <PreparationStep onClick={() => setPassedPreparation(true)} />
      ) : (
        <UploadDocument />
      )}
    </>
  );
};

export default VerificaitionWorkflowView;
