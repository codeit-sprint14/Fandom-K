import * as S from "../styles/Card.styles";

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

  const isGoalReached = donation.isGoalReached || donation.progress >= 100;
  const buttonLabel = donation.isGoalReached ? "추가 후원하기" : "후원하기";
  const isUrgent = donation.daysLeft <= 7;

  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <S.DonationImage src={donation.image} alt={donation.subtitle} />
        <S.Progress>{donation.progress}%</S.Progress>
        {isGoalReached && (
          <S.GoalReached>후원 목표를 달성했어요!</S.GoalReached>
        )}
      </S.ImageWrapper>
      <S.InfoContainer>
        <S.TextContainer>
          <S.Subtitle>{donation.subtitle}</S.Subtitle>
          <S.Title>{donation.title}</S.Title>
        </S.TextContainer>
        <S.DaysLeft $isUrgent={isUrgent}>D-{donation.daysLeft}</S.DaysLeft>
      </S.InfoContainer>
      <S.Button>{buttonLabel}</S.Button>
    </S.CardContainer>
  );
};

export default Card;
