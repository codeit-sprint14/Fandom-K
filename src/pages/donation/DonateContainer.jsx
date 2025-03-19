import React, { useState } from "react";
import axios from "axios";
import BtnQuantity from "../../components/buttons/BtnQuantity";
import Btn from "../../components/buttons/Btn";
import CreditIcon from "../../assets/icons/ic-credit.svg";
import { formatDate } from "../../utils/dateUtils.js";
import { DonateInput } from "./style.js";
import Toast from "../../components/modals/Toast";
import { useCredit } from "../../contexts/CreditContext.jsx";

function DonateContainer({ item, dday }) {
  const [donate, setDonate] = useState(0);
  const [invalidInput, setInvalidInput] = useState(false);
  const [showToast, setShowToast] = useState(0);
  const { credit, setCredit } = useCredit();

  const handleToast = (msg) => {
    if (!showToast) {
      setShowToast(msg);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const handleDonate = async (quantity) => {
    handleToast(`${quantity.toLocaleString()} 크레딧을 후원했어요 🥳`);
    setCredit((prev) => prev - quantity);
    setDonate(0);
    try {
      const response = await axios.put(
        `https://fandom-k-api.vercel.app/14-3/donations/${item.id}/contribute`,
        {
          amount: quantity,
        }
      );
      console.log("Donation successful:", response.data);
    } catch (error) {
      console.error(
        "Donation failed:",
        error.response ? error.response.data : error.message
      );
      // handleToast(`다시 시도해주세요`);
    }
  };

  const handleInput = (e) => {
    const value = Number(e.target.value.replaceAll(",", ""));
    const isInvalid = value > credit;
    setInvalidInput(isInvalid);
    setDonate(Number(value) >= 0 ? Number(value) : 0);
  };

  const handleClick = (quantity) => {
    const isInvalid = Number(donate) + quantity > credit;
    setInvalidInput(isInvalid);
    setDonate(Number(donate) + quantity);
  };

  // if (!item) {
  //   return <div>{loadingMsg}</div>;
  // }

  return (
    <>
      {showToast ? <Toast msg={showToast} /> : ""}
      <div className="donate-container">
        <h4>{item ? "모인 금액" : <div className="skeleton" />}</h4>
        <h2>
          {item ? (
            <>
              {item.receivedDonations
                ? item.receivedDonations.toLocaleString()
                : 0}
              <h4>&nbsp;크레딧</h4>
            </>
          ) : (
            <div className="skeleton" />
          )}
        </h2>
        <h4>{item ? "남은 시간" : <div className="skeleton" />}</h4>
        <h2>
          {dday !== null && item ? (
            <>
              {dday}
              <h4>&nbsp;일</h4>
            </>
          ) : (
            <div className="skeleton" />
          )}
        </h2>{" "}
        <div className="small-info-container">
          <div className="small-info-left">
            <h5>{item ? "목표 금액" : <div className="skeleton" />}</h5>
            <h5>{item ? "모집 기간" : <div className="skeleton" />}</h5>
          </div>
          <div className="small-info-right">
            <h6>
              {item ? (
                `${item.targetDonation.toLocaleString()}`
              ) : (
                <div className="skeleton" />
              )}
            </h6>
            <h6>
              {item ? formatDate(item.deadline) : <div className="skeleton" />}
            </h6>{" "}
          </div>
        </div>
        {item ? (
          <>
            <h6>내 크레딧: {credit.toLocaleString()}</h6>
            <div className="input-container">
              <DonateInput
                className="donate-input"
                type="text"
                placeholder="얼마나 후원할까요?"
                onChange={handleInput}
                invalid={invalidInput}
                value={donate > 0 ? donate.toLocaleString() : ""}
              />{" "}
              <img src={CreditIcon} />
            </div>
            <div className="donate-buttons">
              <BtnQuantity
                clickHandler={() => {
                  handleClick(100);
                }}
              >
                +100
              </BtnQuantity>
              <BtnQuantity
                clickHandler={() => {
                  handleClick(500);
                }}
              >
                +500
              </BtnQuantity>
              <BtnQuantity
                clickHandler={() => {
                  handleClick(1000);
                }}
              >
                +1,000
              </BtnQuantity>
              <BtnQuantity
                clickHandler={() => {
                  setDonate(credit);
                  setInvalidInput(false);
                }}
              >
                전액
              </BtnQuantity>
            </div>
            <Btn
              text="후원하기"
              disabled={invalidInput || credit < 1}
              onClick={() => handleDonate(Number(donate))}
            />
          </>
        ) : (
          <div
            className="skeleton"
            style={{ width: "100%", height: "186px" }}
          />
        )}
      </div>
    </>
  );
}

export default DonateContainer;
