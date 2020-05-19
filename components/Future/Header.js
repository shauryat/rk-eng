import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';
import Typography from '@material-ui/core/Typography';


class Header extends Component {

       state = { 
           drawerOpen: false,
           headerShow: false
             }

        componentDidMount() {
               window.addEventListener('scroll',this.handleScroll); 
             }

    handleScroll = () => {

if(window.scrollY > 0){
    this.setState ({
        headerShow:true
    })
}
 else {
    this.setState ({
        headerShow:false
    })
    
 }
    }
    
    toggleDrawer = (value) => {
        this.setState({
    drawerOpen: value
        })
    }


    render() {
        return (
            <div>
            <AppBar 
            position="fixed"
            style={{
                backgroundColor: this.state.headerShow ? '#edf2f7' : 'transparent' ,
                boxShadow:this.state.headerShow ? '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)' : 'none' ,
                padding:'10px 0px',
             }}>
        <Toolbar>
            <div style={{flexGrow:1}}>
               <div className='text-indigo-400' > Shaurya </div>
               <div className='text-indigo-300' >.com </div>
            </div>
               <IconButton color='primary' aria-label='Menu' onClick={()=> this.toggleDrawer(true)}> 
                 <MenuIcon/>
             </IconButton>
              <SideDrawer
                   open={this.state.drawerOpen}
                  onClose={(value)=> this.toggleDrawer(value)}/>
       </Toolbar>
            </AppBar>   
            </div>
        );
    }
}

export default Header;