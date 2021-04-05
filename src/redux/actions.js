export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const createdAddMovie = () => {
    return {
        type: ADD_MOVIE,
    }
}

export const createdDeleteMovie = () => {
    return {
        type: DELETE_MOVIE,
    }
}