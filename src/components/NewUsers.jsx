import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {Avatar} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import '../CSSFile/Profile.css';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Divider} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import uploaded from '../Assets/uploaded.png';
import {addUser} from '../Services/UserServices/UserServices';

class Profile extends Component {
  constructor (props) {
      super (props);
        this.state = {
          firstName : '',
          middleName : '',
          lastName : '',
          birthOfDate : '',
          gender : '',
          country : '',
          phoneNumber : '',
          email : '',
          address : '',
          userName : '',
          userPassword : '',
          confirmPassword : '',
          userRole : '',
          openDialog:'false',
        };
      }
  
  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

   HandleOpenFileChange = () => {
    this.setState ({
      
    });
  };

  handleAddUser = () => {
    let user = {};
    user.firstName = this.state.firstName;
    user.middleName = this.state.middleName;
    user.lastName = this.state.lastName;
    user.birthOfDate = this.state.birthOfDate;
    user.gender = this.state.gender;
    user.country = this.state.country;
    user.phoneNumber = this.state.phoneNumber;
    user.email = this.state.email;
    user.address = this.state.address;
    user.userName = this.state.userName;
    user.userPassword = this.state.userPassword;
    user.confirmPassword = this.state.confirmPassword;
    user.userRole = this.state.userRole;
    console.log(user);

    addUser(user).then (Response => {
      // console.log(Response, "Add User Successfully");
      alert('Add User Successfully');
    })
    .catch (error => {
      // alert(error.Response.data.message);
    });
  };

 handleUpdateProfile = (props) => {
    this.props.history.push("/dashboard");
  }
 handleProfileChange = () => {
    this.props.history.push ('/dashboard/profile');
  }
  handleResetChange = () => {
    this.props.history.push ('/dashboard/newuser');
  }


  render () {
    return (
       <div className="dashboard" style={{marginTop:"-3.1%",paddingLeft:"18%"}}>
      <Card>
        <Toolbar>
          <Typography style={{paddingLeft: '0%', fontSize: '20px'}} >
            NewUser 
          </Typography>
          {/* <p>
          You last logged in on:{LastLoginTime}
          </p> */}
          <div className="userProfile" style={{padding: '0.7%', fontSize: '15px'}}>
            <div><HomeIcon/></div>
            <div onClick={this.handleUpdateProfile}>Home</div>
            <div onClick={this.handleProfileChange}>/ Profile </div>           
          </div>
        </Toolbar>
      </Card>

        <div className="partition1">
        {/* 2 */}
        <Card style={{}}>
        <Toolbar style={{padding:"5%"}}>
          
          <div> 
            <h2>
            General
            </h2> 
              <div className="general" style={{width:"100%",marginTop:"5%"}}>
                    <ListItemText primary="First Name" />
                    <ListItemText primary="Middle Name" />
                    <ListItemText primary="Last Name" />
              </div>
                  
              <div className="general">
                  <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="firstName"
                      // id="outlined-required"
                      label="firstname"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="middleName"
                      // id="outlined-required"
                      label="middlename"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="lastName"
                      // id="outlined-required"
                      label="lastname"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                  </div>

                <div className="general">
                    <ListItemText primary="Date Of Birth" />
                    <ListItemText primary="Gender" />
                    <ListItemText primary="Country" />
                </div>
                  
                  <div className="general">
                  <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="birthOfDate"
                      // id="outlined-required"
                      label="dateofbirth"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="gender"
                      // id="outlined-required"
                      label="gender"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="country"
                      // id="outlined-required"
                      label="country"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                  </div>

                <div className="general">
                    <ListItemText primary="Phone" />
                    <ListItemText primary="Email" />
                    <ListItemText primary="Address" />
                   </div>
                  
                  <div className="general">
                  <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="phoneNumber"
                      // id="outlined-required"
                      label="phonenumber"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="email"
                      // id="outlined-required"
                      label="email"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="address"
                      // id="outlined-required"
                      label="address"
                         multiline
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                  </div>
 
               <Divider style={{marginTop:"5%"}}/>

              <div className="general" style={{marginTop:"3%"}}>
                    <ListItemText primary="Username" />
                    <ListItemText primary="Password" />
                    <ListItemText primary="Confirm Password" />
              </div>
                  
                  <div className="general">
                  <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="userName"
                      // id="outlined-required"
                      label="username"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                   <div className="password">
                    <TextField
                      size="small"
                      // id="outlined-adornment-password"
                      variant="outlined"
                      name="userPassword"
                      type={this.state.showPassword ? 'text' : 'password'}
                      label="password"
                      margin="dense"
                      style={{marginLeft:"22%"}}
                      onChange={this.axios}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            // sytle={{width: '10px'}}
                          >
                            <IconButton
                              onClick={() =>
                                this.setState ({
                                  showPassword: !this.state.showPassword,
                                })}
                            >
                              {this.state.showPassword
                                ? <Visibility />
                                : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                   <div className="password">
                    <TextField
                      size="small"
                      // id="outlined-adornment-password"
                      variant="outlined"
                      name="confirmPassword"
                      type={this.state.showPassword ? 'text' : 'password'}
                      label="confirmpassword"
                      margin="dense"
                      style={{marginLeft:"22%"}}
                      onChange={this.axios}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            // sytle={{width: '10px'}}
                          >
                            <IconButton
                              onClick={() =>
                                this.setState ({
                                  showPassword: !this.state.showPassword,
                                })}
                            >
                              {this.state.showPassword
                                ? <Visibility />
                                : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  </div>

                  <div className="general">
                    <ListItemText primary="User Role" />
                  </div>              
                  <div className="general">
                  <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="userRole"
                      // id="outlined-required"
                      label="userrole"
                      variant="outlined"
                      onChange={this.axios}
                    />
                  </div>
                </div>
          </div>
        </Toolbar>
      </Card>

      
      <div>
      <Card style={{padding:"5%",width:"110%"}}>
        <Toolbar>
          <div className="info" style={{padding:"5%"}}> 
            <h2>
           Photo
            </h2> 
            <h4 > Acceptable image formats are jpg, jpeg, png & gif.</h4>
            <p>Maximum image size allowed is 2MB.</p>
            <div className="avatar">
                    <Avatar
                      src={uploaded}
                      style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '0px',
                        border: '1px solid #D5DBDB',
                        // onClick:{HandleOpenFileChange}
                      }}
                    />
            </div>
          
          </div>

        </Toolbar>
      </Card>
      </div>

      </div>
          <div className="submitbutton">
              <div style={{paddingBottom: "10%"}}>
                    <Button
                      margin="dense"
                      size="small"
                      variant="contained"
                      color="primary"
                      style={{
                        height: '40px',
                        width: '150px',
                        backgroundColor: '#31B8E3',
                      }}
                      onClick={this.handleAddUser}
                    >
                      Submit
                    </Button>
                  </div>
                  <div style={{marginLeft:"2%"}}>                  
                    <Button
                      margin="dense"
                      size="small"
                      variant="contained"
                      color="primary"
                      style={{
                        height: '40px',
                        width: '150px',
                        backgroundColor: '#31B8E3',
                      }}
                      onClick={this.handleResetChange}
                    >
                      Reset
                    </Button>
                  </div>
            </div>
      </div>
    );
  }
}

export default Profile;