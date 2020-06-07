import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {Avatar} from '@material-ui/core';
import {changeprofile} from '../Services/UserServices/UserServices'; 
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
// import uploaded from '../Assets/uploaded.png';

let firstName = localStorage.getItem ('FirstName');
function ProfileUploaded (props) {
  const [openDialog, setOpenDialog] = React.useState (false);
  const [file, setFile] = React.useState ('');
 
  const HandleOpenFileChange = () => {
    setOpenDialog (true);
  };

  const handleCloseDialog = () => {
    setOpenDialog (false);
  };
  const handleFileChange = e => {
    setFile (e.target.files[0]);
  };
  
  const handleFileSubmitChange = () => {
    let token = localStorage.getItem ('Token');
    const formData = new FormData ();
    console.log(file+"--------->"+formData);
    formData.append ('file', file, file.name);
    console.log(token);

    changeprofile (formData, token)
      .then (Response => {
        console.log (Response);
        setOpenDialog (true);
        alert('Uploaded Profile picture Successfully');
      })
      .catch (err => {
        console.log ('Not Uploaded Profile picture '+err);
        alert('Not Uploaded Profile picture');
      });
  };

  return (
    <div>
      <div className="profileAvatar" onClick= {HandleOpenFileChange}>
          <Avatar
          alt={firstName}
          //  src={uploaded}
            // src={localStorage.getItem ('Profile')}
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '0px',
              border: '1px solid #D5DBDB',
             }}
          />
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="changeProfile"
      >
        <DialogTitle
          id="max-width-dialog-title"
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: ' x-large',
            fontfamily: 'monospace',
            fontStyle: 'unset',
          }}
        >
          Select Profile Photo
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                width: '131%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <TextField type="file" onChange={handleFileChange} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingTop: '22%',
                  paddingRight: '22%'
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleFileSubmitChange}
                >
                  Upload
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseDialog}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withRouter (ProfileUploaded);