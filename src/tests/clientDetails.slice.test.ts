import { test } from 'vitest';
import assert from 'assert';
import { Client, ClientDetails, LinkVerificationStatus } from '../common/client-details/client-details.models';
import { clientDetailsSlice } from '../common/client-details/client-details.slice';
import { ProcessStatus } from '../common/models/process.enums';
import {
  mockBasicDetailsInitialValues,
  mockClient,
  mockClientDetails,
  mockContentSpecsInitialValues,
  mockOnboardingLink,
  mockProjectScopeInitialValues,
  mockSocialMediaInitialValues,
} from './mocks/clientDetails.mock';

test('clientDetailsSlice', () => {
  const initialState = clientDetailsSlice.getInitialState();

  test('setClient', () => {
    const action = clientDetailsSlice.actions.setClient(mockClient);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.currentClient, mockClient);
  });

  test('setCreatedClientDetails', () => {
    const action = clientDetailsSlice.actions.setCreatedClientDetails(mockClientDetails);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.createdClientDetails, mockClientDetails);
  });

  test('setStatus', () => {
    const status: ProcessStatus = ProcessStatus.Preparation;
    const action = clientDetailsSlice.actions.setStatus(status);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.status, status);
  });

  test('setLinkVerificationState', () => {
    const action = clientDetailsSlice.actions.setLinkVerificationState(LinkVerificationStatus.SUCCESS);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.linkVerificationState, LinkVerificationStatus.SUCCESS);
  });

  test('setOnboardingLink', () => {
    const action = clientDetailsSlice.actions.setOnboardingLink(mockOnboardingLink);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.onboardingLink, mockOnboardingLink);
  });

  test('setBasicDetails', () => {
    const basicDetails = { formData: mockBasicDetailsInitialValues };
    const action = clientDetailsSlice.actions.setBasicDetails(basicDetails);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.basicDetails, basicDetails);
  });

  test('setSocialMediaDetails', () => {
    const socialMediaDetails = { formData: mockSocialMediaInitialValues };
    const action = clientDetailsSlice.actions.setSocialMediaDetails(socialMediaDetails);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.socialMediaDetails, socialMediaDetails);
  });

  test('setProjectScope', () => {
    const projectScope = { formData: mockProjectScopeInitialValues };
    const action = clientDetailsSlice.actions.setProjectScope(projectScope);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.projectScope, projectScope);
  });

  test('setContentSpecs', () => {
    const contentSpecs = { formData: mockContentSpecsInitialValues };
    const action = clientDetailsSlice.actions.setContentSpecs(contentSpecs);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.contentSpecs, contentSpecs);
  });

  test('setPaymentDetails', () => {
    const paymentDetails = { method: 'Credit Card' };
    const action = clientDetailsSlice.actions.setPaymentDetails(paymentDetails);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.paymentDetails, paymentDetails);
  });

  test('setFileUploadDialogOpen', () => {
    const fileUploadDialogOpen = true;
    const action = clientDetailsSlice.actions.setFileUploadDialogOpen(fileUploadDialogOpen);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.fileUploadDialogOpen, fileUploadDialogOpen);
  });

  test('setHasUploadedFiles', () => {
    const hasUploadedFiles = true;
    const action = clientDetailsSlice.actions.setHasUploadedFiles(hasUploadedFiles);
    const nextState = clientDetailsSlice.reducer(initialState, action);
    assert.deepStrictEqual(nextState.contentSpecs.formData.hasUploadedFiles, hasUploadedFiles);
  });
});