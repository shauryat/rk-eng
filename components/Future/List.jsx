import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import LibraryAddCheckOutlinedIcon from '@material-ui/icons/LibraryAddCheckOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '350',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='w-64'>    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          RK Engineering Corporation
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
        <HomeOutlinedIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
        <AccountCircleIcon/>
        </ListItemIcon>
        <ListItemText primary="Leadership" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
        <CardTravelIcon/>
        </ListItemIcon>
        <ListItemText primary="Facilities" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <AccountTreeOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Flow Chart" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <LibraryAddCheckOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Testing Facilities" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DoneAllOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Quality Promise" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </div>

  );
}
