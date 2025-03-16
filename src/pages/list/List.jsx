// window.localStorage.setItem("credit", 30000);

// function List() {
//   return <>List</>;
// }

// export default List;

import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme.styles";
import DonationPage from "./donation/components/DonationPage";
window.localStorage.setItem("credit", 30000);

function List() {
  return (
    <ThemeProvider theme={theme}>
      <DonationPage />
    </ThemeProvider>
  );
}

export default List;
