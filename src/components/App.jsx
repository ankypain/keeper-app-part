import React from "react";
import ReactDOM from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Note from "./Note.js";
import contacts from "../contactList.js";
import notes from "../notes.js";
function App() {
  return (
    <React.StrictMode>
      <Header />
      {contacts.map((contacts) => (
        <Card
          key={contacts.id}
          name={contacts.name}
          img={contacts.imgUrl}
          mobile={contacts.mobile}
        />
      ))}
      {notes.map((data) => (
        <Note key={data.id} title={data.title} content={data.content} />
      ))}

      <Footer />
    </React.StrictMode>
  );
}

export default App;
