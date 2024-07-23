import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleIncrement() {
    setPeople(people + 1);
  }

  function handleDecrement() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        setPeople={setPeople}
        people={people}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}

// Um sicherzustellen, dass die Anzahl der Personen in der Nachricht “You are going to reserve a table for X people.” dynamisch ist
// und sich bei jedem Klick auf die Schaltflächen aktualisiert, musst du den Zustand der Counter Komponente in die App Komponente
// hochziehen und dort verwalten. Dann kannst du den Zustand als Prop an die Counter Komponente übergeben.
