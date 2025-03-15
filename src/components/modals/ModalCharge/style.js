import styled, { keyframes } from "styled-components";
import colors from "../../../utils/colors";
import typography from "../../../utils/typography";

const popIn = keyframes`
	0% {
		opacity: 0.7;
		transform: translateX(-50%) translateY(-20%);
	}

    100% {
		opacity: 1;
		transform: translateX(-50%) translateY(-50%);
	}
`;

const popOut = keyframes`
	0% {
    opacity: 1;
		transform: translateX(-50%) translateY(-50%);
  }
  
  100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-20%);
	}
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  width: 335px;
  overflow: hidden;
  padding: 24px 32px 32px 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: ${colors("blackLight")};
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 100;
  animation: ${(props) => (props.isExiting ? popOut : popIn)} 0.4s
    cubic-bezier(0, 0.6, 0.4, 1) 0s 1 alternate both;
`;

const ModalChargeQuantity = styled.ul`
  display: flex;
  padding-top: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  li {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-out;
    transition: all 0.1s ease-out;
    border: 2px solid transparent;
    gap: 4px;
    padding: 6px 23px 6px 8px;
    width: 295px;
    height: 100px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    color: ${colors("whiteLight")};
    ${typography("b20")}
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.03);
    }

    .thumbnail {
      height: 100%;
      mix-blend-mode: screen;
    }
  }
`;

const CreditIco = styled.span`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`;

const Shade = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 10;

  transition: all 0.4s cubic-bezier(0, 0.6, 0.4, 1);

  background: ${(props) =>
    props.isExiting ? "hsla(0, 0%, 0%, 0)" : " hsla(0, 0%, 0%, 0.8)"};
`;

export {Container, ModalChargeQuantity, CreditIco, Shade};