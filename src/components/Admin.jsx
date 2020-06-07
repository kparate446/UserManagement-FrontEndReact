import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {Avatar} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import '../CSSFile/Profile.css';
import Divider from '@material-ui/core/Divider';
import rightbox from '../Assets/rightbox.png';
import totalUser from '../Assets/totalUser.jpg';
import onlineUser from '../Assets/onlineUser.png';

let firstName = localStorage.getItem ('FirstName');
let middleName = localStorage.getItem ('MiddleName');
let lastName = localStorage.getItem ('LastName');

class Admin extends Component {
  constructor (props) {
      super (props);
      this.state = {};
    }
  
 handleUpdateProfile = (props) => {
    this.props.history.push("/dashboard/admin");
  }
 handleProfileChange = () => {
    this.props.history.push ('/dashboard/profile');
  }

  render () {
    return (
    <div>
        <div className="dashboard" style={{marginTop:"-3.1%",paddingLeft:"17%"}}>
          <Card>
            <Toolbar>
              <Typography style={{padding: '0.7%', fontSize: '20px'}} >
                Welcome {firstName} {lastName}
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
        </div>
        <div className="partition2">
          <Card style={{width:"20%"}}>  
            <div className="partition" >
              {/* <Avatar
              // alt={firstName}
              //  src={uploaded}
                // src={localStorage.getItem ('Profile')}
                // <PersonOutlineIcon/>
                style={{
                  padding:"5%",
                  width: '70px',
                  height: '70px',
                  // borderRadius: '0px',
                  // border: '1px solid #D5DBDB',
                }}
              /> */}
                  <img
                    src={totalUser}
                    alt="Kepp Logo"
                    style={{width: '30%', color: '#E5E7E9'}}
                  />
              <h3 style={{paddingLeft:'5%'}}>TOTAL</h3>
            
            </div>
          </Card>
            <Card style={{width:"20%"}}>  
            <div className="partition" >
              {/* <Avatar
                style={{
                  padding:"5%",
                  width: '70px',
                  height: '70px',
                }}
              /> */}
                  <img
                    src={rightbox}
                    alt="Kepp Logo"
                    style={{width: '25%', color: '#E5E7E9',marginTop:"3%"}}
                  />
              <h3 style={{paddingLeft:'5%'}}> ACTIVE</h3>         
            </div>
          </Card>
          <Card style={{width:"20%"}}>  
            <div className="partition" >
              <Avatar
                style={{
                  padding:"5%",
                  width: '50px',
                  height: '55px',
                }}
              />
              <h3 style={{paddingLeft:'5%'}}> INACTIVE</h3>         
            </div>
          </Card>
          <Card style={{width:"20%"}}>  
            <div className="partition" >
              {/* <Avatar
                style={{
                  padding:"5%",
                  width: '60px',
                  height: '60px',
                }}
              /> */}
                  <img
                    src={onlineUser}
                    alt="Kepp Logo"
                    style={{width: '25%', color: '#E5E7E9'}}
                  />
              <h3 style={{paddingLeft:'5%'}}>ONLINE</h3>
            </div>
          </Card>
        </div>

  {/* **************************************** */}
      <div className="dashboard" style={{marginTop:"-3.1%",paddingLeft:"0%"}}>
           <div className="partition2">
          <Card style={{width:"67%"}}>
          <div style={{padding:"3%"}}> 
          <h3 > All Time Registration History</h3> 
          </div>
          <Divider/>
            <div className="partition" >
              
              
            </div>
          </Card>
  
        <Card style={{width:"30%"}}>  
          <div className="partition">
          <h3>Latest Registration</h3>
          <p style={{marginLeft:'25%'}}> Load More </p>
          </div> 
          <Divider/>

            <div className="partition" >
              <Avatar
              src={localStorage.getItem ('Profile')}
                style={{
                  width: '60px',
                  height: '60px',
                }}
              />
              <h3 style={{paddingLeft:'5%'}}>{firstName} {middleName} {lastName}</h3>
            <Divider/>
            </div>
          </Card>
          </div>
          </div>

      </div>
    );
  }
}

export default Admin;