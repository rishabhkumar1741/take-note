import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = () => {
  return (
    <>
      <div className="note">
        <h1>Title</h1>
        <br />
        <p>rihsabakhb</p>
        <DeleteOutlineIcon className="delete" />
      </div>
    </>
  );
};

export default Note;
