import styled from "styled-components";

export const StyledButton = styled.button`
  width: 64px;
  height: 28px;
  border: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  cursor: pointer;
  padding: 5px 14px 5px 12px;
  transition: all 0.2s ease-in-out;
  gap: 10px;
  flex-shrink: 0;
  background: #828282;

  &:hover {
    opacity: 0.8;
  }
`;
