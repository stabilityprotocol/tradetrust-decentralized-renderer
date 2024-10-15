import { v3 } from "@tradetrust-tt/tradetrust";
import { TemplateAV3 } from "./types";

export const TemplateASampleV3: TemplateAV3 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
    "https://schemata.openattestation.com/io/tradetrust/bill-of-lading/1.0/bill-of-lading-context.json",
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  issuanceDate: "2010-01-01T19:23:24Z",
  issuer: {
    id: "https://example.com",
    name: "DEMO TOKEN REGISTRY",
  },
  openAttestationMetadata: {
    template: {
      type: v3.TemplateType.EmbeddedRenderer,
      name: "BILL_OF_LADING",
      url: "https://generic-templates.tradetrust.io",
    },
    proof: {
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.TokenRegistry,
      value: "0x72d9a82203Ef9177239A5E3cB7A8FB9a78D04f17",
    },
    identityProof: {
      type: v3.IdentityProofType.DNSTxt,
      identifier: "demo-tradetrust.openattestation.com",
    },
  },
  credentialSubject: {
    data1: 'data1',
    data2: 'data2',
  }
 };
