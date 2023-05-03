import { Tenant } from "../tenant/tenant.models";
import { ClientDocument } from "./document.models";

export interface Client {
  id?: number;
  name: string;
  primaryEmail: string;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  tenantId: number;

  // Navigation properties
  tenant?: Tenant;
  clientDetails?: ClientDetails[];
}

export interface ClientDetails {
  id: number;
  clientId: number;
  organizationName: string;
  organizationWebsite: string;
  location: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  pinterest: string;
  tiktok: string;
  monthlyBudget: number;
  revenue: number;
  projectScope: string;
  shortTermGoals: string;
  targetAudience: string;
  brandGuidelines: string;
  communicationPref: string;
  targetLocations: string;
  topCompetitors: string;

  // Navigation properties
  documents: ClientDocument[];
  client: Client;
}
