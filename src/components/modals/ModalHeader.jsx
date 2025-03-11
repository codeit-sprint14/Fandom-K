import React from "react";
import styled from "styled-components";
import { HeaderContainer, Title, HandleBar } from "./modal-header.styles";

const ModalHeader = ({ title, onClose }) => {
  return (
    <HeaderContainer>
      <HandleBar />
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default ModalHeader;
