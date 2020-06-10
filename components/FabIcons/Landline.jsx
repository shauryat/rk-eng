import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function LandlineExtendedIcon() {
  const classes = useStyles();

  return (
    <div>
        <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}>
          <PermPhoneMsgOutlinedIcon className={classes.extendedIcon} />
          012042831012
        </Fab>
      </div>
  );
}
