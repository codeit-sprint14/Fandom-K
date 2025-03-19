import React, { useState } from "react";
import styled, { css } from "styled-components";

const btnHeartUrl = `${import.meta.env.BASE_URL}icons/btn-heart.svg`;
const btnHeartHoverUrl = `${import.meta.env.BASE_URL}icons/btn-heart-hover.svg`;
const btnHeartCheckedUrl = `${
  import.meta.env.BASE_URL
}icons/btn-heart-checked.svg`;
const btnHeartCheckedHoverUrl = `${
  import.meta.env.BASE_URL
}icons/btn-heart-checked-hover.svg`;

const FillHeartBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;

function BtnHeart({ count = 3 }) {
  // 하트 개수를 props로 받음(기본값: 3)
  const [selectedHeart, setSelectedHeart] = useState(null); // 1개만 선택될 수 있게 전역 관리
  const [hoveredHeart, setHoveredHeart] = useState(null); // hover 전역 관리

  const toggleHeart = (id) => {
    setSelectedHeart(selectedHeart === id ? null : id); // 선택된 하트 재클릭시, 선택 해제
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Array.from({ length: count }, (_, i) => {
        const id = i + 1;
        const isChecked = selectedHeart === id; // 선택되었는지 확인
        const isHovered = hoveredHeart === id; // hover 상태 확인

        const currentImage = isChecked
          ? isHovered
            ? btnHeartCheckedHoverUrl // 체크된 상태 + hover
            : btnHeartCheckedUrl // 체크된 상태 (기본)
          : isHovered
          ? btnHeartHoverUrl // 체크 안 된 상태 + hover
          : btnHeartUrl; // 체크 안 된 상태 (기본)

        return (
          <FillHeartBtn
            key={id}
            onClick={() => toggleHeart(id)}
            onMouseEnter={() => setHoveredHeart(id)}
            onMouseLeave={() => setHoveredHeart(null)}
          >
            <img src={currentImage} alt="heart" />
          </FillHeartBtn>
        );
      })}
    </div>
  );
}

export default BtnHeart;
