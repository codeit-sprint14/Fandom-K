import DonateContainer from "./DonateContainer.jsx";

function DonateSidebar({ item, dday }) {
  const loadingMsg = "Loading...";

  // if (!item) {
  //   return <div>{loadingMsg}</div>;
  // }

  return (
    <div className="donate-sidebar">
      <h4>{item ? item.subtitle : <div className="skeleton" />}</h4>
      <h2 className="nowrap">
        {item ? item.title : <div className="skeleton" />}
      </h2>
      <DonateContainer item={item} dday={dday} />
    </div>
  );
}

export default DonateSidebar;
