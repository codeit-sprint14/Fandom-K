import styled, { keyframes } from "styled-components";
// import theme from "../../../../styles/theme.styles";

// 개별 후원 카드 컨테이너
export const CardContainer = styled.div`
  background: #000000;
  width: 282.5px;
  height: 396px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex-shrink: 0;
`;

// 후원 이미지 감싸는 컨테이너 (포지셔닝 목적)
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 277px;
  border-radius: 8px;
  overflow: hidden;
`;

// 후원 이미지 스타일
export const DonationImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  background: linear-gradient(#000000, #000000);
  object-fit: cover;
  object-position: center;
`;

// 후원 진행률 표시 (좌상단)
export const Progress = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 25px;
  padding: 4px 12px 4px 8px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.6);
  color: #f7f7f8;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  line-height: 100%;
  backdrop-filter: blur(40px);
`;

// 원형 그래프 + 진행률 wrapper
export const ProgressWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px 4px 8px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);
`;

// 진행률
export const ProgressText = styled.span`
  color: #f7f7f8;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
`;

// 후원 목표 달성 여부 표시 (진행률 위)
export const GoalReached = styled.div`
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.17px;
  color: #e6e6e6;
  background: #181d26;
  padding: 5px 10px;
  border: 1px solid #2d2d2d;
  border-radius: 4px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
`;

// Subtitle + Title을 묶는 컨테이너 (왼쪽 정렬)
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex-grow: 1;
  min-height: 57px;
`;

// TextContainer + D-Day (좌우 배치)
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 10px;
  gap: 8px;
`;

// 후원 부제목 스타일
export const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.17px;
  color: #ffffff;
  opacity: 0.4;
  margin-bottom: 8px;
`;

// 후원 제목 스타일
export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0%;
  color: #f7f7f8;
  text-align: left;
  overflow-wrap: break-word; // 단어 단위 줄바꿈
  word-break: keep-all;
  white-space: normal; // 자동 줄바꿈 허용
`;

// 후원 마감일 표시 (D-Day)
export const DaysLeft = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.17px;
  color: ${({ $isUrgent }) => ($isUrgent ? "#f96d69" : "#F7F7F8")};
  text-align: right;
  margin-bottom: 40px;
  white-space: nowrap; // 한 줄 유지
`;

// 후원하기 버튼 스타일 (일반/추가 후원)
export const Button = styled.button`
  width: 100%;
  height: 42px;
  min-width: 242px;
  padding: 2px 16px 3px 16px;
  border: none;
  border-radius: 8px;
  gap: 10px;
  background: linear-gradient(90deg, #f96d69, #fe5493);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 2%;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    opacity: 0.8;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #3a3a3a 25%, #4a4a4a 50%, #3a3a3a 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

export const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  height: 277px;
  border-radius: 8px;
`;

export const SkeletonTitle = styled(SkeletonBase)`
  width: 80%;
  height: 18px;
  margin-bottom: 8px;
`;

export const SkeletonSubtitle = styled(SkeletonBase)`
  width: 60%;
  height: 16px;
  margin-bottom: 8px;
`;

export const SkeletonDday = styled(SkeletonBase)`
  width: 50px;
  height: 18px;
`;

export const SkeletonButton = styled(SkeletonBase)`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  margin-top: 10px;
`;
