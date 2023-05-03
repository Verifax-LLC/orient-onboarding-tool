import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client, ClientDetails } from "../models/client-details.models";
import { ProcessStatus } from "../models/process.enums";
import {
  BasicDetailsState,
  ContentSpecsState,
  PaymentDetailsState,
  SocialMediaDetailsState,
} from "../models/process.models";

// State
interface ClientDetailsState {
  currentClient?: Client;
  createdClientDetails?: ClientDetails;
  status: ProcessStatus;
  basicDetails?: BasicDetailsState;
  socialMediaDetails?: SocialMediaDetailsState;
  contentSpecs?: ContentSpecsState;
  paymentDetails?: PaymentDetailsState;
  fileUploadDialogOpen: boolean;
}

const initialState: ClientDetailsState = {
  currentClient: undefined,
  createdClientDetails: undefined,
  status: ProcessStatus.ContentSpecs,
  basicDetails: undefined,
  socialMediaDetails: undefined,
  contentSpecs: undefined,
  paymentDetails: undefined,
  fileUploadDialogOpen: false,
};

// Reducers
export const clientDetailsSlice = createSlice({
  name: "client-details",
  initialState: initialState,
  reducers: {
    setClient: (state: ClientDetailsState, action: PayloadAction<Client>) => {
      state.currentClient = action.payload;
    },
    setCreatedClientDetails: (
      state: ClientDetailsState,
      action: PayloadAction<ClientDetails>
    ) => {
      state.createdClientDetails = action.payload;
    },
    setStatus: (
      state: ClientDetailsState,
      action: PayloadAction<ProcessStatus>
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
    setContentSpecs: (
      state: ClientDetailsState,
      action: PayloadAction<ContentSpecsState>
    ) => {
      state.contentSpecs = action.payload;
    },
    setPaymentDetails: (
      state: ClientDetailsState,
      action: PayloadAction<PaymentDetailsState>
    ) => {
      state.paymentDetails = action.payload;
    },
    setFileUploadDialogOpen: (
      state: ClientDetailsState,
      action: PayloadAction<boolean>
    ) => {
      state.fileUploadDialogOpen = action.payload;
    },
    setHasUploadedFiles: (
      state: ClientDetailsState,
      action: PayloadAction<boolean>
    ) => {
      state.contentSpecs = { formData: { hasUploadedFiles: action.payload } };
    },
  },
});
