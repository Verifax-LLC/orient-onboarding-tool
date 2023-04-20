import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientDetailsStatus } from "./client-details.enums";
import {
  BasicDetailsState,
  ContentPreferencesState,
  PaymentDetailsState,
  SocialMediaDetailsState,
} from "./client-details.models";

// State
interface ClientDetailsState {
  status: ClientDetailsStatus;
  basicDetails?: BasicDetailsState;
  socialMediaDetails?: SocialMediaDetailsState;
  paymentDetails?: PaymentDetailsState;
  contentPreferences?: ContentPreferencesState;
}

const initialState: ClientDetailsState = {
  status: ClientDetailsStatus.Preparation,
  basicDetails: undefined,
  socialMediaDetails: undefined,
  paymentDetails: undefined,
  contentPreferences: undefined,
};

// Reducers
export const clientDetailsSlice = createSlice({
  name: "client-details",
  initialState: initialState,
  reducers: {
    setStatus: (
      state: ClientDetailsState,
      action: PayloadAction<ClientDetailsStatus>
    ) => {
      state.status = action.payload;
    },
    setBasicDetails: (
      state: ClientDetailsState,
      action: PayloadAction<BasicDetailsState>
    ) => {
      state.basicDetails = action.payload;
    },
    setSocialMediaDetails: (
      state: ClientDetailsState,
      action: PayloadAction<SocialMediaDetailsState>
    ) => {
      state.socialMediaDetails = action.payload;
    },
    setPaymentDetails: (
      state: ClientDetailsState,
      action: PayloadAction<PaymentDetailsState>
    ) => {
      state.paymentDetails = action.payload;
    },
    setContentPreferences: (
      state: ClientDetailsState,
      action: PayloadAction<ContentPreferencesState>
    ) => {
      state.contentPreferences = action.payload;
    },
  },
});
