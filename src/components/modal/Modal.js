import React, {useState, useEffect} from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from "@material-ui/core";


function Modal({ items, isDialogOpened, handleCloseDialog }) {

  const [title, setTitle] = useState(items.title);
  const [body, setBody] = useState(items.body);

  const handleClose = () => {
    handleCloseDialog(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    items.title = title;
    items.body = body;
    handleCloseDialog(false);
  };

  return(
    <div>
      <Dialog
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit card</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="editedTitle"
            value={title}
            type="textfield"
            fullWidth
            required
            label="Required"
            defaultValue={items.title}
            variant="outlined"
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="editedBody"
            value={body}
            type="textfield"
            fullWidth
            required
            label="Required"
            defaultValue={items.body}
            variant="outlined"
            onChange={e => setBody(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;