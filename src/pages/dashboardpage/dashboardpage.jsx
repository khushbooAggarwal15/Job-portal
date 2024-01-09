import React from "react";

import ModalPopup from "../../components/ModalPopup/ModalPopup";
import Header from "../../components/Header/Header";
import Button from '@mui/material/Button';
function DashboardPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
   <Header/>
        <Button style={
      { position: 'fixed',
      margin: '16px', width:"200px",  
        }}
        onClick={handleOpen} variant="contained">Create Ticket </Button>
        <ModalPopup open={open} handleClose={handleClose} />

    </>
  );
}

export default DashboardPage;
