import { Types } from "../constant/type";
export const getQuotes = (quote) => {
  return {
    type: Types.GET_QUOTE,
    payload: quote,
  };
};
