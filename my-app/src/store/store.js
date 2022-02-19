import { createStore } from "redux";

const initialState = {
  search: [],
};

function reducerSearch(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case "SET_SEARCH": {
      return {
        ...state,
        search: action.payload, // [{}, {}]
      };
    }

    default: {
      return state;
    }
  }
}

export const store = createStore(
  reducerSearch,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
