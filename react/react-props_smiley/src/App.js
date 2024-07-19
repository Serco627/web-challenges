import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <Smiley />
    </div>
  );
}

function Smiley({ isHappy }) {
  const happyIcon = "😃";
  const sadIcon = "🥲";
  return (
    <main>
      {isHappy ? "I'm so happy " + happyIcon : "I'm so sad " + sadIcon}
    </main>
  );
}
