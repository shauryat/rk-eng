import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 275,
    height:315,
  },
  media: {
    height: 180,
  },
});

export default function MachineCard({name,description,imageUrl}) {
  const classes = useStyles();

  return (
    <div className='mr-4 md:mb-4 bg-white shadow-lg rounded-lg'>
      <Card className={classes.root} elevation={0}>
        <CardMedia
           component="img"
           className={classes.media}
          image={imageUrl}        
          />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h5" color="primary">
            {name}         
             </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {description}
          </Typography>
        </CardContent>
        </Card>
    </div>
  );
}
