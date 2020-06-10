import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SideDrawer from './SideDrawer';
import { FontRoboto } from '../portfolio.styles';
import PropTypes from 'prop-types';
import { Menu } from '@zeit-ui/react-icons'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Hidden from '@material-ui/core/Hidden';
import Link from '../../src/Link';
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import DropDown from './DropDown';



function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  const useStyles = makeStyles(theme => ({

    typography : {
      marginRight:'25px',
      '&:hover': {
      color : '#b3e5fc'  
      }
    }
  }))
  

const Header = (props) => {

    const [state, setState] = React.useState(false);
    const classes = useStyles()   


   const toggleDrawer = (value) => {
        setState(value)
    };

              
        return (
            
            <ElevationScroll {...props}>
            <div className='mb-16'>
            <AppBar 
            position="fixed"
            style={{ padding:'10px 0px' }}>
        <Toolbar>
            <div style={{flexGrow:1}} >
               <div className='text-white text-xl'> RK ENGINEERING </div>
               <div className='text-white' > CORPORATION </div>
            </div>
            
        <Hidden mdDown>              
           <Typography className={classes.typography} variant="button" component={Link} naked href="/">HOME</Typography>
           <Typography className={classes.typography} variant="button" component={Link} naked href="/">LEADERSHIP</Typography>
           <DropDown/>  
        </Hidden>  

         
              <Hidden lgUp> 
                   <Menu color="#fff" onClick={()=> setState(!state)}/>
                   </Hidden>
             

              <SideDrawer
                   open={state}
                  onClose={(value)=> toggleDrawer(value)}/>
                  
       </Toolbar>  
            </AppBar>   
                   </div>
                   </ElevationScroll>
        );
    }


export default Header;