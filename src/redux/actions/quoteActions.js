import { Types } from "../constant/type";
export const getQuote = (quote) => {
  return {
    type: Types.GET_QUOTE,
    payload: quote,
  };
};
