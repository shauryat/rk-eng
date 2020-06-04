import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupFacilities() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button>Flow Chart</Button>
        <Button>Testing Facilities</Button>
        <Button>Quality Promise</Button>
      </ButtonGroup>
    </div>
  );
}
