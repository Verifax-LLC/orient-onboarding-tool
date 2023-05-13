import { vi } from "vitest";
import { Client } from "../../common/client-details/client-details.models";
import { mockClient } from "./clientDetails.mock";

export const mockClientService = {
    getOnboardingLink: vi.fn().mockImplementation((onboardingLink: string) => {
      if (onboardingLink === 'valid-link') {
        return Promise.resolve('https://example.com/onboarding');
      } else {
        return Promise.reject(new Error('Invalid onboarding link'));
      }
    }),
    createClient: vi.fn().mockImplementation((client: Client) => {
        return Promise.resolve({
          ...mockClient
        });
    }),
  };