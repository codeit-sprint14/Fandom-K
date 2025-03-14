import styled from "styled-components";
import Btn from "../../components/buttons/Btn";
import { Link } from "react-router-dom";
import typography from "../../utils/typography";

function NotFound() {
  const PageContainer = styled.div`
    width: 100%;
    height: 98vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    img {
      width: 300px;
      mix-blend-mode: screen;
    }

    p {
      ${typography("b24")};
      color: white;
      text-align: center;
      line-height: 1.2;
    }
  `;

  return (
    <PageContainer>
      <img src="src/assets/images/img-notfound.jpg" alt="" />
      <p>
        길을 잃으셨나요?
        <br />
        여기 방법이 있어요!
      </p>
      <Link to="/list" style={{ width: "240px", textDecoration: "none" }}>
        <Btn text="돌아가기" />
      </Link>
    </PageContainer>
  );
}

export default NotFound;
