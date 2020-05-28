import React, {Component} from 'react';
import '../CSSFile/Login.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {userLogin} from '../Services/UserServices/UserServices';
import milogo from '../Assets/mi-logo.jpg';
import {Avatar} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import LockIcon from '@material-ui/icons/Lock';
// import version from '../Assets/version.png';

class Login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      userName: '',
      userPassword: '',
    };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  loginForm = () => {
    let user = {};
    user.userName = this.state.userName;
    user.userPassword = this.state.userPassword;
    console.log (user);

    userLogin (user)
      .then (Response => {
        console.log (Response, 'User Login successfully!!');
        alert (`User Login successfully`);
        this.props.history.push("/dashboard");
      })
      .catch (error => {
        alert (`User Not Login successfully`);
      });
  };

  render () {
    return (
      <div className="card">
        <Card className="logincard">
          <CardContent>
            <div className="backgroundregister">
              <div className="userregister">
                <div className="main" style={{flexDirection: 'row'}}>
                  <div className="avatar">
                    <Avatar
                      src={milogo}
                      style={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '45px',
                        border: '1px solid #D5DBDB',
                      }}
                    />
                  </div>
                  <div>
                    <h3 style={{color: 'grey'}}> Login to your accout</h3>
                  </div>
                  <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="userName"
                      id="outlined-required"
                      label="username"
                      variant="outlined"
                      inputProps={{
                        style: {
                          width: 340,
                        },
                      }}
                      onChange={this.axios}
                    />
                  </div>
                  <div className="password">
                    <TextField
                      size="small"
                      id="outlined-adornment-password"
                      variant="outlined"
                      name="userPassword"
                      type={this.state.showPassword ? 'text' : 'password'}
                      label="password"
                      margin="dense"
                      style={{width: '345px'}}
                      onChange={this.axios}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sytle={{width: '10px'}}
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
                  <Switch
                    color="primary"
                    name="checkedB"
                    inputProps={{'aria-label': 'primary checkbox'}}
                  />
                  Remember Me
                  <div>
                    <Button
                      margin="dense"
                      size="small"
                      variant="contained"
                      color="primary"
                      style={{
                        height: '50px',
                        width: '350px',
                        backgroundColor: '#31B8E3',
                      }}
                      onClick={this.loginForm}
                    >
                      Login
                    </Button>
                  </div>
                  <div className="lock" onClick={() => this.props.history.push ('/forgotpassword')}>
                    <LockIcon style={{color: 'grey', width: '20px'}} />
                    Forgot password?
                  </div>
                  {/* <div>
        <img src={version} width="80%" height="60%" alt="hello" />
        </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Login;
