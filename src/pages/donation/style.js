import styled, { keyframes } from "styled-components";
import typography from "../../utils/typography";
import colors from "../../utils/colors";

const nope = keyframes`
	0% {
		transform: translateX(0px);
	}

    20% {
		transform: translateX(-6px);
	}

    40% {
		transform: translateX(6px);
	}

    60% {
		transform: translateX(-4px);
	}

    80% {
		transform: translateX(3px);
	}

    100% {
		transform: translateX(0px);
	}
`;

const skeletonGradient = keyframes`
  0% {
      background-color: rgba(165, 165, 165, 0.1);
  }

  50% {
      background-color: rgba(165, 165, 165, 0.3);
  }

  100% {
      background-color: rgba(165, 165, 165, 0.1);
  }
`;

const DonateInput = styled.input`
    width: 100%;
    height: 54px;
    margin: 8px 0;
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    background: ${colors("blackLight")};
    ${typography("sb18")};
    font-family: "Pretendard Variable";
    padding: 0 24px;
    animation: ${props => props.invalid && nope} 0.3s
    cubic-bezier(0, 0.6, 0.4, 1) 0s 1 alternate both;

    color: ${props => props.invalid ? colors("primaryOrange") : colors("whiteLight")};


    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }
`;

const DonateInfo = styled.div`
width: 100%;
max-width: 1080px;
margin: auto;
margin-top: 128px;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.skeleton {
    width: 8em;
    height: 1em;
    animation: ${skeletonGradient} 1.8s infinite ease-in-out;
    border-radius: 8px;
}

.hr {
    background: rgba(255, 255, 255, 0.2);
    height:1px;
    width: 100vw;
    border:0;
    margin: 148px 0;
}


h1 {
    font-size: 64px;
    font-weight: 800;
    margin: 14px 0 58px 0;
    text-align: center;
    line-height: 1.2;

    @media screen and (max-width: 1024px){font-size: 32px;}
}
h2 {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 24px;
   align-items: baseline;
   display: flex;
   margin-top: 4px;

   &.nowrap{
    width: 100%;
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
   }
}
h4,h5,h6 {
    ${typography("m14")};
    color: ${colors("grayLight")};
}

.donate-container {
    flex-grow: 1;
}

.main-info{
    display: flex;
    gap: 92px;
    width: 960px;

    @media screen and (max-width: 1024px){
        flex-direction: column;
        width: 100%;
        padding: 0 52px;
        box-sizing: border-box;
        justify-content: center;
    }
}

.main-img{
    border-radius: 8px;
    width: 480px;
    height: 480px;
    box-sizing: border-box;
    aspect-ratio: 1;

    @media screen and (max-width: 1024px){
        margin: auto;
        box-sizing: border-box;
        width: 70vw;
        height: 70vw;
        aspect-ratio: 1;
        
        /* padding: 52px; */
    }
}

.skeleton--main-img{
    width: 480px;
    height: 480px;

    @media screen and (max-width: 1024px){
        margin: auto;
        box-sizing: border-box;
        width: 70vw;
        height: 70vw;
        aspect-ratio: 1;
    }
}

.small-info-container{
    display: flex;
    gap: 24px;
    margin-bottom: 48px;

    .small-info-left,.small-info-right {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
}

.input-container{
    position: relative;

    img {
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateX(-50%) translateY(-50%);
    }
}



.donate-buttons{
    display:flex;
    gap: 8px;
    margin-bottom: 28px;
}

.details {
    display: flex;
    width: 100%;
    gap: 64px;
    margin-bottom: 400px;

    .detail-left {
        color: var(--white-whtie_F7F7F8,hsl(0, 0.00%, 85%));
        h1,h2 {
            font-family: "Pretendard Variable";
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 32px;
            margin: 12px 0;
            text-align: left;
        }

        h2 {
            margin-top: 32px;
        }

        p,ul {
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.7;
            text-align: justify;
        }

        @media screen and (max-width: 1024px){
            width: 100%;
            padding: 0 64px;
        }
    }

    .donate-sidebar{
        position: sticky;
        top: 128px;
        width: 400px;
        min-width: 400px;
        height: 580px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.20);
        padding: 32px;
        box-sizing: border-box;
        overflow: hidden;
        color: ${colors("whiteLight")};

        h2 {
            font-size: 32px;
            font-weight: 800;
        }
        h4 {
            ${typography("m14")}
        }

        @media screen and (max-width: 1024px){
            position: fixed;
            background: #02000E;
            width: 100vw;
        }
    }
}
`;

export {DonateInfo, DonateInput};