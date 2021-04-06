import { Grid, makeStyles, Paper, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Movie from '../Components/MovieCard'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "center",
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },

}));


export default function Home() {
    const [movies, setMovies] = useState([]);
    const [movieSearch, setMovieSearch] = useState("")
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();


    // const dispatch = useDispatch();
    const fetchMovie = () => {
        const encodedSearch = encodeURIComponent(movieSearch)
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setMovies(data.Search)
                // dispatch(data.Search)
            })
    }

    // const changeTextOnSize = (str) => {
    //     if (str.length() > 25) {

    //     }

    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchMovie();
    }

    const handleChange = (event) => {
        setMovieSearch(event.target.value)
        console.log(event.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <label htmlfor="userInput">Search for a Movie</label>
                <br></br>
                <TextField id="filled-basic" label="Search a Movie" variant="filled" name="userInput" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            <h1>Movie Results</h1>

            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={10}>
                    <Grid container justify="center" spacing={spacing}>
                        {movies.map((movie, index) => (
                            <Grid item>
                                <Movie movie={movie} key={index} className={classes.paper} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
