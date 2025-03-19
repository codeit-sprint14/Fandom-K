import React, { useState } from "react";
import styled, { css } from "styled-components";
import btnDeleteUrl from "../../assets/icons/btn-close.svg";
import btnDeleteHoverUrl from "../../assets/icons/btn-close-hover.svg";

const FillDeleteBtn = styled.button`
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

function BtnDelete({ styles, clickHandler }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FillDeleteBtn
      onClick={clickHandler}
      styles={styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? btnDeleteHoverUrl : btnDeleteUrl} alt="delete" />
    </FillDeleteBtn>
  );
}

export default BtnDelete;
