import { createContext, useState, useContext } from "react";
import ModalCharge from "../components/modals/ModalCharge";
import ModalVote from "../components/modals/ModalVote";

const ModalContext = createContext();

export const MODAL_TYPES = {
  CHARGE: "CHARGE",
  VOTE: "VOTE",
};

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    type: null,
    props: {},
    isOpen: false,
  });

  const openModal = (type, props = {}) => {
    setModal({
      type,
      props,
      isOpen: true,
    });
  };

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const renderModal = () => {
    switch (modal.type) {
      case MODAL_TYPES.CHARGE:
        return <ModalCharge {...modal.props} />;
      case MODAL_TYPES.VOTE:
        return <ModalVote {...modal.props} />;
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {modal.isOpen && renderModal()}
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);

  const { openModal, closeModal } = context;
  return { openModal, closeModal };
};

export { ModalProvider, useModal };
