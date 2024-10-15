import { v2 } from "@tradetrust-tt/tradetrust";
import { TemplateAV2 } from "./types";

export const TemplateASampleV2: TemplateAV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "BILL_OF_LADING",
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
  links: {
    self: {
      href: "https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%20%7B%22uri%22:%20%22https://api-ropsten.tradetrust.io/storage/33737b71-96f6-4019-b6c1-5fcea04fcc2a%22,%22key%22:%20%22edcbadf17301fe5dfe174496c7edf29e0702e2775ee919bbccb74d0dfd5a1b4b%22,%22permittedActions%22:%20%5B%22STORE%22%5D,%22redirect%22:%20%22https://dev.tradetrust.io%22%7D%7D",
    },
  },
  data1: 'data1',
  data2: 'data2',
};
