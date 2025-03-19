import gitHubMark from "../../assets/icons/github-mark.svg";
import { FooterContainer, FooterText, GitHubLink } from "./style";

function Footer() {
  return (
    <>
      <hr style={{ opacity: 0.2 }} />
      <FooterContainer>
        {/* <span>@ Codeit 2024, Inc.</span> */}
        <FooterText>2025 Codeit Sprint FE 14 TEAM3</FooterText>
        <GitHubLink
          href="https://github.com/codeit-sprint14/Fandom-K"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubMark} alt="GitHub Logo" />
          GitHub
        </GitHubLink>
      </FooterContainer>
    </>
  );
}

export default Footer;
