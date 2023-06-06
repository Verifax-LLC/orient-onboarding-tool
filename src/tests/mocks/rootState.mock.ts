import { LinkVerificationStatus } from "../../common/client-details/client-details.models";
import { ProcessStatus } from "../../common/models/process.enums";
import { RootState } from "../../common/store/store";
import { mockBasicDetailsInitialValues, mockClient, mockClientDetails, mockContentSpecsInitialValues, mockOnboardingLink, mockProjectScopeInitialValues, mockSocialMediaInitialValues } from "./clientDetails.mock";


export const mockRootState: RootState = {
  clientDetails: {
      currentClient: mockClient,
      createdClientDetails: mockClientDetails,
      status: ProcessStatus.Preparation,
      linkVerificationState: LinkVerificationStatus.PENDING,
      onboardingLink: mockOnboardingLink,
      basicDetails: {
          formData: mockBasicDetailsInitialValues
      },
      socialMediaDetails: {
          formData: mockSocialMediaInitialValues
      },
      projectScope: {
          formData: mockProjectScopeInitialValues
      },
      contentSpecs: {
          formData: mockContentSpecsInitialValues
      },
      paymentDetails: {},
      fileUploadDialogOpen: false
  },
  tenantDetails: {
    tenant: {
        id: 1,
        name: 'Test Tenant',
    }
  },
};