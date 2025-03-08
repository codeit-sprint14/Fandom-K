import styled from "styled-components";
import typography from "../../utils/typography.js";
import colors from "../../utils/colors.js";
import ProfileIco from "../../components/profiles/ProfileIco.jsx";
import BtnArrow from "../../components/buttons/BtnArrow.jsx";

const Bg = styled.div`
  background: ${colors("blackDark")};
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  ${typography("b24")};
  color: ${colors("blackLight")};
  background: ${colors("primaryGradient90")};
`;

const Cover = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
`;

function NotFound() {
  return (
    <>
      <Bg>
        <BtnArrow isRight />
        <Cover>
          <ProfileIco checked />
        </Cover>
        {/* <Title>NotFound</Title> */}
      </Bg>
    </>
  );
}

export default NotFound;
