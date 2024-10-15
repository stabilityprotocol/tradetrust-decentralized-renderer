import { v2 } from "@tradetrust-tt/tradetrust";
import { TemplateAV2 } from "./types";

export const TemplateASampleV2: TemplateAV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "NDA",
    url: "http://localhost:3000",
  },
  issuers: [
    {
      name: "abc",
      tokenRegistry: "0x142Ca30e3b78A840a82192529cA047ED759a6F7e",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.tradetrust.io",
      },
    },
  ],
  effectiveDate: "2020-01-01",
  disclosingParty: {
    name: "ABC Ltd.",
    address: "Singapore",
  },
  receivingParty: {
    name: "XYZ Ltd.",
    address: "Singapore",
  },
  purpose: "To share information",
  governingLawStateCountry: "Singapore",
};
