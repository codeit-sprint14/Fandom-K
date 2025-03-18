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
      <ListedContainer>
        {idols.length === 0 ? (
          <EmptyMessage>관심 있는 아이돌을 추가해 보세요!</EmptyMessage>
        ) : (
          <AnimatePresence mode="popLayout">
            {idols.map((idol) => (
              <ProfileWrapper
                key={idol.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ProfileIcoContainer>
                  <ProfileIco img={idol.image} />
                </ProfileIcoContainer>
                <DeleteButtonWrapper>
                  <BtnDelete clickHandler={() => onRemove(idol.id)} />
                </DeleteButtonWrapper>
                <Name>{idol.name}</Name>
                <Group>{idol.group}</Group>
              </ProfileWrapper>
            ))}
          </AnimatePresence>
        )}
      </ListedContainer>
    </ScrollContainer>
  );
}

export default ListedProfiles;
