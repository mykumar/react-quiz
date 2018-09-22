export const SET_EARNING_DATA = "SET_EARNING_DATA";

const initialState = {
  questions: [
    {
      title: "What franchise would you rather play a game from?",
      options: ["HALO", "FIFA", "X-BOX", "FABLE"]
    },
    {
      title: "Which console would you prefer to play with friends?",
      options: ["HALO", "FIFA", "X-BOX", "PLAYSTATION"]
    }
  ]
};

const quizData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_EARNING_DATA:
      const { name, options } = payload;
      return {
        ...state,
        [name]: options
      };
    default:
      return state;
  }
};

export default quizData;

/** Action Creators */
export const setValues = (name, options) => ({
  type: SET_EARNING_DATA,
  payload: { name, options }
});
