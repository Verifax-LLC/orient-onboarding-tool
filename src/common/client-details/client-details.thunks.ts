import { BasicDetailsFormData } from "../../features/onboarding-workflow/views/BasicDetailsView";
import { ContentSpecsFormData } from "../../features/onboarding-workflow/views/ContentSpecsView";
import { SocialMediaDetailsFormData } from "../../features/onboarding-workflow/views/SocialMediaView";
import { AppDispatch, AppThunk } from "../store/store";
import { ClientDetailsStatus } from "./client-details.enums";
import { Client } from "./client-details.models";
import { clientDetailsSlice } from "./client-details.slice";

//set client
export const setClient =
  (client: Client): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(clientDetailsSlice.actions.setClient(client));
  };

export const setClientDetailsStatus =
  (status: ClientDetailsStatus): AppThunk =>
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
    dispatch(setClientDetailsStatus(ClientDetailsStatus.SocialMediaDetails));
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
    dispatch(setClientDetailsStatus(ClientDetailsStatus.ContentSpecs));
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
    dispatch(setClientDetailsStatus(ClientDetailsStatus.PaymentDetails));
  };

//set payment details
// export const setPaymentDetails =
//   (paymentDetails: BasicDetailsState): AppThunk =>
//   async (dispatch: AppDispatch) => {
//     dispatch(clientDetailsSlice.actions.setPaymentDetails(paymentDetails));
//   };
