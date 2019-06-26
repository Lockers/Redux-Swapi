import {FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  fetch: false,
  characters: [],
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FAILURE:
      return { ...state, fetching: false, error: action.payload }
    case SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      }
    default:
      return state;
  }
};
