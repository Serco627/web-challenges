import React from "react";
import "./styles.css";
import BookList from "./Booklist";

export default function App() {
  // Definition der Book Funktion innerhalb von App
  function Book(props) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>Author: {props.author}</p>
        <p>Year: {props.year}</p>
        <hr />
      </div>
    );
  }

  return (
    <div>
      <HelloWorld />
      <h2>Hello World 2</h2>
      <BookList /> {/* Rendern der BookList innerhalb von App */}
    </div>
  );
}

function HelloWorld() {
  return <h1>Hello World 1</h1>;
}
