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
    width: 8em;
    height: 1em;
    animation: ${skeletonGradient} 1.8s infinite ease-in-out;
    border-radius: 8px;

    &.skeleton--number{
        width: 1em;
    }
    
    &.skeleton--img{
        width: 100%;
        height: 100%;
        border-radius: 100px;
    }
`;