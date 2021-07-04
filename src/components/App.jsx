import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [listofnote, setlistodnote] = useState([]);

  const addnotetolist = (note) => {
    alert("you want to add");
    setlistodnote((pres) => {
      return [...pres, note];
    });
    console.log(note);
  };

  const onDelete = (del) => {
    setlistodnote((prev) => {
      return prev.filter((currdata, index) => {
        return index !== del;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passnote={addnotetolist} />
      {listofnote.map((item, index) => {
        return (
          <Note
            deleteitem={onDelete}
            id={index}
            key={index}
            title={item.title}
            note={item.note}
          />
        );
      })}
    </>
  );
};

export default App;
