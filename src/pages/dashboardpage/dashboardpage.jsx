import React from "react";

import ModalPopup from "../../components/ModalPopup/ModalPopup";
import Header from "../../components/Header/Header";
function DashboardPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
   <Header/>
 <button onClick={handleOpen}>Create</button>
        <ModalPopup open={open} handleClose={handleClose} />

    </>
  );
}

export default DashboardPage;
