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

      {/* <Button text="Hello" /> das ist genau das gleiche wie oben, nur dass man es nicht extra für alle props dazuschreiben muss */}
    </main>
  );
}

function Button({ children, text }) {
  return (
    <button className="button" type="button">
      {children}
      {text}
    </button>
  );
}
