import DonationPage from "./donation/components/DonationPage";
import ListChart from "./charts/components/ListChart";
import { createGlobalStyle } from "styled-components";
import colors from "../../utils/colors";
import Footer from "../../components/footers";

// 전역 스타일
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #02000e;
    color: ${colors("whiteLight")};
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

function List() {
  return (
    <>
      <GlobalStyle />
      <DonationPage />
      <ListChart />
      <Footer />
    </>
  );
}

export default List;
