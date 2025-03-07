import styled from "styled-components";
import typography from "../../utils/typography.js";
import colors from "../../utils/colors.js";

const Title = styled.h1`
  ${typography("b24")};
  color: ${colors("blackLight")};
  background: ${colors("primaryGradient90")};
`;

function NotFound() {
  return (
    <>
      <Title>NotFound</Title>
    </>
  );
}

export default NotFound;
