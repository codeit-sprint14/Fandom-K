import React from "react";
import ProfileIco from "../../../../components/profiles/ProfileIco";
import BtnDelete from "../../../../components/buttons/BtnDelete";
import {
  ListedContainer,
  List,
  ProfileWrapper,
  ProfileIcoContainer,
  DeleteButtonWrapper,
  Name,
  Group,
} from "./style";

function ListedProfiles({ idols, onRemove }) {
  return (
    <ListedContainer>
      {idols.length === 0 ? (
        <div style={{ textAlign: "center", padding: "20px", color: "#aaa" }}>
          관심 있는 아이돌을 추가해 보세요!
        </div>
      ) : (
        <List>
          {idols.map((idol) => (
            <ProfileWrapper key={idol.id}>
              <ProfileIcoContainer>
                <ProfileIco img={idol.image} />
              </ProfileIcoContainer>
              <DeleteButtonWrapper>
                <BtnDelete
                  clickHandler={() => {
                    onRemove(idol.id);
                  }}
                />
              </DeleteButtonWrapper>
              <Name>{idol.name}</Name>
              <Group>{idol.group}</Group>
            </ProfileWrapper>
          ))}
        </List>
      )}
    </ListedContainer>
  );
}

export default ListedProfiles;
