import React from "react";
import styled, { css } from "styled-components";

const QuantityBtn = styled.button`
  width: 64px;
  height: 28px;
  border: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  cursor: pointer;
  padding: 5px 14px 5px 12px;
  transition: all 0.2s ease-in-out;
  gap: 10px;
  flex-shrink: 0;
  background: gray;
  opacity: 0.8;

  &:hover {
    opacity: 1;
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
