import { vi, describe, it, expect } from "vitest";
import { ClientService } from "../common/client-details/client-details.service";
import { clientDetailsSlice } from "../common/client-details/client-details.slice";
import { createClient, setBasicDetails, setClientDetailsStatus, setContentSpecs, setProjectScope, setSocialMediaDetails } from "../common/client-details/client-details.thunks";
import { ProcessStatus } from "../common/models/process.enums";
import { RootState } from "../common/store/store";
import { mockBasicDetailsInitialValues, mockClient, mockClientDetails, mockContentSpecsInitialValues, mockProjectScopeInitialValues, mockSocialMediaInitialValues } from "./mocks/clientDetails.mock";
import { mockRootState } from "./mocks/rootState.mock";
import { mockClientService } from "./mocks/clientService.mock";

const mockDispatch = vi.fn();

describe('clientDetails.thunks', () => {
  describe('setClientDetailsStatus', () => {
    it('should dispatch setStatus with the given status', async () => {

      await setClientDetailsStatus(ProcessStatus.BasicDetails)(mockDispatch, () => mockRootState, null);

      expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setStatus(ProcessStatus.BasicDetails));
    });
  });

  describe('setBasicDetails', () => {
    it('should dispatch setBasicDetails and createClient with the given data', async () => {
      await setBasicDetails(mockBasicDetailsInitialValues)(mockDispatch, () => mockRootState, null);
      
        expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setBasicDetails({ formData: mockBasicDetailsInitialValues }));
        expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setStatus(ProcessStatus.BasicDetails));
    });
  });
  describe('setProjectScope', () => {
    it('should dispatch setProjectScope with the given data', async () => {
      await setProjectScope(mockProjectScopeInitialValues)(mockDispatch, () => mockRootState, null);
      
        expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setProjectScope({ formData: mockProjectScopeInitialValues }));
        expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setStatus(ProcessStatus.BasicDetails));
    });
  });
  describe('setContentSpecs', () => {
    it('should dispatch setContentSpecs with the given data', async () => {
      await setContentSpecs(mockContentSpecsInitialValues)(mockDispatch, () => mockRootState, null);
      
        expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setContentSpecs({ formData: mockContentSpecsInitialValues }));
        expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setStatus(ProcessStatus.BasicDetails));
    });
  });

  describe('clientDetails.thunks', () => {
  describe('setClientDetailsStatus', () => {
    it('should dispatch setStatus with the given status', async () => {
      await setClientDetailsStatus(ProcessStatus.BasicDetails)(mockDispatch, () => mockRootState, null);
      expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setStatus(ProcessStatus.BasicDetails));
    });
  });


  describe('setSocialMediaDetails', () => {
    it('should dispatch setSocialMediaDetails and createClient with the given data', async () => {
      await setSocialMediaDetails(mockSocialMediaInitialValues)(mockDispatch, () => mockRootState, null);
      expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setSocialMediaDetails({ formData: mockSocialMediaInitialValues }));
      expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setStatus(ProcessStatus.BasicDetails));
    });
  });
});

// describe('createClient', () => {
//     it('should dispatch setClient and setCreatedClientDetails with the given data', async () => {
//         mockClientService.createClient.mockReturnValue(mockClientDetails);
    
//         await createClient(mockClient)(mockDispatch, () => mockRootState, null);
    
//         expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setClient(mockClient));
//         expect(mockDispatch).toHaveBeenCalledWith(clientDetailsSlice.actions.setCreatedClientDetails(mockClientDetails));
//     })
//     });


});
