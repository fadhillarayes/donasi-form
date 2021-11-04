import { Types } from "../constant/type";

const initialState = {
  data: [],
};

export const quoteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.GET_QUOTE:
      return { ...state, data: payload };
    default:
      return state;
  }
};
