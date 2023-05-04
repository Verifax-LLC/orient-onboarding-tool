import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProcessStatus } from "../models/process.enums";
import {
  BasicDetailsState,
  ContentSpecsState,
  PaymentDetailsState,
  ProjectScopeState,
  SocialMediaDetailsState,
} from "../models/process.models";
import {
  basicDetailsInitialValues,
  Client,
  ClientDetails,
  contentSpecsInitialValues,
  projectScopeInitialValues,
  socialMediaInitialValues,
} from "./client-details.models";

// State
interface ClientDetailsState {
  currentClient: Client;
  createdClientDetails: ClientDetails;
  status: ProcessStatus;
  basicDetails: BasicDetailsState;
  socialMediaDetails: SocialMediaDetailsState;
  projectScope: ProjectScopeState;
  contentSpecs: ContentSpecsState;
  paymentDetails: PaymentDetailsState;
  fileUploadDialogOpen: boolean;
}

const initialState: ClientDetailsState = {
  currentClient: {} as Client,
  createdClientDetails: {} as ClientDetails,
  status: ProcessStatus.Preparation,
  basicDetails: { formData: basicDetailsInitialValues },
  socialMediaDetails: { formData: socialMediaInitialValues },
  projectScope: { formData: projectScopeInitialValues },
  contentSpecs: { formData: contentSpecsInitialValues },
  paymentDetails: {},
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
    setProjectScope: (
      state: ClientDetailsState,
      action: PayloadAction<ProjectScopeState>
    ) => {
      state.projectScope = action.payload;
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
      state.contentSpecs.formData.hasUploadedFiles = action.payload;
    },
  },
});
