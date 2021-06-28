import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./App.css";

function App() {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleSave = () => {
    setOpen(false);
  };

  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((res) => setItems(res))
      .catch(error => console.log('error: ', error))
  }, [])

  return (
    <div className="App">
      <Card className="card">
        <CardContent className="content">
          <Grid container>
            <Grid item xs={11}>
              <Typography
                id="title"
                className="heading"
                variant={"h6"}
                gutterBottom
              >
                {items.title}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleClickOpen}> <EditIcon /> </IconButton>
              <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Dialog box</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="editedTitle"
                    value="Title"
                    type="textfield"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="editedBody"
                    value="Lorem ipsum dolor sit amet"
                    type="textfield"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCancel} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleSave} color="primary">
                    Save
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
          <Typography
            id="body"
            className="subheading"
            variant={"caption"}
          >
            {items.body}
          </Typography>
        </CardContent>
      </Card>
      {/* <IconButton> <AddCircleIcon onClick={() => console.log('Heyyy')}/> </IconButton> */}
    </div>
  );
}

export default App;
