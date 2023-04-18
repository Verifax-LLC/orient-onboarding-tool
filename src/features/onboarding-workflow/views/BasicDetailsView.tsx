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
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  organization: Yup.string().required("Organization is required"),
});

const initialValues: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
};

const BasicDetailsView = () => {
  const handleSubmit = (values: FormData, actions: FormikHelpers<FormData>) => {
    // Do something with the form values, like sending it to a server or displaying them
    console.log(values);

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
        {({ values, errors, touched, handleChange, handleBlur }) => (
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
            <OnboardingFooter text={"Continue"} />
          </Form>
        )}
      </Formik>
    </VGridContainer>
  );
};

export default BasicDetailsView;
