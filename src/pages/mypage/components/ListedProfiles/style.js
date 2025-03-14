import styled, { css } from "styled-components";
import typography from "../../../../utils/typography";

export const ListedContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1237px;
  width: 100%;
  padding-left: 20px;
  margin-left: 0;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
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
`;

export const Group = styled.p`
  ${({ theme }) => css`
    ${typography("r14")};
    color: white;
    opacity: 0.6;
  `}
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
