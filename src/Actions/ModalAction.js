import { OPEN_MODAL } from "../Type/ModalType";
export const openModal = (openClose, content) => {
  return {
    type: OPEN_MODAL,
    payload: {
      openClose,
      content,
    },
  };
};
