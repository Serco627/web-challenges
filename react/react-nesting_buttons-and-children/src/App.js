import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Sign up</Button>
      <Button>Log in</Button>
      <Button>Hinzufügen</Button>
      <Button>Löschen</Button>
      <Button>Klick mich</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
