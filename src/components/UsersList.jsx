import React ,{useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
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
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import {getAllUsers} from '../Services/UserServices/UserServices';


const columns = [
  { id: 'profile', label: 'Profile', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 150 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dob',
    label: 'Dob',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'role',
    label: 'Role',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'account',
    label: 'Account',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function UsersList(props,profile,name,email,dob,status,role,account,action) {
  // const density = population / size;
  return {profile,name,email,dob,status,role,account,action}
  // return { name, code, population, size, density };
}

  // const [title, setTitle] = React.useState (data.title);
  // const [discription, setDiscription] = React.useState (data.discription);
  // const [archive, setArchive] = React.useState (false);
  // const [trash, setTrash] = React.useState (false);
  // const [pin, setPin] = React.useState (false);
  // const [labels, setLabels] = React.useState (false);
  // let k = 

const rows = [
  // UsersList(Response.data.data[0].country}, 'IN', 1324171354, 3287263),
  UsersList('China', 'CN', 1403500365, 9596961),
  UsersList('Italy', 'IT', 60483973, 301340),
  UsersList('United States', 'US', 327167434, 9833520),
  UsersList('Canada', 'CA', 37602103, 9984670),
  UsersList('Australia', 'AU', 25475400, 7692024),
  UsersList('Germany', 'DE', 83019200, 357578),
  UsersList('Ireland', 'IE', 4857000, 70273),
  UsersList('Mexico', 'MX', 126577691, 1972550),
  UsersList('Japan', 'JP', 126317000, 377973),
  UsersList('France', 'FR', 67022000, 640679),
  UsersList('United Kingdom', 'GB', 67545757, 242495),
  UsersList('Russia', 'RU', 146793744, 17098246),
  UsersList('Nigeria', 'NG', 200962417, 923768),
  UsersList('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});


export default function StickyHeadTable(data,props) {
   console.log("data"+data);

  const [address, setAddress] = React.useState (data.address);
  const [birthOfDate, setBirthOfDate] = React.useState (data.birthOfDate);
  const [country, setCountry] = React.useState (data.country);
  const [email, setEmail] = React.useState (data.email);
  const [firstName, setFirstName] = React.useState (data.firstName);
  const [gender, setGender] = React.useState (data.gender);
  const [lastName, setLastName] = React.useState (data.lastName);
  const [middleName, setMiddleName] = React.useState (data.middleName);
  const [phoneNumber, setPhoneNumber] = React.useState (data.phoneNumber);
  const [profilePic, setProfilePic] = React.useState (data.profilePic);
  const [userName, setUserName] = React.useState (data.userName);
  const [userRole, setUserRole] = React.useState (data.userRole);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  console.log("Country--->"+data.country);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const showAllLabels = () => {
    let token = localStorage.getItem ('Token');
    console.log ('show all Users');

    getAllUsers (token).then (Response => {
      console.log (Response.data.data[0].country);
      console.log ('show all Labels');
      // this.useState ({
      //  data: Response.data.data
      // });
      // const [data,setData] = useState(Response.data)
      
    });
  };

  useEffect(() => {
    console.log("use Effect called");
    showAllLabels();
  },[]);  


  return (
    <div className="dashboard" style={{marginTop:"-3.1%",paddingLeft:"17%"}}>
      <Card>
        <Toolbar>
        
          <Typography style={{padding: '0.7%', fontSize: '20px'}} >
            Users 
          </Typography>
         
          {/* <p>
          You last logged in on:{LastLoginTime}
          </p> */}
          <div className="userProfile" style={{padding: '0.7%', fontSize: '15px'}}>
            <div><HomeIcon/></div>
            <div >Home </div><div>/ Users </div>           
          </div>
        </Toolbar>
      </Card>
  <div  style={{padding:"2%"}}>
    <div>
      <Card >
    <Paper className={classes.root} >
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Card>
      </div>
      </div>
    </div>
  );
}