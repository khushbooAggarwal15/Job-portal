import React from "react";

import ModalPopup from "../../components/ModalPopup/ModalPopup";
function DashboardPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <button onClick={handleOpen}>Create</button>
        <ModalPopup open={open} handleClose={handleClose} />
      </div>
    </>
  );
}

export default DashboardPage;
