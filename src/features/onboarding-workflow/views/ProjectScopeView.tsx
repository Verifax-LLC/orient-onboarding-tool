import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import { setClientDetailsStatus } from "../../../common/client-details/client-details.thunks";
import { ProcessStatus } from "../../../common/models/process.enums";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import { RootState } from "../../../common/store/store";
import VGridContainer from "../../../ui/grid-container/VGridContainer";
import { VInput } from "../../../ui/input/VInput";
import OnboardingFooter from "../components/OnboardingFooter";

interface ProjectScopeViewProps {
  onClick?: (values: ProjectScopeFormData) => void;
}

export interface ProjectScopeFormData {
  projectScope?: string;
  shortTermGoals?: string;
  targetAudience?: string;
  targetLocations?: string;
  topCompetitors?: string;
}

const validationSchema = Yup.object().shape({
  projectScope: Yup.string().required("Project scope is required"),
  shortTermGoals: Yup.string().required("Short term goals are required"),
  targetAudience: Yup.string().required("Target audience is required"),
  targetLocations: Yup.string().required("Target locations are required"),
  topCompetitors: Yup.string().required("Top competitors are required"),
});

const ProjectScopeView: React.FC<ProjectScopeViewProps> = (
  props: ProjectScopeViewProps
) => {
  const dispatch = useAppDispatch();
  const projectScopeValues = useAppSelector(
    (s: RootState) => s.clientDetails.projectScope?.formData
  );

  const initialValues: ProjectScopeFormData = {};

  const handleBackClick = () => {
    dispatch(setClientDetailsStatus(ProcessStatus.SocialMediaDetails));
  };
  const handleSubmit = (
    values: ProjectScopeFormData,
    actions: FormikHelpers<ProjectScopeFormData>
  ) => {
    props.onClick?.({ ...projectScopeValues, ...values });
    // If the submission is successful, reset the form
    actions.resetForm();
  };

  return (
    <VGridContainer>
      <p className="text-3xl font-medium">Project scope</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className="space-y-4 max-w-sm mx-auto">
            <VInput
              type="text"
              name="projectScope"
              label="Project scope"
              placeholder="Please enter a project scope"
              required
              value={values.projectScope}
              defaultValue={initialValues.projectScope}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.projectScope && touched.projectScope
                  ? errors.projectScope
                  : undefined
              }
            />
            <VInput
              label="Short term goals"
              type="text"
              name="shortTermGoals"
              required
              placeholder="Please enter short term goals"
              value={values.shortTermGoals}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.shortTermGoals && touched.shortTermGoals
                  ? errors.shortTermGoals
                  : undefined
              }
            />
            <VInput
              label="Target audience"
              type="text"
              name="targetAudience"
              required
              placeholder="Please enter your target audience"
              value={values.targetAudience}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.targetAudience && touched.targetAudience
                  ? errors.targetAudience
                  : undefined
              }
            />
            <VInput
              label="Target locations (city, state, country, etc.)"
              type="text"
              name="targetLocations"
              required
              placeholder="Please enter your target locations"
              value={values.targetLocations}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.targetLocations && touched.targetLocations
                  ? errors.targetLocations
                  : undefined
              }
            />
            <VInput
              label="Top competitors"
              type="text"
              name="topCompetitors"
              required
              placeholder="Please enter your top competitors"
              value={values.topCompetitors}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.topCompetitors && touched.topCompetitors
                  ? errors.topCompetitors
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

export default ProjectScopeView;
