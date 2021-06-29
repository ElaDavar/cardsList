import React, {useState, useEffect} from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton
} from "@material-ui/core";
import Modal from "../modal/Modal";
import EditIcon from '@material-ui/icons/Edit';
import "./List.css";

function List() {

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((res) => setItems(res))
      .catch(error => console.log('error: ', error))
  }, [])

  return (
    <div>
      <Card className="card">
        <CardContent className="content">
          <Grid container>
            <Grid item xs={11}>
              <Typography
                id="titleText"
                className="heading"
                variant={"h6"}
                gutterBottom
              >
                {items.title}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Modal
                items={items}
                isDialogOpened={isOpen}
                handleCloseDialog={() => setIsOpen(false)}
              />
              <IconButton onClick={handleOpen}> <EditIcon /> </IconButton>
            </Grid>
          </Grid>
          <Typography
            id="bodyText"
            className="subheading"
            variant={"caption"}
          >
            {items.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default List;
