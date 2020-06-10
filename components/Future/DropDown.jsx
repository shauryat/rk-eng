import { Button } from '@zeit-ui/react';
import { Archive } from '@zeit-ui/react-icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import Link from '../../src/Link';




const DropDown = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    return (
        <React.Fragment>
        <Button icon={<Archive />} effect='false' aria-label="add" aria-haspopup="false" onClick={handleClick} auto>
        Facilities</Button> 

         <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}
         onClose={handleClose}
         TransitionComponent={Collapse}>
           
         <MenuItem component={Link} naked href="/facilities">Flow Chart</MenuItem>
         <MenuItem component={Link} naked href="/testing">Testing Facilities</MenuItem>
         <MenuItem>Quality Promise</MenuItem>
       </Menu>
       </React.Fragment>
 )
} 
export default DropDown