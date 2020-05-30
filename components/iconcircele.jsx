import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    }
  }));

  export default function CircleIcon(props) {
    const classes = useStyles();

    return (
        <Avatar className={classes.avatar}>
          {props.children}
        </Avatar>
    );
  }
  