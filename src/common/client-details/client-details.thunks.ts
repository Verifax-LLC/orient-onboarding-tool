import { BasicDetailsFormData } from "../../features/onboarding-workflow/views/BasicDetailsView";
import { ContentSpecsFormData } from "../../features/onboarding-workflow/views/ContentSpecsView";
import { ProjectScopeFormData } from "../../features/onboarding-workflow/views/ProjectScopeView";
import { SocialMediaDetailsFormData } from "../../features/onboarding-workflow/views/SocialMediaView";
import { ProcessStatus } from "../models/process.enums";
import apiClient from "../site/axios-instance";
import { setNetworkError } from "../site/global.thunks";
import { AppDispatch, AppThunk, RootState } from "../store/store";
import { setTenant } from "../tenant-details/tenant-details.thunks";
import {
  Client,
  ClientDetails,
  LinkVerificationStatus,
  OnboardingLinkRequest,
} from "./client-details.models";
import { ClientService } from "./client-details.service";
import { clientDetailsSlice } from "./client-details.slice";

const clientService = new ClientService(apiClient);

export const setClientDetailsStatus =
  (status: ProcessStatus): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(clientDetailsSlice.actions.setStatus(status));
  };

//set link verification state
export const setLinkVerificationState =
  (status: LinkVerificationStatus): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(clientDetailsSlice.actions.setLinkVerificationState(status));
  };

export const fetchOnboardingLink =
  (onboardingLinkRequest: OnboardingLinkRequest): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const onboardingLink = await clientService.getOnboardingLink({
        link: onboardingLinkRequest.link,
      });
      if (onboardingLink) {
        dispatch(
          clientDetailsSlice.actions.setLinkVerificationState(
            LinkVerificationStatus.SUCCESS
          )
        );
        dispatch(clientDetailsSlice.actions.setOnboardingLink(onboardingLink));
        dispatch(setTenant(onboardingLink.link));
      }
    } catch (error) {
      console.error(error);
      dispatch(
        clientDetailsSlice.actions.setLinkVerificationState(
          LinkVerificationStatus.FAILED
        )
      );
    }
  };

//set basic details
export const setBasicDetails =
  (basicDetails: BasicDetailsFormData): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(
      clientDetailsSlice.actions.setBasicDetails({ formData: basicDetails })
    );
    const tenant = getState().tenantDetails.tenant;
    const client: Client = {
      firstName: basicDetails.firstName,
      lastName: basicDetails.lastName,
      phone: basicDetails.phoneNumber,
      primaryEmail: basicDetails.email,
      name: basicDetails.organization,
      tenantId: tenant.id,
    };
    dispatch(createClient(client));
    dispatch(setClientDetailsStatus(ProcessStatus.SocialMediaDetails));
  };

//set social media details
export const setSocialMediaDetails =
  (socialMediaDetails: SocialMediaDetailsFormData): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(
      clientDetailsSlice.actions.setSocialMediaDetails({
        formData: socialMediaDetails,
      })
    );
    dispatch(setClientDetailsStatus(ProcessStatus.ProjectScope));
  };

//set hasuploadedfiles
export const setHasUploadedFiles =
  (hasUploadedFiles: boolean): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(clientDetailsSlice.actions.setHasUploadedFiles(hasUploadedFiles));
  };

//set project scope
export const setProjectScope =
  (projectScope: ProjectScopeFormData): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(
      clientDetailsSlice.actions.setProjectScope({
        formData: projectScope,
      })
    );
    dispatch(setClientDetailsStatus(ProcessStatus.ContentSpecs));
  };

//set content specs
export const setContentSpecs =
  (contentSpecs: ContentSpecsFormData, submit?: boolean): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(
      clientDetailsSlice.actions.setContentSpecs({
        formData: contentSpecs,
      })
    );
    if (submit) dispatch(setClientDetailsStatus(ProcessStatus.Review));
  };

//set file dialog open
export const setFileUploadDialogOpen =
  (open: boolean): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(clientDetailsSlice.actions.setFileUploadDialogOpen(open));
  };

export const createClient =
  (client: Client): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const clientResponse: Client = await clientService.createClient(client);
      if (clientResponse.id) {
        dispatch(clientDetailsSlice.actions.setClient(clientResponse));
      } else {
        setNetworkError(true, new Error("Client not created"));
      }
    } catch (error) {
      console.error(error);
    }
  };

//create client details
export const createClientDetails =
  (clientDetails: ClientDetails): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      await clientService
        .createClientDetails(clientDetails)
        .then(() => {
          dispatch(setClientDetailsStatus(ProcessStatus.Complete));
        })
        .catch((error: Error) => {
          setNetworkError(true, error);
        });
    } catch (error) {
      setNetworkError(true, new Error(error as string));
    }
  };

export const submitClientDetails =
  (link: string): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const state = getState();
      if (state.clientDetails.currentClient.id) {
        const clientDetails: ClientDetails = {
          clientId: state.clientDetails.currentClient.id,
          organizationName:
            state.clientDetails.basicDetails.formData.organization,
          organizationWebsite:
            state.clientDetails.basicDetails.formData.organizationWebsite,
          location: state.clientDetails.basicDetails.formData.location,
          facebook: state.clientDetails.socialMediaDetails.formData.facebookUrl,
          twitter: state.clientDetails.socialMediaDetails.formData.twitterUrl,
          linkedin: state.clientDetails.socialMediaDetails.formData.linkedinUrl,
          instagram:
            state.clientDetails.socialMediaDetails.formData.instagramUrl,
          pinterest:
            state.clientDetails.socialMediaDetails.formData.pinterestUrl,
          tiktok: state.clientDetails.socialMediaDetails.formData.tiktokUrl,
          monthlyBudget:
            state.clientDetails.contentSpecs.formData.monthlyBudget,
          revenue: state.clientDetails.contentSpecs.formData.revenue,
          projectScope: state.clientDetails.projectScope.formData.projectScope,
          shortTermGoals:
            state.clientDetails.projectScope.formData.shortTermGoals,
          targetAudience:
            state.clientDetails.projectScope.formData.targetAudience,
          brandGuidelines:
            state.clientDetails.contentSpecs.formData.brandGuidelines,
          communicationPref:
            state.clientDetails.contentSpecs.formData.communicationPref,
          targetLocations:
            state.clientDetails.projectScope.formData.targetLocations,
          topCompetitors:
            state.clientDetails.projectScope.formData.topCompetitors,
          link_id: link,
        };
        dispatch(createClientDetails(clientDetails));
      }
    } catch (error) {
      console.error(error);
    }
  };
