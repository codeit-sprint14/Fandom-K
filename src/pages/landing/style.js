import { motion } from "framer-motion";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import typography from "../../utils/typography";

const GlobalStyle = createGlobalStyle`
body {
    overflow: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
}
`

const Spin = keyframes`
    0% {
        transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    50% {
        transform: translateX(-50%) translateY(-50%) rotate(720deg); /* 시계 방향 720도 회전 */
    }
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(0deg);    /* 반시계 방향 720도 회전 (720도에서 0도로) */
    }
`

const PageContainer = styled.div`
  background: #02000e;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  white-space: nowrap;
`;

const SlideContainer = styled.div `
    scroll-snap-align: start;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 128px;
    font-weight: 900;
    text-align: center;
    line-height: 152px;
    position: relative;
    
    .images{
        position: absolute;
    }
    
    .doodles {
        &.img-01-01{
            top: calc(50% + 300px);
            left: calc(50% + 600px);
        }
        &.img-01-02{
            top: calc(50% + -250px);
            left: calc(50% + 360px);
            animation: ${Spin} 12s ease-in-out infinite;
        }
        &.img-01-03{
            top: calc(50% + 150px);
            left: calc(50% + 350px);
        }
        &.img-01-04{
            top: calc(50% + -250px);
            left: calc(50% + -450px);
        }
        &.img-01-05{
            top: calc(50% + 0px);
            left: calc(50% + -90px);
        }
        &.img-01-06{
            top: calc(50% + -280px);
            left: calc(50% + -20px);
        }
        &.img-01-07{
            top: calc(50% + 200px);
            left: calc(50% + -400px);
        }

        @media screen and (max-width: 1024px){
            scale: 0.9;
        }

        @media screen and (max-width: 768px){
            scale: 0.5;

            &.img-01-01{
                top: calc(50% + 300px);
                left: calc(50% + 600px);
            }
            &.img-01-02{
                top: calc(50% + -200px);
                left: calc(50% + 100px);
            }
            &.img-01-03{
                top: calc(50% + 150px);
                left: calc(50% + 150px);
            }
            &.img-01-04{
                top: calc(50% + -200px);
                left: calc(50% + -300px);
            }
            &.img-01-05{
                top: calc(50% + -60px);
                left: calc(50% + -155px);
            }
            &.img-01-06{
                top: calc(50% + -200px);
                left: calc(50% + -100px);
            }
            &.img-01-07{
                top: calc(50% + 150px);
                left: calc(50% + -300px);
            }
        }
    }

    
    .cta{
        position: absolute;
        ${typography("b16")};
        border: 2px solid white;
        border-radius: 100px;
        padding: 12px 46px 12px 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        transition: all 0.2s ease-out;
        text-shadow: 0 0 50px black;
        background: #00000040;
        backdrop-filter: blur(30px);
        z-index: 1;
        
        img {
            color: gray;
            transform: scaleX(-100%);
            transition: all 0.2s ease-out;
        }

        &.cta--00{ top: calc(50% + 270px); }
        &.cta--01{ top: 31vh; }
        &.cta--02{ top: calc(50% + 110px); left: calc(50% + 190px);}
        &.cta--03{ top: calc(50% + 120px); }
        &.cta--04{ top: calc(50% + 128px); }
        &.cta--05{ top: calc(50% + 128px); }

        @media screen and (max-width: 1024px){
            ${typography("b14")};
            padding: 8px 28px 8px 40px;
            img {
                transform: scaleX(-80%) scaleY(80%);
            }

            &.cta--00 { top: calc(50% + 200px); }
            &.cta--01 { top: calc(50% - 20%); }
            &.cta--02 { top: 300px; left: 50%; transform: translateX(-50%); }
            &.cta--03 { top: calc(50% + 90px); }
            &.cta--04 { top: calc(50% + 90px); }
            &.cta--05 { top: calc(50% + 90px); }

            @media screen and (max-width: 768px){
                &.cta--00 { top: calc(50% + 150px); }
                &.cta--01 { top: 270px; }
                &.cta--02 { top: 250px; }
                &.cta--03 { top: calc(50% + 60px); }
                &.cta--04 { top: calc(50% + 60px); }
                &.cta--05 { top: calc(50% + 60px); }
            }
        }


        &:hover {
            background: #ffffff40;

            img {
                transform: scaleX(-100%) translateX(-10px);
                @media screen and (max-width: 1024px){
                    transform: scaleX(-80%) scaleY(80%) translateX(-10px);
                }
            }
        }
    }

    &.slide-01 {
        position: relative;
        &::after{
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100vw;
            height: 150vh;
            z-index: 0;
            background: linear-gradient(90deg, rgba(97, 69, 255, 0.30) 0%, rgba(242, 0, 165, 0.30) 100%);
            filter: blur(300px);
        }
        .dimmer{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100vw;
            height: 20vh;
            z-index: 5;
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }
    }

    &.slide-05 {
        position: relative;
        h2 {z-index: 1;}

        video {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
            height: 100%;
            opacity: 0.1;
        }
    }

    .slide-00__title{
        font-size: 120px;
        line-height: 1.2;
        margin-top: 0vh;

        @media screen and (max-width: 1024px){
            font-size: 100px;
        }
        @media screen and (max-width: 768px){
            font-size: 64px;
        }
    }

    h2 {
        font-size: 60px;
        line-height: 1.4;

        &.slide-01__title{ margin-top: -60vh; z-index: 1; }
        &.slide-02__title{
            margin-right: 200px;
            text-align: left;
            @media screen and (max-width: 1024px){
                position: absolute;
                margin-right: 0px;
                top: 140px;
                text-align: center;
            }
        }
        &.slide-03__title{
            text-shadow: 0 0 100px black;
        }
        @media screen and (max-width: 1024px){ font-size: 52px; }
        @media screen and (max-width: 768px){ font-size: 32px; }
    }


    .img-card-01{
        z-index: 3;
        left: calc(50%);
        bottom: 0;
    }
    .img-card-02{
        z-index: 2;
        left: calc(50%);
        bottom: 0;
    }
    .img-card-03{
        z-index: 2;
        left: calc(50%);
        bottom: 0;
    }
    .img-card-04{
        z-index: 1;
        left: calc(50%);
        bottom: 0;
    }
    .img-card-05{
        z-index: 1;
        left: calc(50%);
        bottom: 0;
    }

    .img-profile-01 {
        left: calc(50% - 850px);
        top: calc(50% - 350px);
    }
    .img-profile-02 {
        left: calc(50% + 550px);
        top: calc(50% - 450px);
    }
    .img-profile-03 {
        left: calc(50% - 350px);
        top: calc(50% - 500px);
    }
    .img-profile-04 {
        left: calc(50% - 550px);
        top: calc(50% + 200px);
    }
    .img-profile-05 {
        left: calc(50% + 150px);
        top: calc(50% + 200px);
    }
    .img-profile-06 {
        left: calc(50% + 500px);
        top: calc(50% + 50px);
    }

    @media screen and (max-width: 1024px){
        .img-profile-01 {
            top: calc(50% - 450px);
            left: calc(50% - 300px);
        }
        .img-profile-02 {
            top: calc(50% + 100px);
            left: calc(50% - 350px);
        }
        .img-profile-03 {
            top: calc(50% - 250px);
            left: calc(50% - 500px);
        }
        .img-profile-04 {
            top: calc(50% - 350px);
            left: calc(50% + 100px);
        }
        .img-profile-05 {
            top: calc(50% + 0px);
            left: calc(50% + 150px);
        }
        .img-profile-06 {
            top: calc(50% + 70px);
            left: calc(50% - 50px);
        }
    }

    .vid-credit{
        width: 900px;
    }

    .vid-credit, .vid-crown {
        transform: 'translate3d(0,0,0)'; // gpu
        backface-visibility: 'hidden';
        image-rendering: -webkit-optimize-contrast;
        transform: translateZ(0);
        will-change: transform;
        pointer-events: none;

        @media screen and (max-width: 1024px){
            height: 70%;

            &.vid-credit{
               margin-top: 250px;
            }
        }
    }
`;

export {PageContainer, SlideContainer, GlobalStyle};