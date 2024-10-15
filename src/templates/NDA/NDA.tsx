import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { getDocumentData } from "../../utils";
import { TemplateNdaDocument, TemplateNdaSchema } from "./types";
import { NdaBody, NdaPoweredBy, NdaWrapper } from "./NDAStyles";

const Content = (document: TemplateNdaDocument): JSX.Element => {
  return (
    <NdaWrapper>
      <NdaBody>
        <h1>NON-DISCLOSURE AGREEMENT (NDA)</h1>
        <p>
          This Non-Disclosure Agreement (the “Agreement”) is entered into as of
          the [DATE], by and between:
        </p>
        <p>
          <b>{document.disclosingParty.name}</b>,<br />
          with a principal place of business at{" "}
          {document.disclosingParty.address}
          <br /> (hereinafter referred to as “Disclosing Party”),
        </p>
        <p>and</p>
        <p>
          <b>{document.receivingParty.name}</b>,<br />
          with a principal place of business at{" "}
          {document.receivingParty.address}
          <br /> (hereinafter referred to as “Receiving Party”).
        </p>
        <h2>1. Definition of Confidential Information</h2>
        <p>
          “Confidential Information” means any and all technical and
          non-technical information disclosed by Disclosing Party to Receiving
          Party, including but not limited to:
        </p>
        <ul>
          <li>
            business strategies, customer information, financial data, software,
            hardware, inventions, and know-how;
          </li>
          <li>
            any other information that, due to the nature of its content or the
            circumstances surrounding its disclosure, the Receiving Party should
            reasonably understand to be confidential.
          </li>
        </ul>
        <h2>2. Obligations of Receiving Party</h2>
        <p>The Receiving Party shall:</p>
        <ul>
          <li>
            Maintain the confidentiality of the Confidential Information and not
            disclose it to any third parties, except as required by law or with
            written permission from the Disclosing Party.
          </li>
          <li>
            Use the Confidential Information only for the purpose of{" "}
            {document.purpose}.
          </li>
          <li>
            Take all reasonable precautions to protect the confidentiality of
            the Confidential Information.
          </li>
        </ul>
        <h2>3. Exclusions from Confidential Information</h2>
        <p>Confidential Information does not include information that:</p>
        <ul>
          <li>
            Is or becomes publicly known through no breach of this Agreement by
            the Receiving Party;
          </li>
          <li>
            Is disclosed to the Receiving Party by a third party without breach
            of any confidentiality obligation;
          </li>
          <li>
            Is independently developed by the Receiving Party without the use of
            the Confidential Information.
          </li>
        </ul>
        <h2>4. Term</h2>
        <p>
          This Agreement shall commence on the Effective Date and shall continue
          until the Confidential Information no longer qualifies as confidential
          or until terminated by either party with written notice.
        </p>
        <h2>5. Return of Materials</h2>
        <p>
          Upon termination or expiration of this Agreement, or upon request by
          the Disclosing Party, the Receiving Party shall return or destroy all
          documents or other tangible materials containing Confidential
          Information.
        </p>
        <h2>6. No License</h2>
        <p>
          Nothing in this Agreement grants the Receiving Party any rights to the
          Disclosing Party’s intellectual property or other proprietary rights.
        </p>
        <h2>7. Remedies</h2>
        <p>
          The Receiving Party acknowledges that any breach of this Agreement may
          cause irreparable harm to the Disclosing Party, and agrees that the
          Disclosing Party shall be entitled to seek injunctive relief in
          addition to any other remedies available at law.
        </p>
        <h2>8. Governing Law</h2>
        <p>
          This Agreement shall be governed by and construed in accordance with
          the laws of {document.governingLawStateCountry}.
        </p>
        <h2>9. Entire Agreement</h2>
        <p>
          This Agreement constitutes the entire agreement between the parties
          with respect to the subject matter hereof and supersedes all prior
          agreements, understandings, and communications.
        </p>

        <h2>10. Miscellaneous</h2>
        <ul>
          <li>
            No amendment or waiver of any provision of this Agreement shall be
            effective unless in writing and signed by both parties.
          </li>
          <li>
            If any provision of this Agreement is held to be invalid or
            unenforceable, the remainder of this Agreement shall continue in
            full force and effect.
          </li>
        </ul>
      </NdaBody>
      <NdaPoweredBy>
        <a
          href="https://stabilityprotocol.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="data:image/svg+xml,%3csvg%20width='25'%20height='31'%20viewBox='0%200%2025%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024.1065L12.4161%2017.1897L24.8323%2024.1244L12.4161%2030.9997L0%2024.1065Z'%20fill='%230A0A0A'/%3e%3cpath%20d='M0%206.91602L12.4161%2013.7925V27.4893L0%2020.7428V6.91602Z'%20fill='%233E7CB1'/%3e%3cpath%20d='M24.8321%206.93469L12.416%2013.81V27.508L24.8321%2020.7615V6.93469Z'%20fill='%2330C5FF'/%3e%3cpath%20d='M0%206.91677L12.4161%200L24.8323%206.9347L12.4161%2013.81L0%206.91677Z'%20fill='%2341EEF9'/%3e%3c/svg%3e"
            alt="cube"
            // style="height: 1.5rem; margin-right: 0.5rem; margin-left: 0px;"
          />
          <span>Powered by STABILITY</span>
        </a>
      </NdaPoweredBy>
    </NdaWrapper>
  );
};

export const TemplateNda: FunctionComponent<
  TemplateProps<TemplateNdaSchema>
> = ({ document }) => {
  const documentData = getDocumentData(document) as TemplateNdaDocument;
  return (
    <>
      <div>{Content(documentData)}</div>
    </>
  );
};
