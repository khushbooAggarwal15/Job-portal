import React from 'react'
import Button from '@mui/material/Button';
import ModalPopup from "../../components/ModalPopup/ModalPopup";

const UserDashboard = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
      <h1>
        khkb,m,</h1>  
      <Button style={
        { position: 'fixed',
        margin: '16px', width:"200px",  
          }}
          onClick={handleOpen} variant="contained">Create Ticket </Button>
          <ModalPopup open={open} handleClose={handleClose} /> </div>
  )
}

export default UserDashboard