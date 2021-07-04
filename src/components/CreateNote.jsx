import React, { useState } from "react";
import "../index.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [data, setdata] = useState({
    title: "",
    note: "",
  });

  const submiting = (event) => {
    const { name, value } = event.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addnote = () => {
    props.passnote(data);
    setdata((prev) => {
      return {
        title: "",
        note: "",
      };
    });
  };
  return (
    <>
      <div className="note-area">
        <form action="">
          <input
            onChange={submiting}
            value={data.title}
            name="title"
            type="text"
            placeholder="Title"
            autoComplete="off"
          />
          <textarea
            name="note"
            onChange={submiting}
            type="text"
            value={data.note}
            placeholder="write a note..."
            id="5"
            cols=""
            rows=""
          ></textarea>
          <div className="form-button">
            <IconButton
              onClick={addnote}
              size="large"
              color="primary"
              className="button-icon"
              style={{ color: "yellowgreen" }}
              aria-label="delete"
            >
              <AddIcon size="large" fontSize="large" />
            </IconButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
