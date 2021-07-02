import React from "react";
import "../index.css";

const CreateNote = () => {
  return (
    <>
      <div className="note-area">
        <form action="">
          <input type="text" placeholder="Title" autoComplete="off" />
          <textarea
            placeholder="write a note..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
