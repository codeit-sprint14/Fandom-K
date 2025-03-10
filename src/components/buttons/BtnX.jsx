import React, { useState } from "react";
import styled, { css } from "styled-components";
import btnXtUrl from "../../assets/icons/btn-x.svg";
import btnXHoverUrl from "../../assets/icons/btn-x-hover.svg";

const FillXBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* 상위에서 전달받은 styles 적용 */
  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;

function BtnX({ styles, clickHandler }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FillXBtn
      onClick={clickHandler}
      styles={styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? btnXHoverUrl : btnXtUrl} alt="x" />
    </FillXBtn>
  );
}

export default BtnX;
