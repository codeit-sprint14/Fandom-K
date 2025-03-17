import styled from "styled-components";
import colors from "../../../utils/colors";

const Ring = styled.div`
  position: relative;
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  background: ${colors("primaryGradient")};
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    width: 96%;
    height: 96%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    background: ${colors("blackDark")};
  }
`;

const CheckedBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: ${colors("primaryGradient")};
  opacity: 0.5;
`;

const Img = styled.div`
  position: absolute;
  z-index: 1;
  width: 88%;
  height: 88%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  background: url(${(props) => props.img}) center / cover no-repeat;
`;

const Svg = styled.img`
  position: absolute;
  width: 40%;
  height: 40%;
`;

const Checked = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  height: 88%;
  z-index: 2;
`;

export { Ring, CheckedBackground, Img, Svg, Checked };
