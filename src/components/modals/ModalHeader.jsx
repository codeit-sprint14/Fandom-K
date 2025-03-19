import React from "react";
import styled from "styled-components";
import BtnX from "../buttons/BtnX";
import typography from "../../utils/typography";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 6px;
  background: transparent;
  position: relative;
  width: 100%;
  border-bottom: ${({ showBorder }) =>
    showBorder ? "1px solid rgba(255, 255, 255, 0.1)" : "none"};
  box-sizing: border-box;

  /* @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px 16px;
  } */
`;

const HandleBar = styled.div`
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin-bottom: 8px;
  display: none;

  /* @media (max-width: 768px) {
    display: block;
  } */
`;

const Title = styled.h2`
  ${typography("sb18")};
  margin: 0;
  color: white;
`;

const ModalHeader = ({ title, onClose }) => {
  return (
    <HeaderContainer>
      <HandleBar />
      <Title>{title}</Title>
      <BtnX clickHandler={onClose} />
    </HeaderContainer>
  );
};

export default ModalHeader;
