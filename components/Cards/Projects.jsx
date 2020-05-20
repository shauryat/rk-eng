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
    maxWidth: 361,
    minHeight: 280,
    maxHeight:280,
    
  },
  media: {
    minHeight: 180,
    maxHeight:180,
  },
});

export default function ProjectCards({ title, description, imageUrl }) {
  const classes = useStyles();

  return (
<div className='-mr-2'>  
    <Card className='-mr-12 w-64 h-56' variant='outlined'>
      <CardActionArea>
      <CardMedia
       component="img"
       className='w-32 h-32'
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