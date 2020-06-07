import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
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
import {addUser} from '../Services/UserServices/UserServices'; 
import ProfileUploaded from '../components/ProfileUploaded.jsx';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
    this.props.history.push("/dashboard/admin");
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
            Registration
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
                      // label="firstname"
                      variant="outlined"
                      inputProps={{
                        style: {
                          height: 30,
                        },
                      }}
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="middleName"
                      // id="outlined-required"
                      // label="middlename"
                      variant="outlined"
                      inputProps={{
                        style: {
                          height: 30,
                        },
                      }}
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="lastName"
                      // id="outlined-required"
                      // label="lastname"
                      variant="outlined"
                      inputProps={{
                        style: {
                          height: 30,
                        },
                      }}
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
                      // label="dateofbirth"
                      variant="outlined"
                      inputProps={{
                        style: {
                          height: 32,
                        },
                      }}
                      onChange={this.axios}
                    />
                  </div>
                  
                  <FormControl variant="outlined" style={{width:"28%",height:"10px"}}>
                    {/* <InputLabel id="demo-simple-select-outlined-label" >---Select---</InputLabel> */}    
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      name="gender"
                      // value={'gender'}
                      onChange={this.axios}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl variant="outlined" style={{width:"28%"}}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      name="country"
                      onChange={this.axios}
                    >                     
                      <MenuItem value={"Afghnistan"}>Afghnistan</MenuItem>
                      <MenuItem value={"Algeria"}>Algeria</MenuItem>
                      <MenuItem value={"American Samoa"}>American Samoa</MenuItem>
                      <MenuItem value={"Andorra"}>Andorra</MenuItem>
                      <MenuItem value={"Angola"}>Angola</MenuItem>
                      <MenuItem value={"Anguilla"}>Anguilla</MenuItem>
                      <MenuItem value={"Antarctica"}>Antarctica</MenuItem>
                      <MenuItem value={"Antigua and Barbuda"}>Antigua and Barbuda</MenuItem>
                      <MenuItem value={"Argentina"}>Argentina</MenuItem>
                      <MenuItem value={"Armenia"}>Armenia</MenuItem>
                      <MenuItem value={"Aruba"}>Aruba</MenuItem>
                      <MenuItem value={"Austria"}>Austria</MenuItem>
                      <MenuItem value={"Australia"}>Australia</MenuItem>
                      <MenuItem value={"Austria"}>Austria</MenuItem>
                      <MenuItem value={"Azerbaijian"}>Azerbaijian</MenuItem>
                      <MenuItem value={"Bahamas"}>Bahamas</MenuItem>
                      <MenuItem value={"Bahrain"}>Bahrain</MenuItem>
                      <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
                      <MenuItem value={"Barbados"}>Barbados</MenuItem>
                      <MenuItem value={"Belgium"}>Belgium</MenuItem>
                      <MenuItem value={"Belize"}>Belize</MenuItem>
                      <MenuItem value={"Bennin"}>Bennin</MenuItem>
                      <MenuItem value={"Bermuda"}>Bermuda</MenuItem>
                      <MenuItem value={"Bhutan"}>Bhutan</MenuItem>
                      <MenuItem value={"Bolivia"}>Bolivia</MenuItem>
                      <MenuItem value={"Bosnia and Herzwgovina"}>Bosnia and Herzwgovina</MenuItem>
                      <MenuItem value={"Botswana"}>Botswana</MenuItem>
                      <MenuItem value={"Bouvet Island"}>Bouvet Island</MenuItem>
                      <MenuItem value={"Brazil"}>Brazil</MenuItem>
                      <MenuItem value={"British Indian Ocean Territory"}>British Indian Ocean Territory</MenuItem>
                      <MenuItem value={"Brunei Darussalam"}>Brunei Darussalam</MenuItem>
                      <MenuItem value={"Bulgaria"}>Bulgaria</MenuItem>
                      <MenuItem value={"Burkina Faso"}>Burkina Faso</MenuItem>
                      <MenuItem value={"Burundi"}>Burundi</MenuItem>
                      <MenuItem value={"Cambodia"}>Cambodia</MenuItem>
                      <MenuItem value={"Canada"}>Canada</MenuItem>
                      <MenuItem value={"Cape Verde"}>Cape Verde</MenuItem>
                      <MenuItem value={"Cayman Islands"}>Cayman Islands</MenuItem>
                      <MenuItem value={"Central Africa Republic"}>Central Africa Republic</MenuItem>
                      <MenuItem value={"Chand"}>Chand</MenuItem>
                      <MenuItem value={"Chile"}>Chile</MenuItem>
                      <MenuItem value={"China"}>China</MenuItem>
                      <MenuItem value={"Christmas Island"}>Christmas Island</MenuItem>
                      <MenuItem value={"Cocos (Kelling) Islands"}>Cocos (Kelling) Islands</MenuItem>
                      <MenuItem value={"Colombia"}>Colombia</MenuItem>
                      <MenuItem value={"Comoros"}>Comoros</MenuItem>
                      <MenuItem value={"Congo"}>Congo</MenuItem>
                      <MenuItem value={"Congo, the Democratic Republic of the"}>Congo, the Democratic Republic of the</MenuItem>
                      <MenuItem value={"Cook Islands"}>Cook Islands</MenuItem>
                      <MenuItem value={"Costa Rica"}>Costa Rica</MenuItem>
                      <MenuItem value={"Cota D'lvoire"}>Cota D'lvoire</MenuItem>
                      <MenuItem value={"Croatia"}>Croatia</MenuItem>
                      <MenuItem value={"Cuba"}>Cuba</MenuItem>
                      <MenuItem value={"Cyprus"}>Cyprus</MenuItem>
                      <MenuItem value={"Czech Republic"}>Czech Republic</MenuItem>
                      <MenuItem value={"Denmark"}>Denmark</MenuItem>
                      <MenuItem value={"Djibouti"}>Djibouti</MenuItem>
                      <MenuItem value={"Dominica"}>Dominica</MenuItem>
                      <MenuItem value={"Dominican Republica"}>Dominican Republica</MenuItem>
                      <MenuItem value={"Ecudor"}>Ecudor</MenuItem>
                      <MenuItem value={"Egypt"}>Egypt</MenuItem>
                      <MenuItem value={"El Salvador"}>El Salvador</MenuItem>
                      <MenuItem value={"Equatorial Guinea"}>Equatorial Guinea</MenuItem>
                      <MenuItem value={"Eritrea"}>Eritrea</MenuItem>
                      <MenuItem value={"Estonia"}>Estonia</MenuItem>
                      <MenuItem value={"Ethiopia"}>Ethiopia</MenuItem>
                      <MenuItem value={"Falkaland Islands (Malvinas)"}>Falkaland Islands (Malvinas)</MenuItem>
                      <MenuItem value={"Faroe Islands"}>Faroe Islands</MenuItem>
                      <MenuItem value={"Fiji"}>Fiji</MenuItem>
                      <MenuItem value={"Finland"}>Finland</MenuItem>
                      <MenuItem value={"France"}>France</MenuItem>
                      <MenuItem value={"French Guiana"}>French Guiana</MenuItem>
                      <MenuItem value={"French Polynesia"}>French Polynesia</MenuItem>
                      <MenuItem value={"French Southern Territories"}>French Southern Territories</MenuItem>
                      <MenuItem value={"Gabon"}>Gabon</MenuItem>
                      <MenuItem value={"Gambia"}>Gambia</MenuItem>
                      <MenuItem value={"Georgia"}>Georgia</MenuItem>
                      <MenuItem value={"Germany"}>Germany</MenuItem>
                      <MenuItem value={"Ghana"}>Ghana</MenuItem>
                      <MenuItem value={"Gibraltar"}>Gibraltar</MenuItem>
                      <MenuItem value={"Greece"}>Greece</MenuItem>
                      <MenuItem value={"Greenland"}>Greenland</MenuItem>
                      <MenuItem value={"Grenada"}>Grenada</MenuItem>
                      <MenuItem value={"Guatemala"}>Guatemala</MenuItem>
                      <MenuItem value={"Guinea"}>Guinea</MenuItem>
                      <MenuItem value={"Guinea-Bissau"}>Guinea-Bissau</MenuItem>
                      <MenuItem value={"Guyana"}>Guyana</MenuItem>
                      <MenuItem value={"Haiti"}>Haiti</MenuItem>
                      <MenuItem value={"Heard Island an Mcdonald Islands"}>Heard Island an Mcdonald Islands</MenuItem>
                      <MenuItem value={"Holy See (Vatican City State)"}>Holy See (Vatican City State)</MenuItem>
                      <MenuItem value={"Honduras"}>Honduras</MenuItem>
                      <MenuItem value={"Hong Kong"}>Hong Kong</MenuItem>
                      <MenuItem value={"Hungary"}>Hungary</MenuItem>
                      <MenuItem value={"Iceland"}>Iceland</MenuItem>
                      <MenuItem value={"India"}>India</MenuItem>
                      <MenuItem value={"Indonesia"}>Indonesia</MenuItem>
                      <MenuItem value={"Iran, Islamic Republic of"}>Iran, Islamic Republic of</MenuItem>
                      <MenuItem value={"Iraq"}>Iraq</MenuItem>
                      <MenuItem value={"Ireland"}>Ireland</MenuItem>
                      <MenuItem value={"Israel"}>Israel</MenuItem>
                      <MenuItem value={"Italy"}>Italy</MenuItem>
                      <MenuItem value={"Jamaica"}>Jamaica</MenuItem>
                      <MenuItem value={"Japan"}>Japan</MenuItem>
                      <MenuItem value={"Jordan"}>Jordan</MenuItem>
                      <MenuItem value={"Kazakhstan"}>Kazakhstan</MenuItem>
                      <MenuItem value={"Kenya"}>Kenya</MenuItem>
                      <MenuItem value={"Kiribati"}>Kiribati</MenuItem>
                      <MenuItem value={"Korea, Democratic People's Republic of"}>Korea, Democratic People's Republic of</MenuItem>
                      <MenuItem value={"Korwa, Republic of"}>Korwa, Republic of</MenuItem>
                      <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
                      <MenuItem value={"Kyrgyzstan"}>Kyrgyzstan</MenuItem>
                      <MenuItem value={"Lao People's Democratic Republic"}>Lao People's Democratic Republic</MenuItem>
                      <MenuItem value={"Latvia"}>Latvia</MenuItem>
                      <MenuItem value={"Lebanon"}>Lebanon</MenuItem>
                      <MenuItem value={"Lesotho"}>Lesotho</MenuItem>
                      <MenuItem value={"Liberia"}>Liberia</MenuItem>
                      <MenuItem value={"Libyan Arab Jamahiriya"}>Libyan Arab Jamahiriya</MenuItem>
                      <MenuItem value={"Liechtenstein"}>Liechtenstein</MenuItem>
                      <MenuItem value={"Lithuania"}>Lithuania</MenuItem>
                      <MenuItem value={"Luxembourg"}>Luxembourg</MenuItem>
                      <MenuItem value={"Macao"}>Macao</MenuItem>
                      <MenuItem value={"Macedonia, the Former Yugoslav Republic of"}>Macedonia, the Former Yugoslav Republic of</MenuItem>
                      <MenuItem value={"Madagascar"}>Madagascar</MenuItem>
                      <MenuItem value={"Malawi"}>Malawi</MenuItem>
                      <MenuItem value={"Malaysia"}>Malaysia</MenuItem>
                      <MenuItem value={"Maldives"}>Maldives</MenuItem>
                      <MenuItem value={"Mali"}>Mali</MenuItem>
                      <MenuItem value={"Malta"}>Malta</MenuItem>
                      <MenuItem value={"Marshall Islands"}>Marshall Islands</MenuItem>
                      <MenuItem value={"Martinique"}>Martinique</MenuItem>
                      <MenuItem value={"Mauritania"}>Mauritania</MenuItem>
                      <MenuItem value={"Mauritius"}>Mauritius</MenuItem>
                      <MenuItem value={"Mayotte"}>Mayotte</MenuItem>
                      <MenuItem value={"Mexico"}>Mexico</MenuItem>
                      <MenuItem value={"Micronesia, Federated States of"}>Micronesia, Federated States of</MenuItem>
                      <MenuItem value={"Moldova, Republic of"}>Moldova, Republic of</MenuItem>
                      <MenuItem value={"Monaco"}>Monaco</MenuItem>
                      <MenuItem value={"Mongolia"}>Mongolia</MenuItem>
                      <MenuItem value={"Monteserrat"}>Monteserrat</MenuItem>
                      <MenuItem value={"Morocco"}>Morocco</MenuItem>
                      <MenuItem value={"Mozambique"}>Mozambique</MenuItem>
                      <MenuItem value={"Myanmar"}>Myanmar</MenuItem>
                      <MenuItem value={"Namibia"}>Namibia</MenuItem>
                      <MenuItem value={"Nauru"}>Nauru</MenuItem>
                      <MenuItem value={"Nepal"}>Nepal</MenuItem>
                      <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
                      <MenuItem value={"Netherlands Antilies"}>Netherlands Antilies</MenuItem>
                      <MenuItem value={"New Caledonia"}>New Caledonia</MenuItem>
                      <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
                      <MenuItem value={"Nicaragua"}>Nicaragua</MenuItem>
                      <MenuItem value={"Niger"}>Niger</MenuItem>
                      <MenuItem value={"Nigeria"}>Nigeria</MenuItem>
                      <MenuItem value={"Niue"}>Niue</MenuItem>
                      <MenuItem value={"Norfolk Island"}>Norfolk Island</MenuItem>
                      <MenuItem value={"Northern mariana Islands"}>Northern mariana Islands</MenuItem>
                      <MenuItem value={"Norway"}>Norway</MenuItem>
                      <MenuItem value={"Northern Mariana Islands"}>Northern Mariana Islands</MenuItem>
                      <MenuItem value={"Norway"}>Norway</MenuItem>
                      <MenuItem value={"Oman"}>Oman</MenuItem>
                      <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
                      <MenuItem value={"Palau"}>Palau</MenuItem>
                      <MenuItem value={"Palestinian Territory, Occupied"}>Palestinian Territory, Occupied</MenuItem>
                      <MenuItem value={"Panama"}>Panama</MenuItem>
                      <MenuItem value={"Papua New Guinea"}>Papua New Guinea</MenuItem>
                      <MenuItem value={"Praguay"}>Praguay</MenuItem>
                      <MenuItem value={"Papua New Guinea"}>Papua New Guinea</MenuItem>
                      <MenuItem value={"Paraguay"}>Paraguay</MenuItem>
                      <MenuItem value={"Peru"}>Peru</MenuItem>
                      <MenuItem value={"Philippines"}>Philippines</MenuItem>
                      <MenuItem value={"Pitcairn"}>Pitcairn</MenuItem>
                      <MenuItem value={"Poland"}>Poland</MenuItem>
                      <MenuItem value={"Portugal"}>Portugal</MenuItem>
                      <MenuItem value={"Puerto Rico"}>Puerto Rico</MenuItem>
                      <MenuItem value={"Qatar"}>Qatar</MenuItem>
                      <MenuItem value={"Reunion"}>Reunion</MenuItem>
                      <MenuItem value={"Romania"}>Romania</MenuItem>
                      <MenuItem value={"Russian Federation"}>Russian Federation</MenuItem>
                      <MenuItem value={"Rwanda"}>Rwanda</MenuItem>
                      <MenuItem value={"Saint Helena"}>Saint Helena</MenuItem>
                      <MenuItem value={"Saint Kitts and Nevis"}>Saint Kitts and Nevis</MenuItem>
                      <MenuItem value={"Saint lucia"}>Saint lucia</MenuItem>
                      <MenuItem value={"Saint Pierre and Miquelon"}>Saint Pierre and Miquelon</MenuItem>
                      <MenuItem value={"Saint Vincent and the Grenadines"}>Saint Vincent and the Grenadines</MenuItem>
                      <MenuItem value={"Samoa"}>Samoa</MenuItem>
                      <MenuItem value={"San Marino"}>San Marino</MenuItem>
                      <MenuItem value={"Soa Tome and Principe"}>Soa Tome and Principe</MenuItem>
                      <MenuItem value={"Saudi Arabia"}>Saudi Arabia</MenuItem>
                      <MenuItem value={"Senegal"}>Senegal</MenuItem>
                      <MenuItem value={"Serbia and Montenegro"}>Serbia and Montenegro</MenuItem>
                      <MenuItem value={"Seychelles"}>Seychelles</MenuItem>
                      <MenuItem value={"Sierra Leone"}>Sierra Leone</MenuItem>
                      <MenuItem value={"Singapore"}>Singapore</MenuItem>
                      <MenuItem value={"Slovakia"}>Slovakia</MenuItem>
                      <MenuItem value={"Slovenia"}>Slovenia</MenuItem>
                      <MenuItem value={"Solomon Islands"}>Solomon Islands</MenuItem>
                      <MenuItem value={"Somolia"}>Somolia</MenuItem>
                      <MenuItem value={"South Africa"}>South Africa</MenuItem>
                      <MenuItem value={"South Georgia and the South Sandwich Islands"}>South Georgia and the South Sandwich Islands</MenuItem>
                      <MenuItem value={"Spain"}>Spain</MenuItem>
                      <MenuItem value={"Sri Lanka"}>Sri Lanka</MenuItem>
                      <MenuItem value={"Sudan"}>Sudan</MenuItem>
                      <MenuItem value={"Suriname"}>Suriname</MenuItem>
                      <MenuItem value={"Svalbard and Jan Mayen"}>Svalbard and Jan Mayen</MenuItem>
                      <MenuItem value={"Swaziland"}>Swaziland</MenuItem>
                      <MenuItem value={"Sweden"}>Sweden</MenuItem>
                      <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
                      <MenuItem value={"Syrian Arab Republic"}>Syrian Arab Republic</MenuItem>
                      <MenuItem value={"Taiwan, Province of China"}>Taiwan, Province of China</MenuItem>
                      <MenuItem value={"Tajkistan"}>Tajkistan</MenuItem>
                      <MenuItem value={"Tanzania,United Republic of"}>Tanzania,United Republic of</MenuItem>
                      <MenuItem value={"Thailand"}>Thailand</MenuItem>
                      <MenuItem value={"Timor-Leste"}>Timor-Leste</MenuItem>
                      <MenuItem value={"Togo"}>Togo</MenuItem>
                      <MenuItem value={"Tokelau"}>Tokelau</MenuItem>
                      <MenuItem value={"Tongo"}>Tongo</MenuItem>
                      <MenuItem value={"Trinidad and Tobago"}>Trinidad and Tobago</MenuItem>
                      <MenuItem value={"Tunisia"}>Tunisia</MenuItem>
                      <MenuItem value={"Turkey"}>Turkey</MenuItem>
                      <MenuItem value={"Turkmenistan"}>Turkmenistan</MenuItem>
                      <MenuItem value={"Turks and Caicis Islands"}>Turks and Caicis Islands</MenuItem>
                      <MenuItem value={"Tuvalu"}>Tuvalu</MenuItem>
                      <MenuItem value={"Uganda"}>Uganda</MenuItem>
                      <MenuItem value={"Ukraine"}>Ukraine</MenuItem>
                      <MenuItem value={"United Arab Emirates"}>United Arab Emirates</MenuItem>
                      <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                      <MenuItem value={"United State"}>United State</MenuItem>
                      <MenuItem value={"United State Minor Outlying Islands"}>United State Minor Outlying Islands</MenuItem>
                      <MenuItem value={"Uruguay"}>Uruguay</MenuItem>
                      <MenuItem value={"Uzbekistan"}>Uzbekistan</MenuItem>
                      <MenuItem value={"Vanuatu"}>Vanuatu</MenuItem>
                      <MenuItem value={"Venezuela"}>Venezuela</MenuItem>
                      <MenuItem value={"Viet Nam"}>Viet Nam</MenuItem>
                      <MenuItem value={"Virgin Islands, British"}>Virgin Islands, British</MenuItem>
                      <MenuItem value={"Virgin Islands, U.S"}>Virgin Islands, U.S</MenuItem>
                      <MenuItem value={"Walis and Futuna"}>Walis and Futuna</MenuItem>
                      <MenuItem value={"Western Sahara"}>Western Sahara</MenuItem>
                      <MenuItem value={"Yemen"}>Yemen</MenuItem>
                      <MenuItem value={"Zambia"}>Zambia</MenuItem>
                      <MenuItem value={"Zimbabwe"}>Zimbabwe</MenuItem>
                    </Select>
                  </FormControl>
                  {/* </div> */}
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
                      // label="phonenumber"
                      variant="outlined"
                      inputProps={{
                        style: {
                          height: 30,
                        },
                      }}
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="email"
                      // id="outlined-required"
                      // label="email"
                      variant="outlined"
                      inputProps={{
                        style: {
                          height: 30,
                        },
                      }}
                      onChange={this.axios}
                    />
                  </div>
                   <div className="usernameLogin">
                    <TextField
                      margin="dense"
                      size="small"
                      name="address"
                      // id="outlined-required"
                      // label="address"
                         multiline
                      variant="outlined"
                      inputProps={{
                        style: {
                          height: 30,
                        },
                      }}
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
                      // label="username"
                      variant="outlined"
                      inputProps={{
                        style: {
                          height: 30,
                        },
                      }}
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
                      // label="password"
                      margin="dense"
                      style={{marginLeft:"20%"}}
                      inputProps={{
                        style: {
                          height: 30,
                        },
                      }}
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
                      // label="confirmpassword"
                      margin="dense"
                      style={{marginLeft:"18%"}}
                      inputProps={{
                        style: {
                          height: 30,
                        },
                      }}
                      onChange={this.axios}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
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
                <div className="general" style={{paddingBottom:"5%"}}>
                    <FormControl variant="outlined" style={{width:"28%",height:"10px"}}>  
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      name="userRole"
                      onChange={this.axios}
                    >
                      <MenuItem value={"Admin"}>Admin</MenuItem>
                      <MenuItem value={"User"}>User</MenuItem>
                    </Select>
                  </FormControl>
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
                    {/* <Avatar
                      src={uploaded}
                      style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '0px',
                        border: '1px solid #D5DBDB',
                        // onClick:{HandleOpenFileChange}
                      }}
                    /> */}
                    {/* <ProfileUploaded/> */}
            {/* <Tooltip> */}
                <ProfileUploaded />
              {/* </Tooltip>  */}
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