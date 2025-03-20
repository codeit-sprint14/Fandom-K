import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./style";
import DonateContainer from "./DonateContainer";
import DonateSidebar from "./DonateSidebar";
import TempDetails from "./TempDetails";
import DonationPage from "../list/donation/components/DonationPage";
import { useDonationData } from "../../contexts/DonationContext";
import Footer from "../../components/footers";

function getting(idolId, datas, navigate) {
  const response = datas;
  const filtered = response?.filter((e) => e.idolId == idolId);
  console.log("response", filtered);

  if (filtered?.length > 0) {
    return filtered[0];
  } else {
    // navigate("/notfound");
    return null;
  }
}

function Donation() {
  const { donationData } = useDonationData();
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [dday, setDday] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = getting(id, donationData, navigate);
    setItem(data);
  }, [id, donationData]);

  useEffect(() => {
    if (item && item.deadline) {
      calculateDday(item.deadline);
    } else {
      setDday(null);
    }
  }, [item]);

  const calculateDday = (deadline) => {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const timeDiff = deadlineDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      setDday("이 후원은 종료됐어요");
    } else {
      const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDday(daysLeft);
    }
  };

  return (
    <>
      <S.DonateInfo>
        <h5>{item ? item.subtitle : <div className="skeleton" />}</h5>
        <h1>{item ? item.title : <div className="skeleton" />}</h1>
        <div className="main-info">
          {item?.idol?.profilePicture ? (
            <div
              className="main-img"
              style={{
                background: item?.idol?.profilePicture
                  ? `url(${item.idol.profilePicture}) 50% 50% / cover no-repeat`
                  : "#eee",
                backgroundColor: "#eee",
              }}
            />
          ) : (
            <div className="skeleton skeleton--main-img" />
          )}
          <DonateContainer item={item} dday={dday} />{" "}
        </div>
        <div className="hr" />
        <div className="details">
          {item ? (
            <TempDetails id={item.idolId} />
          ) : (
            <div
              className="skeleton"
              style={{ width: "800px", height: "1000px" }}
            />
          )}
          <DonateSidebar item={item} dday={dday} />
        </div>
      </S.DonateInfo>
      <Footer />
    </>
  );
}

export default Donation;
