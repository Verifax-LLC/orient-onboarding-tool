import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ClientDetailsStatus } from "../../../common/client-details/client-details.enums";
import { setClientDetailsStatus } from "../../../common/client-details/client-details.thunks";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import { RootState } from "../../../common/store/store";
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
  facebookUrl: Yup.string().matches(
    /^(?!https?:\/\/)[\w.-]+\.[a-z]{2,}$/i,
    "Please enter a valid website"
  ),
  linkedinUrl: Yup.string().matches(
    /^(?!https?:\/\/)[\w.-]+\.[a-z]{2,}$/i,
    "Please enter a valid website"
  ),
  instagramUrl: Yup.string().matches(
    /^(?!https?:\/\/)[\w.-]+\.[a-z]{2,}$/i,
    "Please enter a valid website"
  ),
  twitterUrl: Yup.string().matches(
    /^(?!https?:\/\/)[\w.-]+\.[a-z]{2,}$/i,
    "Please enter a valid website"
  ),
  pinterestUrl: Yup.string().matches(
    /^(?!https?:\/\/)[\w.-]+\.[a-z]{2,}$/i,
    "Please enter a valid website"
  ),
  tiktokUrl: Yup.string().matches(
    /^(?!https?:\/\/)[\w.-]+\.[a-z]{2,}$/i,
    "Please enter a valid website"
  ),
});

const SocialMediaView: React.FC<SocialMediaViewProps> = (
  props: SocialMediaViewProps
) => {
  const dispatch = useAppDispatch();
  const socialMediaDetails = useAppSelector(
    (s: RootState) => s.clientDetails.socialMediaDetails
  );

  const initialValues: SocialMediaDetailsFormData = {
    facebookUrl: socialMediaDetails?.formData?.facebookUrl || "",
    linkedinUrl: socialMediaDetails?.formData?.linkedinUrl || "",
    instagramUrl: socialMediaDetails?.formData?.instagramUrl || "",
    twitterUrl: socialMediaDetails?.formData?.twitterUrl || "",
    pinterestUrl: socialMediaDetails?.formData?.pinterestUrl || "",
    tiktokUrl: socialMediaDetails?.formData?.tiktokUrl || "",
  };

  const handleBackClick = () => {
    dispatch(setClientDetailsStatus(ClientDetailsStatus.BasicDetails));
  };
  const handleSubmit = (
    values: SocialMediaDetailsFormData,
    actions: FormikHelpers<SocialMediaDetailsFormData>
  ) => {
    const updatedFormData = { ...values };

    for (const key in updatedFormData) {
      if (
        updatedFormData.hasOwnProperty(key) &&
        !updatedFormData[key as keyof SocialMediaDetailsFormData].startsWith(
          "https://"
        ) &&
        updatedFormData[key as keyof SocialMediaDetailsFormData] !== ""
      ) {
        updatedFormData[key as keyof SocialMediaDetailsFormData] =
          "https://" + updatedFormData[key as keyof SocialMediaDetailsFormData];
      }
    }
    props.onClick?.(updatedFormData);
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
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className="space-y-4 max-w-sm mx-auto">
            <VInput
              label="Facebook URL"
              placeholder="www.facebook.com/your-page"
              type="text"
              name="facebookUrl"
              adornment="https://"
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
              placeholder="www.linkedin.com/in/your-profile"
              type="text"
              name="linkedinUrl"
              adornment="https://"
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
              placeholder="www.instagram.com/your-page"
              type="text"
              name="instagramUrl"
              adornment="https://"
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
              placeholder="twitter.com/your-handle"
              type="text"
              name="twitterUrl"
              adornment="https://"
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
              placeholder="www.pinterest.com/your-page"
              type="text"
              name="pinterestUrl"
              adornment="https://"
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
              placeholder="www.tiktok.com/@your-handle"
              type="text"
              name="tiktokUrl"
              adornment="https://"
              value={values.tiktokUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.tiktokUrl && touched.tiktokUrl
                  ? errors.tiktokUrl
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

export default SocialMediaView;
