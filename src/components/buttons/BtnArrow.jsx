import styled from "styled-components";

const Button = styled.div`
  width: 40px;
  height: 78px;
  background: rgba(27, 27, 27, 0.8);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.1s ease-out;

  &:hover {
    background: rgba(18, 18, 18, 0.8);
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`;

const Svg = styled.svg`
  stroke: currentColor;
`;

function BtnArrow({ isRight = false, onClick }) {
  return (
    <Button onClick={onClick}>
      <Svg width="40" height="78" viewBox="0 0 40 78" fill="none">
        {isRight ? (
          <path
            d="M15 28.2128L23.8139 36.9892C24.4682 37.6406 24.4682 38.6998 23.8139 39.3512L15 48.1277"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M25 28.2128L16.1861 36.9892C15.5318 37.6406 15.5318 38.6998 16.1861 39.3512L25 48.1277"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
      </Svg>
    </Button>
  );
}

export default BtnArrow;
