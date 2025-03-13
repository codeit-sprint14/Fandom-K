import styled, { keyframes } from "styled-components";
import typography from "../../../utils/typography";
import colors from "../../../utils/colors";

const pop = keyframes`
	0% {
		opacity: 0.5;
		transform: translateX(-50%) translateY(250px);
	}

	10% {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}

    90% {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}

    100% {
		opacity: 0.5;
		transform: translateX(-50%) translateY(250px);
        display: none;
	}
`;

const Container = styled.div`
  position: fixed;
  bottom: 150px;
  left: 50%;
  display: inline-flex;
  box-sizing: border-box;
  height: 76px;
  padding: 18px 42px 18px 32px;
  border-radius: 100px;
  box-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.05);
  background: #181d26;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 9999;
  animation: ${pop} 3s cubic-bezier(0, 0.6, 0.4, 1) 0s 1 alternate both;
`;

const Msg = styled.div`
  color: ${colors("whiteLight")};
  ${typography("sb18")};
  white-space: nowrap;
`;

export {Container, Msg};