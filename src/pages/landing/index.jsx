import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import * as S from "./style";
import { Link } from "react-router-dom";

function Landing() {
  const targetRef = useRef(null);
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  const videoUpdater = (videoRef, target) => {
    if (!videoRef.current) return;

    const current = videoRef.current.currentTime;
    const newTime = current + (target - current) * 0.2;

    // 시간보정 - 나중에 수정
    if (Math.abs(newTime - current) > 0.03) {
      videoRef.current.currentTime = newTime;
    }
  };

  const [videoDuration, setVideoDuration] = useState(0);
  const [videoDuration2, setVideoDuration2] = useState(0);
  const [winH, setWinH] = useState(window.innerHeight);

  const { scrollYProgress } = useScroll({
    container: targetRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", () => {
        setVideoDuration(videoRef.current.duration);
      });
    }
  }, []);

  useEffect(() => {
    if (videoRef2.current) {
      videoRef2.current.addEventListener("loadedmetadata", () => {
        setVideoDuration2(videoRef2.current.duration);
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWinH(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dv = (1 / 5).toFixed(3);
  const A_1_Y = useTransform(scrollYProgress, [0, dv / 2], [0, -80]);

  const B_1_Y = useTransform(scrollYProgress, [0, dv], [winH / 2.5, 0]);
  const B_1_S = useTransform(scrollYProgress, [0, dv], [winH / 1, winH / 2.5]);
  const B_1_B = useTransform(
    scrollYProgress,
    [0, dv],
    ["blur(50px)", "blur(0px)"]
  );

  const B_2_X = useTransform(scrollYProgress, [0, dv * 1.2], [0, -400]);
  const B_2_Y = useTransform(scrollYProgress, [0, dv], [winH / 2.5, winH / 30]);
  const B_2_R = useTransform(scrollYProgress, [0, dv], [0, -7]);

  const B_3_X = useTransform(scrollYProgress, [0, dv * 1.2], [0, 400]);
  const B_3_R = useTransform(scrollYProgress, [0, dv], [0, 7]);

  const B_4_X = useTransform(scrollYProgress, [0, dv * 1.2], [0, -800]);
  const B_4_Y = useTransform(scrollYProgress, [0, dv], [winH / 2.5, winH / 10]);
  const B_4_R = useTransform(scrollYProgress, [0, dv], [0, -14]);

  const B_5_X = useTransform(scrollYProgress, [0, dv * 1.2], [0, 800]);
  const B_5_R = useTransform(scrollYProgress, [0, dv], [0, 14]);

  const C_1_V = useTransform(
    scrollYProgress,
    [dv * 1, dv * 2.2],
    [0, videoDuration]
  );

  const C_1_Y = useTransform(scrollYProgress, [dv, dv * 2], [1000, 0]);

  const D_1_Y = useTransform(scrollYProgress, [dv * 2, dv * 3], [1000, 0]);
  const D_1_R = useTransform(scrollYProgress, [dv * 2, dv * 3], [0, 10]);
  const D_1_V = useTransform(
    scrollYProgress,
    [dv * 2, dv * 3.2],
    [0, videoDuration2]
  );

  const E_1_S = useTransform(scrollYProgress, [dv * 3, dv * 4.2], [0, 1]);
  const E_2_S = useTransform(scrollYProgress, [dv * 3, dv * 4.2], [0, 0.8]);
  const E_3_S = useTransform(scrollYProgress, [dv * 3, dv * 4.2], [0, 0.5]);
  const E_4_S = useTransform(scrollYProgress, [dv * 3, dv * 4.2], [0, 0.5]);
  const E_5_S = useTransform(scrollYProgress, [dv * 3, dv * 4.2], [0, 0.8]);
  const E_6_S = useTransform(scrollYProgress, [dv * 3, dv * 4.2], [0, 0.4]);

  const throttledVideoHandler = (videoRef) =>
    throttle((target) => videoUpdater(videoRef, target), 0.016);

  useMotionValueEvent(C_1_V, "change", throttledVideoHandler(videoRef));
  useMotionValueEvent(D_1_V, "change", throttledVideoHandler(videoRef2));

  return (
    <>
      <S.GlobalStyle />

      <S.PageContainer ref={targetRef}>
        <S.SlideContainer className="slide-00" index={0}>
          {Array(7)
            .fill("")
            .map((_, i) => {
              return (
                <motion.img
                  className={`images doodles img-01-0${i + 1}`}
                  initial={{ x: "-50%", y: "-50%" }}
                  style={{
                    translateY: A_1_Y,
                  }}
                  center
                  src={`images/landing/img-landing-0${i + 1}.png`}
                  alt=""
                />
              );
            })}
          <p className="slide-00__title">
            내 최애에게
            <br />한 걸음 더<br />
            다가가는 법
          </p>
          <Link to="/list" className="cta cta--00">
            시작하기
            <img src="src/assets/icons/ic-arrow.svg" />
          </Link>
        </S.SlideContainer>
        <S.SlideContainer index={1} className="slide-01">
          <div className="dimmer" />
          <motion.img
            className={`images img-card-01`}
            initial={{ x: "-50%" }}
            style={{
              translateY: B_1_Y,
              width: B_1_S,
              filter: B_1_B,
            }}
            src={`/images/landing/img-landing-card-01.png`}
            alt=""
          />
          <motion.img
            className={`images img-card-02`}
            initial={{ x: "-50%" }}
            style={{
              translateX: B_2_X,
              translateY: B_2_Y,
              rotate: B_2_R,
              width: B_1_S,
              filter: B_1_B,
            }}
            src={`/images/landing/img-landing-card-02.png`}
            alt=""
          />
          <motion.img
            className={`images img-card-03`}
            initial={{ x: "-50%" }}
            style={{
              translateX: B_3_X,
              translateY: B_2_Y,
              rotate: B_3_R,
              width: B_1_S,
              filter: B_1_B,
            }}
            src={`images/landing/img-landing-card-03.png`}
            alt=""
          />
          <motion.img
            className={`images img-card-04`}
            initial={{ x: "-50%" }}
            style={{
              translateX: B_4_X,
              translateY: B_4_Y,
              rotate: B_4_R,
              width: B_1_S,
              filter: B_1_B,
            }}
            src={`images/landing/img-landing-card-04.png`}
            alt=""
          />
          <motion.img
            className={`images img-card-05`}
            initial={{ x: "-50%" }}
            style={{
              translateX: B_5_X,
              translateY: B_4_Y,
              rotate: B_5_R,
              width: B_1_S,
              filter: B_1_B,
            }}
            src={`images/landing/img-landing-card-05.png`}
            alt=""
          />
          <h2 className="slide-01__title">
            잊지 못할 순간을
            <br />
            후원으로 선물해보세요
          </h2>
          <Link to="/list" className="cta cta--01">
            지금 참여하기
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ rotate: "180deg" }}
            >
              <path
                d="M16 19L9 12L16 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </S.SlideContainer>
        <S.SlideContainer
          style={{ background: "#02000E", zIndex: "4" }}
          index={2}
        >
          <motion.video
            ref={videoRef}
            muted
            playsinline
            preload="auto"
            disableRemotePlayback
            disablePictureInPicture
            onLoadedMetadata={(e) => {
              e.target.currentTime = 0.1;
              setVideoDuration(e.target.duration);
            }}
            className="vid-credit"
            src="videos/vid-credit.mp4"
            style={{
              translateY: C_1_Y,
              mixBlendMode: "screen",
            }}
          />
          <h2 className="slide-02__title">
            크레딧으로
            <br />
            쉽게 후원해요
          </h2>
          <Link to="/list" className="cta cta--02">
            30,000 크레딧 받고 시작하기
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ rotate: "180deg" }}
            >
              <path
                d="M16 19L9 12L16 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </S.SlideContainer>
        <S.SlideContainer index={3}>
          <motion.video
            ref={videoRef2}
            muted
            playsinline
            preload="auto"
            disableRemotePlayback
            disablePictureInPicture
            onLoadedMetadata={(e) => {
              e.target.currentTime = 0.1;
              setVideoDuration(e.target.duration);
            }}
            className="vid-crown"
            src="videos/vid-crown.mp4"
            style={{
              mixBlendMode: "screen",
              translateY: D_1_Y,
              rotate: D_1_R,
              position: "absolute",
              opacity: 0.5,
            }}
          />
          <h2
            className="slide-03__title"
            style={{
              zIndex: 0,
            }}
          >
            좋아하는 아티스트를
            <br />
            이달의 아이돌로 만들어주세요
          </h2>
          <Link to="/list" className="cta cta--03">
            지금 참여하러 가기
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ rotate: "180deg" }}
            >
              <path
                d="M16 19L9 12L16 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </S.SlideContainer>
        <S.SlideContainer index={4}>
          <motion.img
            className={`images img-profile-01`}
            style={{
              scale: E_1_S,
            }}
            src={`images/landing/img-landing-profile-01.png`}
            alt=""
          />
          <motion.img
            className={`images img-profile-02`}
            style={{
              scale: E_2_S,
            }}
            src={`images/landing/img-landing-profile-02.png`}
            alt=""
          />
          <motion.img
            className={`images img-profile-03`}
            style={{
              scale: E_3_S,
            }}
            src={`images/landing/img-landing-profile-03.png`}
            alt=""
          />
          <motion.img
            className={`images img-profile-04`}
            style={{
              scale: E_4_S,
            }}
            src={`images/landing/img-landing-profile-04.png`}
            alt=""
          />
          <motion.img
            className={`images img-profile-05`}
            style={{
              scale: E_5_S,
            }}
            src={`images/landing/img-landing-profile-05.png`}
            alt=""
          />
          <motion.img
            className={`images img-profile-06`}
            style={{
              scale: E_6_S,
            }}
            src={`images/landing/img-landing-profile-06.png`}
            alt=""
          />
          <h2 className="slide-04__title">
            관심있는 아티스트를
            <br />한 곳에 모아보세요
          </h2>
          <Link to="/list" className="cta cta--04">
            구경하기
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ rotate: "180deg" }}
            >
              <path
                d="M16 19L9 12L16 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </S.SlideContainer>
        <S.SlideContainer index={5} className="slide-05">
          <h2 className="slide-05__title">
            준비 되셨나요?
            <br />
            지금 바로 시작해봐요!
          </h2>
          <Link to="/list" className="cta cta--05">
            30,000 크레딧 받고 시작하기
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ rotate: "180deg" }}
            >
              <path
                d="M16 19L9 12L16 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <video
            src="videos/vid-carousel.mp4"
            muted
            playsInline
            loop
            preload="auto"
            disableRemotePlayback
            autoPlay
            disablePictureInPicture
          />
        </S.SlideContainer>
      </S.PageContainer>
    </>
  );
}
export default Landing;
