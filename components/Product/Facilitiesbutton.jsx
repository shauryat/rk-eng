import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CardTravelIcon from '@material-ui/icons/CardTravel';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FacilitiesExtendedIcon() {
  const classes = useStyles();

  return (
    <div>
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
          <CardTravelIcon className={classes.extendedIcon} />
          Facilites
        </Fab>
      </div>
  );
}
