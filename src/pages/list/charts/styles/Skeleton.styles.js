// 차트 및 스켈레톤 스타일
import styled, { keyframes } from 'styled-components';

// 스켈레톤 그라디언트 애니메이션 정의
const skeletonGradient = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
`;

// 스켈레톤 컴포넌트 스타일
export const LoadingSkeleton = styled.div`
    .skeleton {
        width: 560px;
        height: 76px;
        gap: 0px;
        column-gap: 20px;
        animation: ${skeletonGradient} 1.8s infinite ease-in-out;
        border-radius: 8px;
    }

    .element {
        overflow: hidden;
        position: relative;
    }
`;