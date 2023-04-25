import { BasicDetailsFormData } from "../../features/onboarding-workflow/views/BasicDetailsView";
import { ContentSpecsFormData } from "../../features/onboarding-workflow/views/ContentSpecsView";
import { SocialMediaDetailsFormData } from "../../features/onboarding-workflow/views/SocialMediaView";

export type Client = {
  name: string;
  primaryEmail: string;
  tenantId: number;
  documents: ClientDocument[];
};

export type BasicDetailsState = {
  formData: BasicDetailsFormData;
};
export type SocialMediaDetailsState = {
  formData: SocialMediaDetailsFormData;
};
export type ContentSpecsState = {
  formData: ContentSpecsFormData;
};
export type PaymentDetailsState = {};
