import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createdAddMovie, createdDeleteMovie } from '../redux/actions'

export default function Movie(props) {
    const movie = useSelector((state) => state[props.movie]);
    const dispatch = useDispatch();
    const useStyles = makeStyles({
        card: {
            maxWidth: 345,
            maxheight: 700,
            margin: 60

        },
        img: {
            height: 500
        },
        descriptionText: {
            textAlign: "center"
        },
        flexDisplay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        caption: {
            maxHeight: 92.4
        }
    });
    const classes = useStyles();


    const addMovie = () => {
        console.log(movie)
        dispatch(createdAddMovie(movie))
    }

    const deleteMovie = () => {
        dispatch(createdDeleteMovie(movie))
    }

    return (
        <div>
            <Card className={`${classes.card} ${classes.descriptionText}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={`${props.movie.Poster}`}
                        title="Contemplative Reptile"
                        className={classes.img}
                    />
                    <CardContent className={classes.caption}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.movie.Title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.movie.Year}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.flexDisplay}>
                    <Button size="small" color="primary" onClick={addMovie} className={classes.descriptionText}>
                        Add to favorites
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
