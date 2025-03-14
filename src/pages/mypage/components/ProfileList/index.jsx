import React from "react";
import ProfileIco from "../../../../components/profiles/ProfileIco";
import * as S from "./style";

function ProfileList({ idols, selectedIdols, onSelect }) {
  return (
    <S.ListedContainer>
      {idols.map((idol) => {
        const isChecked = selectedIdols.some(
          (selected) => selected.id === idol.id
        );
        return (
          <S.ProfileWrapper key={idol.id} onClick={() => onSelect(idol)}>
            <ProfileIco img={idol.image} checked={isChecked} />
            <S.Name>{idol.name}</S.Name>
            <S.Group>{idol.group}</S.Group>
          </S.ProfileWrapper>
        );
      })}
    </S.ListedContainer>
  );
}

export default ProfileList;
