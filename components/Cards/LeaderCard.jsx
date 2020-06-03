import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 305,
    height:372
  },
  media: {
    height: 170,
  },
});

export default function LeaderCard({name,description,imageUrl}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
        <CardMedia
         component="img"
         className={classes.media}
        image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" color="secondary">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {description}
          </Typography>
        </CardContent>
    </Card>
  );
}
