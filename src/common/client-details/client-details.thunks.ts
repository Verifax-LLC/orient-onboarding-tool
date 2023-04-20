import { BasicDetailsFormData } from "../../features/onboarding-workflow/views/BasicDetailsView";
import { SocialMediaDetailsFormData } from "../../features/onboarding-workflow/views/SocialMediaView";
import { AppDispatch, AppThunk } from "../store/store";
import { ClientDetailsStatus } from "./client-details.enums";
import { clientDetailsSlice } from "./client-details.slice";

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
    dispatch(setClientDetailsStatus(ClientDetailsStatus.PaymentDetails));
  };

//set payment details
// export const setPaymentDetails =
//   (paymentDetails: BasicDetailsState): AppThunk =>
//   async (dispatch: AppDispatch) => {
//     dispatch(clientDetailsSlice.actions.setPaymentDetails(paymentDetails));
//   };

// //set content preferences
// export const setContentPreferences =
//   (contentPreferences: BasicDetailsState): AppThunk =>
//   async (dispatch: AppDispatch) => {
//     dispatch(
//       clientDetailsSlice.actions.setContentPreferences(contentPreferences)
//     );
//   };
