import styled, { css } from "styled-components";
import { motion } from "framer-motion";
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
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    padding-left: 10px;
  }
`;

export const ProfileWrapper = styled(motion.div)`
  width: 98px;
  height: 151px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  flex-shrink: 0;
  transition: transform 0.2s ease-in-out;
  gap: 2px;

  @media (max-width: 768px) {
    width: 80px;
    height: 130px;
  }
`;

export const ProfileIcoContainer = styled.div`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const DeleteButtonWrapper = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
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
  font-size: 20px;
  font-weight: bold;
  color: white;
  padding: 40px;
  margin: 0 auto;
  opacity: 0.6;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 20px;
  }
`;
