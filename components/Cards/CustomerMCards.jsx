import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LazyLoad from 'react-lazy-load';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    height:260,
  },
  media: {
    height: 180,
  },
});

export default function ProjectCardsM({ title, imageUrl }) {
  const classes = useStyles();

  return (
<div className='mr-4 mb-4 inline-block'>  
    <Card className={classes.root} elevation={0} variant='outlined'>
      <LazyLoad>
      <CardMedia
       component="img"
       className={classes.media}
      image={imageUrl}
        />
        </LazyLoad>
        <CardContent>
          <Typography component='h5' variant='h6' align='center' color='textSecondary'>
            {title}
          </Typography>
          </CardContent>
     </Card>
</div>
  );
}