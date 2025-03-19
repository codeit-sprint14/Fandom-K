import { Link } from "react-router-dom";
import * as S from "../styles/Card.styles";
import CircularProgressBar from "./CircularProgressBar";

const Card = ({ donation, isLoading }) => {
  if (isLoading) {
    return (
      <S.CardContainer>
        <S.ImageWrapper>
          <S.SkeletonImage />
        </S.ImageWrapper>
        <S.InfoContainer>
          <S.TextContainer>
            <S.SkeletonTitle />
            <S.SkeletonSubtitle />
          </S.TextContainer>
          <S.SkeletonDday />
        </S.InfoContainer>
        <S.SkeletonButton />
      </S.CardContainer>
    );
  }

  const buttonLabel = donation.isGoalReached ? "추가 후원하기" : "후원하기";
  const isUrgent = donation.daysLeft <= 7;

  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <S.DonationImage src={donation.image} alt={donation.subtitle} />
        <S.ProgressWrapper>
          <CircularProgressBar progress={donation.progress} />
          <S.ProgressText>{donation.progress}%</S.ProgressText>
        </S.ProgressWrapper>
      </S.ImageWrapper>
      <S.InfoContainer>
        <S.TextContainer>
          <S.Subtitle>{donation.subtitle}</S.Subtitle>
          <S.Title>{donation.title}</S.Title>
        </S.TextContainer>
        <S.DaysLeft $isUrgent={isUrgent}>D-{donation.daysLeft}</S.DaysLeft>
      </S.InfoContainer>
      <Link
        to={`/donation/${donation.idolId}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <S.Button>{buttonLabel}</S.Button>
      </Link>
    </S.CardContainer>
  );
};

export default Card;
