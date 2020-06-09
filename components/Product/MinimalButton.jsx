import { Button } from '@zeit-ui/react';
import { Archive } from '@zeit-ui/react-icons';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));



const MinimalButton = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    return (
        <React.Fragment>
        <Button icon={<Archive />} effect='false' aria-label="add" type="success" aria-controls="simple-menu" aria-haspopup="false" onClick={handleClick}>
        Facilities</Button> 

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
       </React.Fragment>
 )
} 
export default MinimalButton;