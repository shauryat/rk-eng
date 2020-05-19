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
    maxWidth: 360,
    
  },
  media: {
    height: 180,
  },
});

export default function ProjectCards({ title, description, imageUrl }) {
  const classes = useStyles();

  return (
<div className='mx-2 md:mx-0'>  
    <Card className={classes.root} variant='outlined'>
      <CardActionArea>
      <CardMedia
       component="img"
       className={classes.media}
      image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Live Demo
        </Button>
      </CardActions>
    </Card>
</div>
  );
}