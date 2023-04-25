import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import { ClientDetailsStatus } from "../../../common/client-details/client-details.enums";
import { setClientDetailsStatus } from "../../../common/client-details/client-details.thunks";
import { useAppDispatch } from "../../../common/store/hooks";
import VGridContainer from "../../../ui/grid-container/VGridContainer";
import VCurrencyInput from "../../../ui/input/VCurrencyInput";
import { VInput } from "../../../ui/input/VInput";
import { VSelect } from "../../../ui/select/VSelect";
import FileUpload from "../components/FileUpload";
import OnboardingFooter from "../components/OnboardingFooter";

interface ContentSpecsViewProps {
  onClick?: (values: ContentSpecsFormData) => void;
}

export type PostingInterval = "3d" | "7d" | "14d" | "30d";

export interface ContentSpecsFormData {
  postingInterval: PostingInterval;
  monthlyBudget: number;
  files: File[];
  additionalComments: string;
}

const validationSchema = Yup.object().shape({
  postingInterval: Yup.string().required("Posting interval is required"),
  monthlyBudget: Yup.number()
    .min(1, "Monthly budget must be at least 1")
    .required("Monthly budget is required"),
  files: Yup.array().of(Yup.mixed().required("File is required")),
  additionalComments: Yup.string(),
});

const initialValues: ContentSpecsFormData = {
  postingInterval: "3d",
  monthlyBudget: 0,
  files: [],
  additionalComments: "",
};

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

  const handleBackClick = () => {
    dispatch(setClientDetailsStatus(ClientDetailsStatus.BasicDetails));
  };
  const [openFileUpload, setOpenFileUpload] = React.useState<boolean>(false);
  const handleSubmit = (
    values: ContentSpecsFormData,
    actions: FormikHelpers<ContentSpecsFormData>
  ) => {
    props.onClick?.(values);
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
              label="Monthly budget"
              placeholder="Please enter a number"
              required
              value={values.monthlyBudget}
              prefix="$"
              defaultValue={initialValues.monthlyBudget}
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
            {/* <VInput
              label="Attach files"
              type="text"
              name="files"
              placeholder="example-file.pdf"
              value={values.files}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.files && touched.files ? errors.files : undefined}
            /> */}
            <FileUpload
              id={""}
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
              onClick={() => setOpenFileUpload(true)}
            />
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
