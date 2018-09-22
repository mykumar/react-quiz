import { setValues } from "./quizData";

export const getAndSetValues = (name, options) => dispatch => {
  dispatch(setValues(name, options));
};
