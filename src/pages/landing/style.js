import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    overflow: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
}
`

const PageContainer = styled.div`
  background: #02000e;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
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
    
    .img-01-01{
        top: calc(50% + 300px);
        left: calc(50% + 600px);
    }
    .img-01-02{
        top: calc(50% + -250px);
        left: calc(50% + 360px);
    }
    .img-01-03{
        top: calc(50% + 150px);
        left: calc(50% + 350px);
    }
    .img-01-04{
        top: calc(50% + -250px);
        left: calc(50% + -450px);
    }
    .img-01-05{
        top: calc(50% + 0px);
        left: calc(50% + -90px);
    }
    .img-01-06{
        top: calc(50% + -280px);
        left: calc(50% + -20px);
    }
    .img-01-07{
        top: calc(50% + 200px);
        left: calc(50% + -400px);
    }
    
    .slide-01{
        font-size: 80px;
        line-height: 100px;
        margin-top: -650px;
    }

    .img-card-01{
        z-index: 3;
        top: calc(100% - 400px);
        left: calc(50%);
    }
    .img-card-02{
        z-index: 2;
        top: calc(100% - 350px);
        left: calc(50%);
    }
    .img-card-03{
        z-index: 2;
        top: calc(100% - 350px);
        left: calc(50%);
    }
    .img-card-04{
        top: calc(100% - 350px);
        left: calc(50%);
    }
    .img-card-05{
        top: calc(100% - 350px);
        left: calc(50%);
    }


    .slide-02{
        font-size: 80px;
        line-height: 100px;
        margin-right: 200px;
        text-align: left;
    }

    .vid-credit{
        width: 900px;
    }
`;

export {PageContainer, SlideContainer, GlobalStyle};