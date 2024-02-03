import React, { useState } from "react";
import style from "./Button.module.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Button = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button className={style.btns} onClick={handleOpen}>
        Give Feedback
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: "center" }} >FeedBack</DialogTitle>
        <DialogContent>
          <form className={style.wrapper}>
            <input type="text" placeholder="Full Name" className={style.inputtag} />
            <input type="email" placeholder="Enter Email" className={style.inputtag}/>
            <input type="text" placeholder="Subject" className={style.inputtag}/>
            <textarea placeholder="Description" className={style.description}/>
          </form>
        </DialogContent>
        <DialogActions className={style.feed}>
          <button autoFocus onClick={handleClose} className={style.sum}>
          Submit Feedback
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Button;
