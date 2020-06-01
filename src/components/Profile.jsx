import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {Avatar} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import '../CSSFile/Profile.css';
import {
  ListItem,
} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

// let LastLoginTime = localStorage.getItem ('LastLoginTime');
let Email = localStorage.getItem ('Email');
let userName = localStorage.getItem ('UserName');
let firstName = localStorage.getItem ('FirstName');
let middleName = localStorage.getItem ('MiddleName');
let lastName = localStorage.getItem ('LastName');
let dateOfBirth = localStorage.getItem ('BirthOfDate');
let gender = localStorage.getItem ('Gender');
let country = localStorage.getItem ('country');
let phone = localStorage.getItem ('Phone');
let address = localStorage.getItem ('Address');

   class Profile extends Component {
    constructor (props) {
        super (props);
        this.state = {};
      }
  
 handleUpdateProfile = (props) => {
    this.props.history.push("/dashboard/newuser");
  }
 handleProfileChange = () => {
    this.props.history.push ('/dashboard/profile');
  }

  render () {
    return (
       <div className="dashboard" style={{marginTop:"-3.1%",paddingLeft:"17%"}}>
      <Card>
        <Toolbar>
          <Typography style={{padding: '0.7%', fontSize: '20px'}} >
            Profile 
          </Typography>
          {/* <p>
          You last logged in on:{LastLoginTime}
          </p> */}
          <div className="userProfile" style={{padding: '0.7%', fontSize: '15px'}}>
            <div><HomeIcon/></div>
            <div onClick={this.handleUpdateProfile}>Home </div><div onClick={this.handleProfileChange}>/ Profile </div>           
          </div>
        </Toolbar>
      </Card>


        <div className="partition">
        {/* 2 */}
        <Card style={{padding:"2%"}}>
          <Toolbar>
            <Avatar
                title="Profile"
                style={{
                  width:'100%',
                  height:"100%",
                  borderRadius: '2px',
                  border: '1px solid #D5DBDB',
                }}
              />
              </Toolbar>
              <Toolbar>
              <div className="info"> 
              <div style={{fontSize:"25px"}}>
            {firstName}  {middleName}   {lastName}
            </div>
            <h3>
            Basic Info
            </h3>  
              <ListItem >
                    <ListItemText primary="Email"  />
                  <p style={{paddingLeft:"10%"}}> {Email  }</p>
                  </ListItem>
                  
                <ListItem >
                    <ListItemText primary="Username"  />
                  <p style={{paddingLeft:"10%"}}> {userName}</p>
                  </ListItem>

                  <div>
                      <Button
                        margin="dense"
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{
                          height: '40px',
                          width: '350px',
                        backgroundColor: '#31B8E3',
                      }}
                      onClick={this.handleUpdateProfile}
                    >
                      Edit Profile
                    </Button>
                  </div>
          </div>
        </Toolbar>
      </Card>
      
      <div>
      <Card style={{padding:"5%",width:"200%"}}>
        <Toolbar>
          {/* <Typography style={{padding: '0.7%', fontSize: '20px'}} >
            Profile 
          </Typography>
          <p>
          You last logged in on:{LastLoginTime}
          </p>
          <div className="profile">
            <HomeIcon/>
            <h5>Home / Profile</h5>            
          </div> */}
          <div className="info"> 
            <h3 >
            General Information
            </h3> 

              <ListItem >
                    <ListItemText primary="First Name"  />
                  <p style={{paddingLeft:"100%"}}> {firstName}</p>
                  </ListItem>
                  
                <ListItem >
                    <ListItemText primary="Middle Name"  />
                  <p style={{paddingLeft:"100%"}}> {middleName}</p>
                  </ListItem>

                    <ListItem >
                    <ListItemText primary="Last Name"  />
                  <p style={{paddingLeft:"100%"}}> {lastName}</p>
                  </ListItem>
                  
                  <ListItem >
                    <ListItemText primary="Date of Birth"  />
                  <p style={{marginLeft:"10%"}}> {dateOfBirth}</p>
                  </ListItem>

                  <ListItem >
                    <ListItemText primary="Gender"  />
                  <p style={{paddingLeft:"100%"}}> {gender}</p>
                  </ListItem>

                  <ListItem >
                    <ListItemText primary="Country"  />
                  <p style={{paddingLeft:"100%"}}> {country}</p>
                  </ListItem>

                  <ListItem >
                    <ListItemText primary="Phone"  />
                  <p style={{paddingLeft:"100%"}}> {phone}</p>
                  </ListItem>

                  <ListItem >
                    <ListItemText primary="Email"  />
                  <p style={{paddingLeft:"100%"}}> {Email}</p>
                  </ListItem>

                  <ListItem >
                    <ListItemText primary="Address"  />
                  <p style={{paddingLeft:"10%"}}> {address}</p>
                  </ListItem>

                  <ListItem >
                    <ListItemText primary="User Name"  />
                  <p style={{paddingLeft:"100%"}}> {userName}</p>
                  </ListItem>

                  <ListItem >
                    <ListItemText   />
                  {/* <p style={{paddingLeft:"80%"}}> {userName}</p> */}
                  </ListItem>
          </div>

        </Toolbar>
      </Card>
      </div>
      </div>
      </div>
    );
  }
}

export default Profile;