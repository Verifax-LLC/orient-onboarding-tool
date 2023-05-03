import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import {
  setClientDetailsStatus,
  setFileUploadDialogOpen,
} from "../../../common/client-details/client-details.thunks";
import { ProcessStatus } from "../../../common/models/process.enums";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import { RootState } from "../../../common/store/store";
import VGridContainer from "../../../ui/grid-container/VGridContainer";
import VCurrencyInput from "../../../ui/input/VCurrencyInput";
import { VInput } from "../../../ui/input/VInput";
import { VSelect } from "../../../ui/select/VSelect";
import FileUploadZone from "../components/FileUploadZone";
import OnboardingFooter from "../components/OnboardingFooter";

interface ContentSpecsViewProps {
  onClick?: (values: ContentSpecsFormData) => void;
}

export type PostingInterval = "3d" | "7d" | "14d" | "30d";

export interface ContentSpecsFormData {
  postingInterval?: PostingInterval;
  monthlyBudget?: number;
  additionalComments?: string;
  hasUploadedFiles?: boolean;
}

const validationSchema = Yup.object().shape({
  postingInterval: Yup.string().required("Posting interval is required"),
  monthlyBudget: Yup.number()
    .min(1, "Monthly budget must be at least 1")
    .required("Monthly budget is required"),
  files: Yup.array().of(Yup.mixed().required("File is required")),
  additionalComments: Yup.string(),
});

const postingIntervalOptions: { value: PostingInterval; label: string }[] = [
  { value: "3d", label: "3 days" },
  { value: "7d", label: "7 days" },
  { value: "14d", label: "14 days" },
  { value: "30d", label: "30 days" },
];

const ContentSpecsView: React.FC<ContentSpecsViewProps> = (
  props: ContentSpecsViewProps
) => {
  const dispatch = useAppDispatch();
  const contentSpecsValues = useAppSelector(
    (s: RootState) => s.clientDetails.contentSpecs?.formData
  );

  const initialValues: ContentSpecsFormData = {
    postingInterval: contentSpecsValues?.postingInterval ?? "3d",
    monthlyBudget: contentSpecsValues?.monthlyBudget ?? 0,
    additionalComments: contentSpecsValues?.additionalComments ?? "",
  };

  const handleBackClick = () => {
    dispatch(setClientDetailsStatus(ProcessStatus.SocialMediaDetails));
  };
  const handleSubmit = (
    values: ContentSpecsFormData,
    actions: FormikHelpers<ContentSpecsFormData>
  ) => {
    props.onClick?.({ ...contentSpecsValues, ...values });
    // If the submission is successful, reset the form
    actions.resetForm();
  };

  return (
    <VGridContainer>
      <p className="text-3xl font-medium">Content Specifications</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form className="space-y-4 max-w-sm mx-auto">
            <VSelect
              label="Posting Interval"
              required
              name="postingInterval"
              value={values.postingInterval}
              onChange={(e) => setFieldValue("postingInterval", e.target.value)}
              error={
                errors.postingInterval && touched.postingInterval
                  ? errors.postingInterval
                  : undefined
              }
              options={postingIntervalOptions}
            />
            <VCurrencyInput
              id="input-example"
              name="input-name"
              label="Monthly budget (estimated)"
              placeholder="Please enter a number"
              required
              value={values.monthlyBudget ?? 0}
              prefix="$"
              defaultValue={initialValues.monthlyBudget ?? 0}
              decimalsLimit={2}
              onValueChange={(value, name) =>
                setFieldValue("monthlyBudget", value)
              }
              onBlur={handleBlur}
              error={
                errors.monthlyBudget && touched.monthlyBudget
                  ? errors.monthlyBudget
                  : undefined
              }
            />
            {!contentSpecsValues?.hasUploadedFiles ? (
              <FileUploadZone
                id={"content-specs-file-upload"}
                label="Attach files"
                icon={
                  <img
                    src="/file-upload-icon.png"
                    alt="File upload icon"
                    color="black"
                  />
                }
                name={"fileUpload"}
                required={false}
                onClick={() => dispatch(setFileUploadDialogOpen(true))}
              />
            ) : (
              <>
                <div
                  className="flex flex-col items-center justify-center p-6 rounded-full w-20 mx-auto"
                  style={{ backgroundColor: "#D1FADF" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="text-center text-primary">
                  Files uploaded successfully!
                </p>
              </>
            )}
            <VInput
              label="Additional Comments"
              type="text"
              name="additionalComments"
              placeholder="Any additional comments..."
              value={values.additionalComments}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.additionalComments && touched.additionalComments
                  ? errors.additionalComments
                  : undefined
              }
            />
            <OnboardingFooter
              type="submit"
              text={"Continue"}
              onBackClick={handleBackClick}
            />
          </Form>
        )}
      </Formik>
    </VGridContainer>
  );
};

export default ContentSpecsView;
