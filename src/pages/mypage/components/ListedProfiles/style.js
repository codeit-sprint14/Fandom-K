import styled, { css } from "styled-components";
import typography from "../../../../utils/typography";

export const ScrollContainer = styled.div`
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  gap: 10px;
  padding: 10px;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

export const ListedContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    padding-left: 10px;
  }
`;

export const ProfileWrapper = styled.div`
  width: 128px;
  height: 181px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  text-align: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 90px;
    height: 130px;
  }
`;

export const ProfileIcoContainer = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-ft: cover;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const DeleteButtonWrapper = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 10;
  cursor: pointer;
`;

export const Name = styled.p`
  ${({ theme }) => css`
    ${typography("b16")};
    color: white;
  `}

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Group = styled.p`
  ${({ theme }) => css`
    ${typography("r14")};
    color: white;
    opacity: 0.6;
  `}

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Loading = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 500px;
  font-size: 18px;
  font-weight: 500;
  color: #aaa;
  padding: 20px;
  margin: 0 auto;
`;
