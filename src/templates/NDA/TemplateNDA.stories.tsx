import React, { FunctionComponent } from "react";
import { TemplateASampleV2 } from "./sampleV2";
import { TemplateNda } from "./NDA";

export default {
  title: "TemplateNDA",
  component: TemplateNda,
  parameters: {
    componentSubtitle: "Sample Template NDA",
  },
};

export const TemplateNonDisclosureAgreement: FunctionComponent = () => {
  return (
    <TemplateNda document={TemplateASampleV2} handleObfuscation={() => {}} />
  );
};
