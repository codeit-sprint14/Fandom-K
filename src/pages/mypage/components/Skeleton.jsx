import React from "react";
import styled from "styled-components";

const Skeleton = ({ width, height, borderRadius }) => {
  return (
    <SkeletonBox width={width} height={height} $borderRadius={borderRadius} />
  );
};

const SkeletonBox = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "20px"};
  background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: ${(props) => props.$borderRadius || "4px"}; /* ✅ 수정됨 */

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export default Skeleton;
