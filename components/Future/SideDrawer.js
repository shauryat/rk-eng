import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Bookmark from '@material-ui/icons/MessageOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Like from '@material-ui/icons/ThumbUpOutlined';
import NestedList from './List';




const SideDrawer = (props) => {
    return (
        <Drawer 
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false)}
         >
<NestedList/>
   
        </Drawer>
    );
};

export default SideDrawer;