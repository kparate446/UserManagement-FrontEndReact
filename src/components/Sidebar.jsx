import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
  IconButton,
  Drawer,
  createMuiTheme,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonIcon from '@material-ui/icons/Person';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PortraitIcon from '@material-ui/icons/Portrait';
import '../CSSFile/Dashboard.css';
import 'semantic-ui-css/semantic.min.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DashboardIcon from '../Assets/speed.png';

const theme = createMuiTheme ({
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#1C2833',
        marginTop: '55px',
        width: '20%',
        height: '1040%',
        color: '#E5E7E9'
      },
    },
  },
});

export class Sidebar extends Component {
  constructor (props) {
    super (props);
    this.state = {
    };
  }

 handleLoginChange = (props) => {
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
    this.props.history.push ('/login');
  };

  handleDrawer = event => {
    const {currentTarget} = event;
    this.setState ({
      AnchorEl: currentTarget,
      open: !this.state.open,
    });
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

render () {
    let open = this.state.open;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <IconButton onClick={this.handleDrawer}>
            <NavigateBeforeIcon />
          </IconButton>
          <div>
            <Drawer variant="persistent" anchor="left" open={open}>
              <List>
                <ListItem
                  className="over"
                  button
                  key="Dashboard"
                >
                <ListItemIcon>
                     <img
                    src={DashboardIcon}
                    alt="Kepp Logo"
                    style={{width: '40%', color: '#E5E7E9'}}
                  />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>

                <ListItem 
                className="over"
                button key="Webpages">
                  <ListItemIcon style={{color: '#E5E7E9 '}}>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Webpages" />
                </ListItem>

                <ListItem
                  className="over"
                  button
                  key="Users"
                >
                  <ListItemIcon style={{color: '#E5E7E9'}}>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Users" />
                </ListItem>

                <ListItem
                  className="over"
                  button
                  key="Profile"
                >
                  <ListItemIcon style={{color: '#E5E7E9'}}>
                    <PortraitIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
              </List>

              <ListItem
                  className="over"
                  button
                  key="Settings"
                >
                  <ListItemIcon style={{color: '#E5E7E9'}}>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>

                <ListItem
                  className="over"
                  button
                  key="Logout"
                  onClick={this.handleLoginChange}
                >
                  <ListItemIcon style={{color: '#E5E7E9'}}>
                    <PowerSettingsNewIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
            </Drawer>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default withRouter (Sidebar);