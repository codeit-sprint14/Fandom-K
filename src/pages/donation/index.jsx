import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from "./style";
import DonateContainer from "./DonateContainer";
import DonateSidebar from "./DonateSidebar";
import TempDetails from "./TempDetails";

async function getting(idolId) {
  try {
    const response = await axios.get(
      `https://fandom-k-api.vercel.app/14-3/donations?pageSize=20`
    );
    const lists = response.data.list;
    const filtered = lists.filter((e) => e.idolId == idolId);

    if (filtered.length > 0) {
      console.log("후원:", filtered[0]);
      return filtered[0];
    } else {
      console.log("해당 후원이 없습니다:", idolId);
      return null;
    }
  } catch (error) {
    console.error(
      "Error fetching donation list:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
}

function Donation() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [dday, setDday] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getting(id);
      setItem(data);
    };
    fetchData();
  }, [id]);

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
            <TempDetails />
          ) : (
            <div
              className="skeleton"
              style={{ width: "800px", height: "1000px" }}
            />
          )}
          <DonateSidebar item={item} dday={dday} />
        </div>
      </S.DonateInfo>
    </>
  );
}

export default Donation;
