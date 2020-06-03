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
    maxWidth: 340,
    height:260,
  },
  media: {
    height: 180,
  },
});

export default function ProjectCardsM({ title, imageUrl }) {
  const classes = useStyles();

  return (
<div className='mr-8 mb-4'>  
    <Card className={classes.root} elevation={0} variant='outlined'>
      <CardMedia
       component="img"
       className={classes.media}
      image={imageUrl}
        />
        <CardContent>
          <Typography component='h5' variant='h6' align='center' color='textSecondary'>
            {title}
          </Typography>
          </CardContent>
     </Card>
</div>
  );
}