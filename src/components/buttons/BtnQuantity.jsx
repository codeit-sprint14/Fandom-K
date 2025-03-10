import React from "react";
import { StyledButton } from "./btn-quantity.styles";

const BtnQuantity = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default BtnQuantity;
