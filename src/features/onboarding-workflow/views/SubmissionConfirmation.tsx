import { Triangle } from "react-loader-spinner";
import { useAppDispatch } from "../../../common/store/hooks";
import VGridContainer from "../../../ui/grid-container/VGridContainer";

const SubmissionConfirmation = () => {
  const dispatch = useAppDispatch();
  //   const isSubmitting = useAppSelector(
  //     (s: RootState) => s.clientDetails.isSubmitting
  //   );
  const isSubmitting = true;
  return (
    <VGridContainer>
      <div className="mx-auto">
        <p className="text-3xl font-medium mb-10">
          {isSubmitting ? "Submitting data..." : "Submission complete!"}
        </p>
        {isSubmitting ? (
          <Triangle
            height="240"
            width="240"
            color="#7F56D9"
            ariaLabel="triangle-loading"
            visible={isSubmitting}
          />
        ) : (
          <p className="text-sm font-medium">
            Thank you for submitting your information.
          </p>
        )}
      </div>
    </VGridContainer>
  );
};

export default SubmissionConfirmation;
