import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import VGridContainer from "../../../ui/grid-container/VGridContainer";
import { VInput } from "../../../ui/input/VInput";
import OnboardingFooter from "../components/OnboardingFooter";

interface SocialMediaViewProps {
  onClick?: (values: SocialMediaDetailsFormData) => void;
}

export interface SocialMediaDetailsFormData {
  facebookUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  twitterUrl: string;
  pinterestUrl: string;
  tiktokUrl: string;
}

const validationSchema = Yup.object().shape({
  facebookUrl: Yup.string().url("Invalid Facebook URL"),
  linkedinUrl: Yup.string().url("Invalid LinkedIn URL"),
  instagramUrl: Yup.string().url("Invalid Instagram URL"),
  twitterUrl: Yup.string().url("Invalid Twitter URL"),
  pinterestUrl: Yup.string().url("Invalid Pinterest URL"),
  tiktokUrl: Yup.string().url("Invalid TikTok URL"),
});

const initialValues: SocialMediaDetailsFormData = {
  facebookUrl: "",
  linkedinUrl: "",
  instagramUrl: "",
  twitterUrl: "",
  pinterestUrl: "",
  tiktokUrl: "",
};

const SocialMediaView: React.FC<SocialMediaViewProps> = (
  props: SocialMediaViewProps
) => {
  const handleSubmit = (
    values: SocialMediaDetailsFormData,
    actions: FormikHelpers<SocialMediaDetailsFormData>
  ) => {
    console.log(values);
    // If the submission is successful, reset the form
    actions.resetForm();
  };

  return (
    <VGridContainer>
      <p className=" text-3xl font-medium">Social Media Details</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, dirty }) => (
          <Form className="space-y-4 max-w-sm mx-auto">
            <VInput
              label="Facebook URL"
              placeholder="https://www.facebook.com/your-page"
              type="url"
              name="facebookUrl"
              value={values.facebookUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.facebookUrl && touched.facebookUrl
                  ? errors.facebookUrl
                  : undefined
              }
            />
            <VInput
              label="LinkedIn URL"
              placeholder="https://www.linkedin.com/in/your-profile"
              type="url"
              name="linkedinUrl"
              value={values.linkedinUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.linkedinUrl && touched.linkedinUrl
                  ? errors.linkedinUrl
                  : undefined
              }
            />
            <VInput
              label="Instagram URL"
              placeholder="https://www.instagram.com/your-page"
              type="url"
              name="instagramUrl"
              value={values.instagramUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.instagramUrl && touched.instagramUrl
                  ? errors.instagramUrl
                  : undefined
              }
            />
            <VInput
              label="Twitter URL"
              placeholder="https://twitter.com/your-handle"
              type="url"
              name="twitterUrl"
              value={values.twitterUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.twitterUrl && touched.twitterUrl
                  ? errors.twitterUrl
                  : undefined
              }
            />
            <VInput
              label="Pinterest URL"
              placeholder="https://www.pinterest.com/your-page"
              type="url"
              name="pinterestUrl"
              value={values.pinterestUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.pinterestUrl && touched.pinterestUrl
                  ? errors.pinterestUrl
                  : undefined
              }
            />
            <VInput
              label="TikTok URL"
              placeholder="https://www.tiktok.com/@your-handle"
              type="url"
              name="tiktokUrl"
              value={values.tiktokUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.tiktokUrl && touched.tiktokUrl
                  ? errors.tiktokUrl
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

export default SocialMediaView;
