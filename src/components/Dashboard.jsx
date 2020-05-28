import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonIcon from '@material-ui/icons/Person';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PortraitIcon from '@material-ui/icons/Portrait';
import {Avatar} from '@material-ui/core';
import '../CSSFile/Dashboard.css';

const drawerWidth = 240;
const useStyles = makeStyles (theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1C2833',
  },
  drawerContainer: {
    overflow: 'auto',
    color: 'white',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing (3),
  },
}));

export default function ClippedDrawer () {
  const classes = useStyles ();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{backgroundColor: '#1976d2'}}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            User Management
          </Typography>
          <div className="profile">
            <Avatar
              title="Profile"
              style={{
                borderRadius: '0px',
                border: '1px solid #D5DBDB',
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Webpages'].map ((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{color: 'white '}}>
                  <FileCopyIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}

            {['Profile'].map ((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{color: 'white '}}>
                  <PortraitIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}

            {['Settings'].map ((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{color: 'white '}}>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}

            {['Users'].map ((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{color: 'white '}}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}

            {['Logout'].map ((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{color: 'white '}}>
                  <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <main className={classes.content}>
        <Toolbar />

      </main>
    </div>
  );
}
