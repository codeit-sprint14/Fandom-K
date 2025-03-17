import styled, { css } from "styled-components";
import typography from "../../../../utils/typography";

export const ScrollContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ListedContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1237px;
  padding-left: 20px;
`;

const ProfileWrapper = styled.div`
  width: 128px;
  height: 181px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  position: relative;
  text-align: center;
`;

const Name = styled.p`
  ${({ theme }) => css`
    ${typography("b16")};
    color: white;
  `}
`;

const Group = styled.p`
  ${({ theme }) => css`
    ${typography("r14")};
    color: white;
    opacity: 0.6;
  `}
`;

export { ListedContainer, ProfileWrapper, Name, Group };
