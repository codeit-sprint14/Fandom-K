import styled from "styled-components";

// 전체 감싸는 컨테이너
export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

// 기본 원형 그래프 배경색
export const CircleBackground = styled.circle`
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 4;
`;

// 채워진 원형 그래프
export const CircleProgress = styled.circle`
  fill: none;
  stroke: #fe5493;
  stroke-width: 4;
  stroke-dasharray: 100;
  /* 0%일 때 stroke-dashoffset = 100, 100%일 때 0 */
  stroke-dashoffset: ${(props) => 100 - props.progress};
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease;
`;
