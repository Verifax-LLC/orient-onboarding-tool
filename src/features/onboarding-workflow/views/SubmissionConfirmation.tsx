import { Triangle } from "react-loader-spinner";
import { ProcessStatus } from "../../../common/models/process.enums";
import { useAppSelector } from "../../../common/store/hooks";
import { RootState } from "../../../common/store/store";
import VGridContainer from "../../../ui/grid-container/VGridContainer";

const SubmissionConfirmation = () => {
  const status = useAppSelector((s: RootState) => s.clientDetails.status);
  return (
    <VGridContainer>
      <div className="mx-auto">
        <p className="text-3xl font-medium mb-10">
          {status !== ProcessStatus.Complete
            ? "Submitting data"
            : "Submission complete!"}
        </p>
        {status !== ProcessStatus.Complete ? (
          <>
            <Triangle
              height="240"
              width="240"
              color="#7F56D9"
              ariaLabel="triangle-loading"
              visible={true}
            />
            <p className="text-xs font-medium mt-4 text-secondary">
              This should only take a few seconds
            </p>
          </>
        ) : (
          <div className="flex flex-col gap-10 items-center">
            <p className="text-sm font-medium">
              Thank you for submitting your information.
            </p>
            <div
              className="w-24 rounded-full aspect-square flex justify-center items-center"
              style={{ backgroundColor: "#D1FADF" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p className="text-sm text-primary">
              You can now safely close this window.
            </p>
          </div>
        )}
      </div>
    </VGridContainer>
  );
};

export default SubmissionConfirmation;
