import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ClientDetailsStatus } from "../../../common/client-details/client-details.enums";
import { setClientDetailsStatus } from "../../../common/client-details/client-details.thunks";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import { RootState } from "../../../common/store/store";
import VGridContainer from "../../../ui/grid-container/VGridContainer";
import { VInput } from "../../../ui/input/VInput";
import OnboardingFooter from "../components/OnboardingFooter";

interface BasicDetailsViewProps {
  onClick?: (values: BasicDetailsFormData) => void;
}

export interface BasicDetailsFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization: string;
  organizationWebsite: string;
  location: string;
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Please enter a valid phone number")
    .required("Phone number is required"),
  organization: Yup.string().required("Organization is required"),
  organizationWebsite: Yup.string()
    .matches(
      /^(?!https?:\/\/)[\w.-]+\.[a-z]{2,}$/i,
      "Please enter a valid website"
    )
    .required("Website is required"),
  location: Yup.string().required("Location is required"),
});

const BasicDetailsView: React.FC<BasicDetailsViewProps> = (
  props: BasicDetailsViewProps
) => {
  const dispatch = useAppDispatch();
  const basicDetails = useAppSelector(
    (s: RootState) => s.clientDetails.basicDetails
  );

  const initialValues: BasicDetailsFormData = {
    firstName: basicDetails?.formData.firstName ?? "",
    lastName: basicDetails?.formData.lastName ?? "",
    email: basicDetails?.formData.email ?? "",
    phoneNumber: basicDetails?.formData.phoneNumber ?? "",
    organization: basicDetails?.formData.organization ?? "",
    organizationWebsite:
      basicDetails?.formData.organizationWebsite.replace("https://", "") ?? "",
    location: basicDetails?.formData.location ?? "",
  };

  const handleBackClick = () => {
    dispatch(setClientDetailsStatus(ClientDetailsStatus.Preparation));
  };

  const handleSubmit = (
    values: BasicDetailsFormData,
    actions: FormikHelpers<BasicDetailsFormData>
  ) => {
    const fullWebsite = !values.organizationWebsite.startsWith("https://")
      ? `https://${values.organizationWebsite}`
      : values.organizationWebsite;
    const sanitizedValues = { ...values, organizationWebsite: fullWebsite };

    props.onClick?.(sanitizedValues);
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
              placeholder="Tim"
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
              placeholder="Apple"
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
              placeholder="timapple@gmail.com"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email ? errors.email : undefined}
            />
            <VInput
              label="Phone number (point of contact)"
              required
              value={values.phoneNumber}
              placeholder="xxx-xxx-xxxx"
              type="tel"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.phoneNumber && touched.phoneNumber
                  ? errors.phoneNumber
                  : undefined
              }
            />
            <VInput
              label="Organization"
              required
              placeholder="Apple Inc."
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
              placeholder="apple.com"
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
              placeholder="Cupertino, CA"
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

export default BasicDetailsView;
