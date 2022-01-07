import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Speech from '../speech/speech';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();


    return (
        <Card className={classes.root} style={{ marginRight: "20px", marginTop: "20px", position: "relative" }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={props.imageUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title+ " "}

                        <Speech text={props.title} play={true} />

                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                        <br />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                <a href={props.url} style={{ position: "absolute", bottom: "1px", marginTop: "0px", textDecoration: "none", color: "black" }} >
                    <Button size="small" color="primary" >
                        Learn More
        </Button>
                </a>
            </CardActions>

        </Card >
    );
}