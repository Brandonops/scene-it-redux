import { Grid, makeStyles } from '@material-ui/core'
import createSpacing from '@material-ui/core/styles/createSpacing'
import React from 'react'
import { useSelector } from 'react-redux'
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

export default function Watchlist() {
    const classes = useStyles();
    const movies = useSelector((state) => state.movies)
    return (
        <div>
            <h1>My movies</h1>


            {movies.map((movie) => {
                return ( 
                    <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={10} sm={6} lg={3} >
                        <Grid container justify="center" spacing={createSpacing}>
                            {movies.map((movie, index) => (
                                <Grid item>
                                    <Movie movie={movie} key={index} className={classes.paper} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                )
            })}
        </div>
    )
}
