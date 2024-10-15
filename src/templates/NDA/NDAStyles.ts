import styled from "styled-components";

export const NdaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NdaBody = styled.div`
  width: 100%;
  max-width: 800px;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 5px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  b {
    font-weight: bold;
  }

  ul {
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const NdaPoweredBy = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 12px;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: underline;

    &:hover {
      color: #30c5ff;
    }
  }
`;
