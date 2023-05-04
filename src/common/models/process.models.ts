import { BasicDetailsFormData } from "../../features/onboarding-workflow/views/BasicDetailsView";
import { ContentSpecsFormData } from "../../features/onboarding-workflow/views/ContentSpecsView";
import { ProjectScopeFormData } from "../../features/onboarding-workflow/views/ProjectScopeView";
import { SocialMediaDetailsFormData } from "../../features/onboarding-workflow/views/SocialMediaView";

export type BasicDetailsState = {
  formData: BasicDetailsFormData;
};
export type SocialMediaDetailsState = {
  formData: SocialMediaDetailsFormData;
};
export type ProjectScopeState = {
  formData: ProjectScopeFormData;
};
export type ContentSpecsState = {
  formData: ContentSpecsFormData;
};
export type PaymentDetailsState = {};
