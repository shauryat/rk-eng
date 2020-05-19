import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Bookmark from '@material-ui/icons/MessageOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Like from '@material-ui/icons/ThumbUpOutlined';




const SideDrawer = (props) => {
    return (
        <Drawer 
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false)}
        
        >

     <List component="nav" className="drawer_color">
     <ListItem button >
     <IconButton color="inherit"> 
<HomeIcon/>

          </IconButton>

     Home
     
     </ListItem>

     <ListItem button >
    
     <IconButton color="inherit"> 
<Bookmark/>

          </IconButton>

      Contact US

     </ListItem>


<a target="_blank" href="https://www.facebook.com/ismun19/?epa=SEARCH_BOX">

     <ListItem button >
     <IconButton color="inherit"> 
<Like/>

          </IconButton>

   Facebook Page
     </ListItem>

     </a>
    
     </List>

            
        </Drawer>
    );
};

export default SideDrawer;