import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";
import { useEffect, useState } from "react";

const appear = keyframes`
	0% {
		opacity: 0;
	}

	70% {
		opacity: 0;
	}

    100% {
		opacity: 1;
	}
`;

const Container = styled.div`
  position: absolute;
  z-index: 100;

  display: inline-flex;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #2d2d2d;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
  background: ${colors("blackLight")};
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #e6e6e6;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.165px;
  text-align: center;

  animation: ${appear} 1s cubic-bezier(0, 0.6, 0.4, 1) 0s 1;

  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
`;

function Msg({ msg = "빈 메시지입니다" }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
      window.removeEventListener("mousemove", handleMouseMove);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Container left={position.x} top={position.y}>
      {msg}
    </Container>
  );
}

export default Msg;
