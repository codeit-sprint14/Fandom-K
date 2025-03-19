import React from "react";
import ProfileIco from "../../../../components/profiles/ProfileIco";
import * as S from "./style";

function ProfileList({ idols, selectedIdols, onSelect }) {
  return (
    <S.ScrollContainer>
      {idols.map((idol, index) => {
        const isChecked = selectedIdols.some(
          (selected) => selected.id === idol.id
        );
        return (
          <S.ProfileWrapper
            key={`${idol.id}-${index}`}
            onClick={() => onSelect(idol)}
            transition={{ duration: 0.2 }}
          >
            <ProfileIco img={idol.image} checked={isChecked} />
            <S.Name>{idol.name}</S.Name>
            <S.Group>{idol.group}</S.Group>
          </S.ProfileWrapper>
        );
      })}
    </S.ScrollContainer>
  );
}

export default ProfileList;
