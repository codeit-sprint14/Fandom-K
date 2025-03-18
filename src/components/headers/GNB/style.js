import styled from "styled-components";
import typography from "../../../utils/typography";
import colors from "../../../utils/colors";

const GNBContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-width: 400px;
  height: 80px;
  overflow: hidden;
  backdrop-filter: blur(50px);
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 48px;
  @media (max-width: 768px) {
      height: 60px;
      padding: 0 24px;
    }

  .container {
    width: 1200px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: 1px solid #7E7E7E;
    border-radius: 100px;
    padding: 2px 14px 2px 16px;
    transition: all 0.1s ease-out;

    span {
      ${typography("m16")};
      color: ${colors("whiteLight")};
    }

    .ico-plus {
      margin-left: 16px;
    }

    &:hover{
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .center {
    height: 100%;

    @media (max-width: 768px) {
      height: 70%;
      flex-grow: 1;
    }
    img {
      height: 100%;
    }

  }

  .right {
    display: flex;
    height: 100%;
    text-decoration: none;
    transition: all 0.1s ease-out;

    > div {
      display: flex;
      flex-direction: column;
      align-items: end;
    }

    .group {
      ${typography("m12")}
      color: ${colors("gray")}
    }

    .nickname {
      ${typography("b13")}
      color: white;
      margin-top: -8px;
    }

    &:hover{
      opacity: 0.8;
    }
    @media (max-width: 768px) {
      margin-left: 18px;
    }
  }
  .group-img {
    padding-left: 16px;
    &::before {
      content: "";
      display: block;
      width: 80px;
      height: 80px;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.9) 100%
      );

      position: absolute;
    }

    &::after {
      content: "";
      display: block;
      width: 80px;
      height: 80px;
      background: url("src/assets/images/img-group-NJZ.png");
    }
  }
`;

const Ambient = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
  width: 250px;
  height: 250px;
  transform: translateX(-30%) translateY(-20%);
  border-radius: 300px;
  background: rgba(20, 195, 254, 0.2);
  filter: blur(100px);
  pointer-events: none;
`;

export {GNBContainer, Ambient};