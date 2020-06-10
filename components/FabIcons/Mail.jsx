import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function MailExtendedIcon() {
  const classes = useStyles();

  return (
    <div>
        <Fab  variant="extended" color="primary" aria-label="add" className={classes.margin}>
          <MailOutlineOutlinedIcon className={classes.extendedIcon} />
          rkec@airtelmail.in
        </Fab>
      </div>
  );
}
