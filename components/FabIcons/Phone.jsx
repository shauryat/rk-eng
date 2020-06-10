import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function PhoneExtendedIcon() {
  const classes = useStyles();

  return (
    <div>
        <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}>
          <PhoneOutlinedIcon className={classes.extendedIcon} />
          9810162130
        </Fab>
      </div>
  );
}
