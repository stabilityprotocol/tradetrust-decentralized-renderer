import { v2, v3 } from "@tradetrust-tt/tradetrust";

export type TemplateAV2 = v2.OpenAttestationDocument & TemplateNdaDocument;
export type TemplateAV3 = v3.OpenAttestationDocument & {
  credentialSubject: TemplateNdaDocument;
};

export type TemplateNdaSchema = TemplateAV2 | TemplateAV3;

export interface TemplateNdaDocument {
  effectiveDate: string;
  disclosingParty: {
    name: string;
    address: string;
  };
  receivingParty: {
    name: string;
    address: string;
  };
  purpose: string;
  governingLawStateCountry: string;
}
