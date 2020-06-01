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
import 'semantic-ui-css/semantic.min.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DashboardIcon from '../Assets/speed.png';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import Profile from '../components/Profile';
import Collapse from '@material-ui/core/Collapse';

const drawerWidth = 268;
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
    color: '#E5E7E9',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing (3),
  },
}));

export default function ClippedDrawer (props) {
  let userName = localStorage.getItem ('UserName');
  const classes = useStyles ();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleLoginChange = () => {
    console.log (props);
    localStorage.removeItem ('Token');
    localStorage.removeItem ('FirstName');
    localStorage.removeItem ('MiddleName');
    localStorage.removeItem ('LastName');
    localStorage.removeItem ('Email');
    localStorage.removeItem ('Gender');
    localStorage.removeItem ('UserRole');
    localStorage.removeItem ('BirthOfDate');
    localStorage.removeItem ('UserName');
    localStorage.removeItem ('LastLoginTime');
    props.history.push ('/login');
  };

  const handleProfileChange = () => {
    props.history.push ('/dashboard/profile');
  }
   const handleNewUserChange = () => {
    props.history.push ('/dashboard/newuser');
  }

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

          <div className="shift">
            <NavigateBeforeIcon />
          </div>

          <div className="profile" onClick={handleProfileChange}>
            <Avatar
              title="Profile"
              style={{
                // height:"0%",
                borderRadius: '0px',
                border: '1px solid #D5DBDB',
              }}
            />
            <b style={{padding: '0.7%', fontSize: '18px'}}>{userName}</b>
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
            {['Dashboard'].map ((text, index) => (
              <ListItem button key={text} >
                <ListItemIcon>
                  {/* <div className="image"> */}
                  <img
                    src={DashboardIcon}
                    alt="Kepp Logo"
                    style={{width: '40%', color: '#E5E7E9'}}
                  />
                  {/* </div> */}
                </ListItemIcon>
                <ListItemText primary={text} style={{marginLeft: '0%'}} />
              </ListItem>
            ))}

            {['Webpages'].map ((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{color: '#E5E7E9 '}}>
                  <FileCopyIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} 

            {['Users'].map ((text, index) => (
              <ListItem button key={text} onClick={handleClick}>
                <ListItemIcon style={{color: '#E5E7E9'}}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
                {open ? <ExpandMore /> : <ExpandLess />}
              </ListItem>
            ))}
        
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={handleNewUserChange}>
            <ListItemIcon>
              {/* <PortraitIcon /> */}
            </ListItemIcon>
            <ListItemText primary="New User"/>
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              {/* <PortraitIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Users List"/>
          </ListItem>
        </List>
      </Collapse>


            {['Profile'].map ((text, index) => (
              <ListItem button key={text}  onClick={handleProfileChange}>
                <ListItemIcon style={{color: '#E5E7E9'}}>
                  <PortraitIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}

            {['Settings'].map ((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{color: '#E5E7E9'}}>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}

            {['Logout'].map ((text, index) => (
              <ListItem button key={text} onClick={handleLoginChange }>
                <ListItemIcon style={{color: '#E5E7E9'}}>
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
