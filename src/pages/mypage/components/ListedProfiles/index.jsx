import React from "react";
import ProfileIco from "../../../../components/profiles/ProfileIco";
import BtnDelete from "../../../../components/buttons/BtnDelete";
import { AnimatePresence } from "framer-motion";
import {
  ScrollContainer,
  ListedContainer,
  ProfileWrapper,
  ProfileIcoContainer,
  DeleteButtonWrapper,
  Name,
  Group,
  EmptyMessage,
} from "./style";

function ListedProfiles({ idols, onRemove }) {
  return (
    <ScrollContainer>
      <ListedContainer layout>
        {idols.length === 0 ? (
          <EmptyMessage>관심 있는 아이돌을 추가해 보세요!</EmptyMessage>
        ) : (
          <>
            {idols.map((idol) => (
              <ProfileWrapper
                key={idol.id}
                layout
                transition={{
                  layout: { duration: 0.1, ease: "easeOut" },
                }}
                onClick={() => onRemove(idol.id)}
              >
                <ProfileIcoContainer>
                  <ProfileIco img={idol.image} />
                </ProfileIcoContainer>
                <DeleteButtonWrapper>
                  <BtnDelete />
                </DeleteButtonWrapper>
                <Name>{idol.name}</Name>
                <Group>{idol.group}</Group>
              </ProfileWrapper>
            ))}
          </>
        )}
      </ListedContainer>
    </ScrollContainer>
  );
}

export default ListedProfiles;
