import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  return (
    <>
      <Header />
      <CreateNote />
      <Note />
      <Note />
      <Footer />
    </>
  );
};

export default App;
