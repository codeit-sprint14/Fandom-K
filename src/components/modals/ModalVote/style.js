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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  width: 512px;
  overflow: hidden;
  padding: 24px 16px 32px 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: ${colors("blackLight")};
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 100;
  animation: ${(props) => (props.isExiting ? popOut : popIn)} 0.4s
    cubic-bezier(0, 0.6, 0.4, 1) 0s 1 alternate both;

  header {
    width: 100%;
    box-sizing: border-box;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    select {
      background: none;
      color: white;
      border: none;

      ${typography("sb18")};

      &:focus {
        outline: none;
        background: none;
        color: white;
        border: none;
      }
    }

    img {
      width: 14px;
      height: 14px;
      padding: 8px;
      box-sizing: border-box;
      background: url("src/assets/icons/btn-x.svg");
      border: none;
      transition: all 0.1s ease-out;

      &:hover {
        background: url("src/assets/icons/btn-x-hover.svg");
      }
    }
  }
`;

const ModalChargeQuantity = styled.ul`
  display: flex;
  box-sizing: border-box;
  margin: 24px 48px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  height: 500px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;

  > :nth-child(2) {
    margin-top: 32px;
  }
  > :last-child {
    margin-bottom: 32px;
  }

  > div {
    box-sizing: border-box;
    width: 100%;
    height: 502px;
    z-index: 1059;
    position: fixed;
    top: 78px;
    left: 0;
    pointer-events: none;
    background: linear-gradient(
      0deg,
      rgba(24, 29, 38, 1) 0%,
      rgba(24, 29, 38, 0) 10%,
      rgba(24, 29, 38, 0) 90%,
      rgba(24, 29, 38, 1) 100%
    );
  }

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-out;
    width: 100%;

    input {
      display: none;
      position: absolute;
      right: 23px;
    }

    flex-shrink: 0;

    &:after {
      content: "";
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin-top: 8px;
    }
  }

  label {
    transition: all 0.1s ease-out;
    border: 2px solid transparent;
    gap: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    color: ${colors("whiteLight")};
    ${typography("m14")}

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    &:before {
      position: absolute;
      right: 10px;
      content: "";
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: ${colors("whiteLight")};
      transition: all 0.3s ease;
      background: url("src/assets/icons/btn-heart.svg");
    }
  }

  input[type="radio"]:checked + label:before {
    background: url("src/assets/icons/btn-heart-checked.svg");
  }
`;

const ProfileContainer = styled.span`
  display: flex;
  height: 70px;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const ProfileIcoContainer = styled.div`
  width: 70px;
  height: 70px;
`;

const Shade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: hsla(0, 0%, 0%, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  transition: all 0.4s cubic-bezier(0, 0.6, 0.4, 1);

  background: ${(props) =>
    props.isExiting ? "hsla(0, 0%, 0%, 0)" : " hsla(0, 0%, 0%, 0.8)"};
`;

const Btn = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  padding: 8px 80px;
  border-radius: 8px;
  background: linear-gradient(90deg, #f96d69 0%, #fe5493 100%);
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const Rank = styled.span`
  color: ${colors("primaryOrange")};
  ${typography("r14")}
`;

const Votes = styled.span`
  margin-right: 32px;
  ${typography("r14")};
  color: ${colors("grayLight")};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  h3 {
    color: ${colors("grayLight")};
    ${typography("r14")};
  }

  h2 {
    color: white;
    ${typography("m14")};
  }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  opacity: 0.05;

  .profile {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: white;
  }

  .description {
    flex-grow: 1;
    height: 40px;
    background: white;
    border-radius: 8px;
  }
`;

export {Container, ModalChargeQuantity, ProfileContainer, ProfileIcoContainer, Shade, Btn, Rank, Votes , InfoContainer ,Skeleton};