import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}
        aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
          <CardTravelIcon className={classes.extendedIcon} />
          Facilites
        </Fab>

        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Flow Chart</MenuItem>
        <MenuItem onClick={handleClose}>Testing Facilities</MenuItem>
        <MenuItem onClick={handleClose}>Quality Promise</MenuItem>
      </Menu>
      </div>
  );
}
