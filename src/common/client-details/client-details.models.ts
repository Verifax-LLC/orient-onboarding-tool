import { BasicDetailsFormData } from "../../features/onboarding-workflow/views/BasicDetailsView";
import { ContentSpecsFormData } from "../../features/onboarding-workflow/views/ContentSpecsView";
import { ProjectScopeFormData } from "../../features/onboarding-workflow/views/ProjectScopeView";
import { SocialMediaDetailsFormData } from "../../features/onboarding-workflow/views/SocialMediaView";
import { ClientDocument } from "../models/document.models";
import { Tenant } from "../tenant-details/tenant-details.models";

export interface Client {
  id?: number;
  name: string;
  primaryEmail: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  tenantId: number;

  // Navigation properties
  tenant?: Tenant;
  clientDetails?: ClientDetails[];
}

export interface ClientDetails {
  id?: number;
  clientId: number;
  organizationName: string;
  organizationWebsite: string;
  location: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  pinterest: string;
  tiktok: string;
  monthlyBudget: number;
  revenue: number;
  projectScope: string;
  shortTermGoals: string;
  targetAudience: string;
  brandGuidelines: string;
  communicationPref: string;
  targetLocations: string;
  topCompetitors: string;
  additionalInfo: string;
  link_id: string;

  // Navigation properties
  documents?: ClientDocument[];
  client?: Client;
}

export interface OnboardingLinkRequest {
  link: string;
}

export interface OnboardingLink {
  id: number;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
  isActive: boolean;
  tenantId: number;
}

export const basicDetailsInitialValues: BasicDetailsFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  organization: "",
  organizationWebsite: "",
  location: "",
};

export const socialMediaInitialValues: SocialMediaDetailsFormData = {
  facebookUrl: "",
  twitterUrl: "",
  linkedinUrl: "",
  instagramUrl: "",
  pinterestUrl: "",
  tiktokUrl: "",
};

//project scope initial values
export const projectScopeInitialValues: ProjectScopeFormData = {
  projectScope: "",
  shortTermGoals: "",
  targetAudience: "",
  targetLocations: "",
  topCompetitors: "",
};

//content specs initial values
export const contentSpecsInitialValues: ContentSpecsFormData = {
  monthlyBudget: 0,
  revenue: 0,
  brandGuidelines: "",
  communicationPref: "",
  additionalInfo: "",
  hasUploadedFiles: false,
};

export enum LinkVerificationStatus {
  PENDING = "PENDING",
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
}
