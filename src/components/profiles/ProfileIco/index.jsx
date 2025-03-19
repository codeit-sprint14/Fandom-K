import * as S from "./style.js";
import CheckImg from "../../../assets/icons/ic-check.svg";

function ProfileIco({ checked = false, onMouseEnter, onMouseLeave, img }) {
  return (
    <S.Ring onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {checked && (
        <S.Checked>
          <S.CheckedBackground />
          <S.Svg src={CheckImg} />
        </S.Checked>
      )}
      <S.Img img={img} />
    </S.Ring>
  );
}

export default ProfileIco;
