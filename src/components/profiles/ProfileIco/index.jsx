import * as S from "./style.js";

function ProfileIco({ checked = false, onMouseEnter, onMouseLeave, img }) {
  return (
    <S.Ring onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {checked && (
        <S.Checked>
          <S.CheckedBackground />
          <S.Svg src="src/assets/icons/ic-check.svg" />
        </S.Checked>
      )}
      <S.Img img={img} />
    </S.Ring>
  );
}

export default ProfileIco;
