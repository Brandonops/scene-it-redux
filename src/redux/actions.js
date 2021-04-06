export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const GET_MOVIES = "GET_MOVIES";
export const createdAddMovie = (movie) => {
    return {
        type: ADD_MOVIE,
        movie
    }
}

export const createdDeleteMovie = (movie) => {
    return {
        type: DELETE_MOVIE,
        movie
    }
}

export const getMovies = (movie) => {
    return {
        type: GET_MOVIES,
        movie
    }
}