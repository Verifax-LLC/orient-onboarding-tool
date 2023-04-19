import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import VGridContainer from "../../../ui/grid-container/VGridContainer";
import { VInput } from "../../../ui/input/VInput";
import OnboardingFooter from "../components/OnboardingFooter";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  organizationWebsite: string;
  location: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  organization: Yup.string().required("Organization is required"),
  organizationWebsite: Yup.string()
    .matches(
      /^(?!https?:\/\/)[\w.-]+\.[a-z]{2,}$/i,
      "Please enter a valid website"
    )
    .required("Website is required"),
  location: Yup.string().required("Location is required"),
});

const initialValues: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  organizationWebsite: "",
  location: "",
};

const BasicDetailsView = () => {
  const handleSubmit = (values: FormData, actions: FormikHelpers<FormData>) => {
    const fullWebsite = `https://${values.organizationWebsite}`;
    const sanitizedValues = { ...values, organizationWebsite: fullWebsite };
    console.log(sanitizedValues);
    // If the submission is successful, reset the form
    actions.resetForm();
  };

  return (
    <VGridContainer>
      <p className=" text-3xl font-medium">Basic details</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, dirty }) => (
          <Form className="space-y-4 max-w-sm mx-auto">
            <VInput
              label="First name (point of contact)"
              required
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.firstName && touched.firstName
                  ? errors.firstName
                  : undefined
              }
            />
            <VInput
              label="Last name (point of contact)"
              required
              type="text"
              value={values.lastName}
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.lastName && touched.lastName
                  ? errors.lastName
                  : undefined
              }
            />
            <VInput
              label="Email (point of contact)"
              required
              value={values.email}
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email ? errors.email : undefined}
            />
            <VInput
              label="Organization"
              required
              value={values.organization}
              type="text"
              name="organization"
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.organization && touched.organization
                  ? errors.organization
                  : undefined
              }
            />
            <VInput
              label="Organization Website"
              required
              value={values.organizationWebsite}
              type="text"
              name="organizationWebsite"
              adornment="https://"
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.organizationWebsite && touched.organizationWebsite
                  ? errors.organizationWebsite
                  : undefined
              }
            />
            <VInput
              label="Location"
              required
              value={values.location}
              type="text"
              name="location"
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.location && touched.location
                  ? errors.location
                  : undefined
              }
            />
            <OnboardingFooter text={"Continue"} />
          </Form>
        )}
      </Formik>
    </VGridContainer>
  );
};

export default BasicDetailsView;
