import {
  Client,
  ClientDetails,
  LinkVerificationStatus,
  OnboardingLink,
  OnboardingLinkRequest,
} from "../../common/client-details/client-details.models";
import { BasicDetailsFormData } from "../../features/onboarding-workflow/views/BasicDetailsView";
import { ContentSpecsFormData } from "../../features/onboarding-workflow/views/ContentSpecsView";
import { ProjectScopeFormData } from "../../features/onboarding-workflow/views/ProjectScopeView";
import { SocialMediaDetailsFormData } from "../../features/onboarding-workflow/views/SocialMediaView";

export const mockClient: Client = {
  id: 1,
  name: 'John Doe',
  primaryEmail: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '123-456-7890',
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: true,
  tenantId: 1,
};

export const mockClientDetails: ClientDetails = {
  clientId: 1,
  organizationName: "Mock Organization",
  organizationWebsite: "www.mock-organization.com",
  location: "Mock City, Mock Country",
  facebook: "www.facebook.com/mock",
  twitter: "www.twitter.com/mock",
  linkedin: "www.linkedin.com/mock",
  instagram: "www.instagram.com/mock",
  pinterest: "www.pinterest.com/mock",
  tiktok: "www.tiktok.com/@mock",
  monthlyBudget: 10000,
  revenue: 100000,
  projectScope: "Mock project scope",
  shortTermGoals: "Mock short term goals",
  targetAudience: "Mock target audience",
  brandGuidelines: "Mock brand guidelines",
  communicationPref: "Mock communication preference",
  targetLocations: "Mock target location",
  topCompetitors: "Mock top competitor",
  link_id: "mock-link-id",
};

export const mockOnboardingLinkRequest: OnboardingLinkRequest = {
  link: "mock-link",
};

export const mockOnboardingLink: OnboardingLink = {
  id: 1,
  link: "mock-link",
  createdAt: new Date(),
  updatedAt: new Date(),
  expiresAt: new Date(),
  isActive: true,
  tenantId: 1,
};

export const mockBasicDetailsInitialValues: BasicDetailsFormData = {
  firstName: "Mock",
  lastName: "User",
  email: "mockuser@example.com",
  phoneNumber: "+1234567890",
  organization: "Mock Organization",
  organizationWebsite: "www.mock-organization.com",
  location: "Mock City, Mock Country",
};

export const mockSocialMediaInitialValues: SocialMediaDetailsFormData = {
  facebookUrl: "www.facebook.com/mock",
  twitterUrl: "www.twitter.com/mock",
  linkedinUrl: "www.linkedin.com/mock",
  instagramUrl: "www.instagram.com/mock",
  pinterestUrl: "www.pinterest.com/mock",
  tiktokUrl: "www.tiktok.com/@mock",
};

export const mockProjectScopeInitialValues: ProjectScopeFormData = {
  projectScope: "Mock project scope",
  shortTermGoals: "Mock short term goals",
  targetAudience: "Mock target audience",
  targetLocations: "Mock target location",
  topCompetitors: "Mock top competitor",
};

export const mockContentSpecsInitialValues: ContentSpecsFormData = {
  monthlyBudget: 10000,
  revenue: 100000,
  brandGuidelines: "Mock brand guidelines",
  communicationPref: "Mock communication preference",
  additionalComments: "Mock additional comments",
  hasUploadedFiles: false,
};

export const mockLinkVerificationStatus = LinkVerificationStatus.SUCCESS;
