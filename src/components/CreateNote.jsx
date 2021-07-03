import React from "react";
import "../index.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = () => {
  return (
    <>
      <div className="note-area">
        <form action="">
          <input type="text" placeholder="Title" autoComplete="off" />
          <textarea
            placeholder="write a note..."
            id=""
            cols=""
            rows=""
          ></textarea>
          <div className="form-button">
            <IconButton
              className="button-icon"
              style={{ color: "yellowgreen" }}
              aria-label="delete"
            >
              <AddIcon fontSize="large" />
            </IconButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
