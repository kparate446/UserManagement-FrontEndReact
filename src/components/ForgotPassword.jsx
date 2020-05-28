import React, {Component} from 'react';
import '../CSSFile/Login.css';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {forgotPassword} from '../Services/UserServices/UserServices';
import milogo from '../Assets/mi-logo.jpg';
import {Avatar} from '@material-ui/core';

class ForgotPassword extends Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
    };
  }

  axios = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  forgotPasswordForm = () => {
    let user = {};
    user.email = this.state.email;
    console.log (user);

    forgotPassword (user)
      .then (Response => {
        alert (`The password has been send to your email address`);
      })
      .catch (error => {
        alert (`Invalid Email`);
      });
  };

  render () {
    return (
      <div className="card">
        <Card className="logincard">
          <CardContent>
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
            <h2 style={{color:"grey"}}>User Management</h2>
            <div>
              <h3 style={{color:"grey"}}>Recover Password</h3>
            </div>
            <div className="profileaccount">
              Please enter your email address below to receive the password at your registered email.
            </div>
            <br />
            <div className="usernameLogin">
              <TextField
                margin="dense"
                size="small"
                name="email"
                id="outlined-required"
                label="Email"
                variant="outlined"
                inputProps={{
                  style: {
                    width: 510,
                  },
                }}
                onChange={this.axios}
              />
            </div>

            <div>
              <br />
              <Button
                margin="dense"
                size="small"
                variant="contained"
                color="primary"
                style={{
                  height: '50px',
                  width: '530px',
                  backgroundColor: '#31B8E3',
                }}
                onClick={this.forgotPasswordForm}
              >
                Recover Password
              </Button>
            </div>
            <div className="lock">
              Know your password ?
             <div onClick={() => this.props.history.push ('/login')}>Login</div> 
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ForgotPassword;
