import styled from "styled-components";
import colors from "../../utils/colors";
import typography from "../../utils/typography";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* height: 100px; */
  max-width: 900px;
  margin: 48px auto 90px auto;
  padding: 20px;
  color: ${colors("grayLight")};
  ${typography("m14")};

  @media (max-width: 1023px) {
    max-width: 650px;
    ${typography("m12")};
  }

  @media (max-width: 767px) {
    max-width: 400px;
    padding: 15px;
  }
`;

export const FooterText = styled.span`
  margin: 0 40px;
  
  @media (max-width: 1023px) {
    margin: 0 20px;
  }

  @media (max-width: 767px) {
    margin: 0 10px;
  }
`;

export const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    filter: grayscale(100%) brightness(3) contrast(3);
  }

  @media (max-width: 769px) {
    img {
      width: 14px;
      height: 14px;
    }
  }
`;
