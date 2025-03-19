import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import typography from "../../../../utils/typography";

export const ScrollContainer = styled.div`
  max-width: 1500px;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  overscroll-behavior: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 10px;
  white-space: nowrap;
  position: relative;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* 
  @media (max-width: 768px) {
    max-height: 280px;
    padding: 0 10px;
  } */
`;

const ListedContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* padding-left: 20px; */
`;

const ProfileWrapper = styled(motion.div)`
  width: 128px;
  height: 181px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  position: relative;
  text-align: center;
  transition: transform 0.1s ease-out;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90px;
    height: 140px;
  }

  &:hover {
    transform: scale(1.04);
  }
`;

const ProfileIcoContainer = styled.div`
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
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Name = styled.p`
  ${({ theme }) => css`
    ${typography("b16")};
    color: white;
  `}

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Group = styled.p`
  ${({ theme }) => css`
    ${typography("r14")};
    color: white;
    opacity: 0.6;
  `}

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export { ListedContainer, ProfileWrapper, ProfileIcoContainer, Name, Group };
