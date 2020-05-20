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
    height:280,
  },
  media: {
    height: 180,
  },
});

export default function ProjectCards({ title, description, imageUrl }) {
  const classes = useStyles();

  return (
<div className='mr-4 mb-4'>  
    <Card className={classes.root} variant='outlined'>
      <CardActionArea>
      <CardMedia
       component="img"
       className={classes.media}
      image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
     </Card>
</div>
  );
}