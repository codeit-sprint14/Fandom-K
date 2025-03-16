import DonationPage from "./donation/components/DonationPage";
window.localStorage.setItem("credit", 30000);

function List() {
  return <DonationPage />;
}

export default List;
