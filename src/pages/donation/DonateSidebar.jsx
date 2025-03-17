import { useEffect, useState } from "react";
import DonateContainer from "./DonateContainer.jsx";

function DonateSidebar({ item, dday }) {
  const [winSize, setWinSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWinSize = () => {
      setWinSize(window.innerWidth);
    };

    handleWinSize();
    window.addEventListener("resize", handleWinSize);

    return () => window.removeEventListener("resize", handleWinSize);
  }, []);

  if (winSize < 1024) {
    return (
      <></>
      // <div className="donate-sidebar">
      //   <h4>{item ? item.subtitle : <div className="skeleton" />}</h4>
      //   <h2 className="nowrap">
      //     {item ? item.title : <div className="skeleton" />}
      //   </h2>
      //   <DonateContainer item={item} dday={dday} />
      // </div>
    );
  }

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
