import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={10} valueB={15} />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      Mathematik am Morgen: {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}
