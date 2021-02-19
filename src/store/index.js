const initialState = {
  results: [],
  info: { next: undefined },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_RESULTS':
      return { ...state, results: action.results };
    case 'CHANGE_INFO':
      return { ...state, info: action.info };
    default:
      return state;
  }
};

export { initialState, reducer };
