import React from "react";
import styled, { css } from "styled-components";
import colors from "../../utils/colors";

const QuantityBtn = styled.button`
  height: 28px;
  border: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: ${colors("gray")};

  cursor: pointer;
  padding: 5px 14px 5px 12px;
  transition: all 0.2s ease-in-out;
  gap: 10px;
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0.8;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;

const BtnQuantity = ({ styles, clickHandler, children }) => {
  return (
    <QuantityBtn onClick={clickHandler} styles={styles}>
      {children}
    </QuantityBtn>
  );
};

export default BtnQuantity;
