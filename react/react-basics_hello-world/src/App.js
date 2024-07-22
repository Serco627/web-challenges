import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Serco" age="28" profession="Junior Frontend Developer" />
      <Greeting name="Peter" age="50" profession="Senior Frontend Developer" />
    </>
  );
}

function Greeting({ name, age, profession }) {
  return (
    <div className="card">
      <h1>Hello {name}. Welcome to our page!</h1>
      <p>
        {name} is {age} years old.
      </p>
      <p>
        {name} is working as a {profession}
      </p>
    </div>
  );
}
