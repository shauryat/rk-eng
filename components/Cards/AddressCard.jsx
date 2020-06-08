import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DirectionsOutlinedIcon from '@material-ui/icons/DirectionsOutlined';
import LazyLoad from 'react-lazy-load';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function AddressCard({name,address,imageUrl}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardActionArea>
      <LazyLoad>
        <CardMedia
         component="img"
         className={classes.media}
        image={imageUrl}
        />
        </LazyLoad>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <DirectionsOutlinedIcon style={{marginRight:'5'}}/>  Directions
        </Button>
      </CardActions>
    </Card>
  );
}
