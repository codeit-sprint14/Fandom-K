import gitHubMark from "../../assets/icons/github-mark.svg";
import { FooterContainer, FooterText, GitHubLink } from "./style";

function Footer() {
  return (
    <FooterContainer>
      <span>@ Codeit 2024, Inc.</span>
      <FooterText>14기 3조 Fandom-K</FooterText>
      <GitHubLink href="https://github.com/codeit-sprint14/Fandom-K" target="_blank" rel="noopener noreferrer">
        <img src={gitHubMark} alt="GitHub Logo" />
        GitHub
      </GitHubLink>
    </FooterContainer>
  );
}

export default Footer;