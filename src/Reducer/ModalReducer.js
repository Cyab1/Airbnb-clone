import { OPEN_MODAL } from "../Type/ModalType";

const initialState = { openClose: "closed", content: "" };

export const ModalReducer = (state = initialState, action) => {
  if (action.type === OPEN_MODAL) {
    return action.payload;
  }
  return state;
};
