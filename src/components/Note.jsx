import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import "../index.css";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginLeft: "55%",
    marginTop: "40%",
    fontSize: 15,
  },
}));

const Note = (props) => {
  const classes = useStyles();
  const deletethis = (event) => {
    props.deleteitem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <span>{props.note}</span>
        <Button
          onClick={deletethis}
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default Note;
