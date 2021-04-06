import { ADD_MOVIE, DELETE_MOVIE, GET_MOVIES } from "./actions";

const defaultState = {
  movie: []
};

export function movieReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movie: [...state.movie, action.movie]
      }
    case DELETE_MOVIE:
      return console.log("deleted movie")
    
    case GET_MOVIES: 
      return ("")

    default:
      return state;
  }
}
