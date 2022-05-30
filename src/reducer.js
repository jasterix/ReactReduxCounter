const initialState = {
  counter: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      return { ...state };
  }
}

export const { increment, decrement } = reducer;
