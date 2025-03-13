import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as S from "./style";

function Landing() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: targetRef,
    offset: ["start start", "end end"],
  });
  const dv = (1 / 5).toFixed(3);
  const A_1_Y = useTransform(scrollYProgress, [0, dv / 2], [0, -800]);

  const B_1_Y = useTransform(scrollYProgress, [0, dv], [-100, 0]);
  const B_1_S = useTransform(scrollYProgress, [0, dv], [2, 1]);
  const B_1_B = useTransform(
    scrollYProgress,
    [0, dv],
    ["blur(50px)", "blur(0px)"]
  );

  const B_2_X = useTransform(scrollYProgress, [0, dv], [0, -400]);
  const B_2_Y = useTransform(scrollYProgress, [0, dv], [-100, 50]);
  const B_2_R = useTransform(scrollYProgress, [0, dv], [0, -7]);

  const B_3_X = useTransform(scrollYProgress, [0, dv], [0, 400]);
  const B_3_R = useTransform(scrollYProgress, [0, dv], [0, 7]);

  const B_4_X = useTransform(scrollYProgress, [0, dv], [0, -800]);
  const B_4_Y = useTransform(scrollYProgress, [0, dv], [-100, 200]);
  const B_4_R = useTransform(scrollYProgress, [0, dv], [0, -14]);

  const B_5_X = useTransform(scrollYProgress, [0, dv], [0, 800]);
  const B_5_R = useTransform(scrollYProgress, [0, dv], [0, 14]);

  return (
    <>
      <S.GlobalStyle />

      <S.PageContainer ref={targetRef}>
        <S.SlideContainer index={0}>
          {Array(7)
            .fill("")
            .map((_, i) => {
              return (
                <motion.img
                  className={`images img-01-0${i + 1}`}
                  initial={{ x: "-50%", y: "-50%" }}
                  style={{
                    translateY: A_1_Y,
                  }}
                  center
                  src={`src/assets/images/landing/img-landing-0${i + 1}.png`}
                  alt=""
                />
              );
            })}
          내 최애에게
          <br />한 걸음 더<br />
          다가가는 법
        </S.SlideContainer>
        <S.SlideContainer index={1}>
          <motion.img
            className={`images img-card-01`}
            initial={{ x: "-50%", y: "-50%" }}
            style={{
              translateY: B_1_Y,
              scale: B_1_S,
              filter: B_1_B,
            }}
            src={`src/assets/images/landing/img-landing-card-01.png`}
            alt=""
          />
          <motion.img
            className={`images img-card-02`}
            initial={{ x: "-50%", y: "-50%" }}
            style={{
              translateX: B_2_X,
              translateY: B_2_Y,
              rotate: B_2_R,
              scale: B_1_S,
              filter: B_1_B,
            }}
            src={`src/assets/images/landing/img-landing-card-02.png`}
            alt=""
          />
          <motion.img
            className={`images img-card-03`}
            initial={{ x: "-50%", y: "-50%" }}
            style={{
              translateX: B_3_X,
              translateY: B_2_Y,
              rotate: B_3_R,
              scale: B_1_S,
              filter: B_1_B,
            }}
            src={`src/assets/images/landing/img-landing-card-03.png`}
            alt=""
          />
          <motion.img
            className={`images img-card-04`}
            initial={{ x: "-50%", y: "-50%" }}
            style={{
              translateX: B_4_X,
              translateY: B_4_Y,
              rotate: B_4_R,
              scale: B_1_S,
              filter: B_1_B,
            }}
            src={`src/assets/images/landing/img-landing-card-04.png`}
            alt=""
          />
          <motion.img
            className={`images img-card-05`}
            initial={{ x: "-50%", y: "-50%" }}
            style={{
              translateX: B_5_X,
              translateY: B_4_Y,
              rotate: B_5_R,
              scale: B_1_S,
              filter: B_1_B,
            }}
            src={`src/assets/images/landing/img-landing-card-05.png`}
            alt=""
          />
          <p className="slide-01">
            잊지 못할 순간을
            <br />
            후원으로 선물해보세요
          </p>
        </S.SlideContainer>
        <S.SlideContainer index={2}>
          <motion.video
            className="vid-credit"
            src="src/assets/videos/vid-credit.mp4"
          ></motion.video>
          <p className="slide-02">
            좋아하는 아티스트를
            <br />
            이달의 아이돌로
            <br />
            만들어주세요
          </p>
        </S.SlideContainer>
        <S.SlideContainer index={3}>
          크레딧으로
          <br />
          쉽게 후원해요
        </S.SlideContainer>
        <S.SlideContainer index={4}>
          관심있는 아티스트를
          <br />한 곳에 모아보세요
        </S.SlideContainer>
        <S.SlideContainer index={5}>
          준비 되셨나요?
          <br />
          지금 바로 시작해봐요!
        </S.SlideContainer>
      </S.PageContainer>
    </>
  );
}
export default Landing;
