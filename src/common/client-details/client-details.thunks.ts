import { BasicDetailsFormData } from "../../features/onboarding-workflow/views/BasicDetailsView";
import { ContentSpecsFormData } from "../../features/onboarding-workflow/views/ContentSpecsView";
import { SocialMediaDetailsFormData } from "../../features/onboarding-workflow/views/SocialMediaView";
import { Client, ClientDetails } from "../models/client-details.models";
import { ProcessStatus } from "../models/process.enums";
import apiClient from "../site/axios-instance";
import { AppDispatch, AppThunk } from "../store/store";
import { ClientService } from "./client-details.service";
import { clientDetailsSlice } from "./client-details.slice";

const clientService = new ClientService(apiClient);

export const setClientDetailsStatus =
  (status: ProcessStatus): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(clientDetailsSlice.actions.setStatus(status));
  };

//set basic details
export const setBasicDetails =
  (basicDetails: BasicDetailsFormData): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(
      clientDetailsSlice.actions.setBasicDetails({ formData: basicDetails })
    );
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
    dispatch(setClientDetailsStatus(ProcessStatus.ContentSpecs));
  };

//set hasuploadedfiles
export const setHasUploadedFiles =
  (hasUploadedFiles: boolean): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(clientDetailsSlice.actions.setHasUploadedFiles(hasUploadedFiles));
  };

//set content specs
export const setContentSpecs =
  (contentSpecs: ContentSpecsFormData): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(
      clientDetailsSlice.actions.setContentSpecs({
        formData: contentSpecs,
      })
    );
    dispatch(setClientDetailsStatus(ProcessStatus.PaymentDetails));
  };

//set file dialog open
export const setFileUploadDialogOpen =
  (open: boolean): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(clientDetailsSlice.actions.setFileUploadDialogOpen(open));
  };

//set payment details
// export const setPaymentDetails =
//   (paymentDetails: BasicDetailsState): AppThunk =>
//   async (dispatch: AppDispatch) => {
//     dispatch(clientDetailsSlice.actions.setPaymentDetails(paymentDetails));
//   };

export const createClient =
  (client: Client): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const clientResponse: Client = await clientService.createClient(client);
      dispatch(clientDetailsSlice.actions.setClient(clientResponse));
    } catch (error) {
      console.log(error);
    }
  };

//create client details
export const createClientDetails =
  (clientDetails: ClientDetails): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      const clientDetailsResponse: ClientDetails =
        await clientService.createClientDetails(clientDetails);
      dispatch(
        clientDetailsSlice.actions.setCreatedClientDetails(
          clientDetailsResponse
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
