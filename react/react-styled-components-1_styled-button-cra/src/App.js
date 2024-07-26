import StyledButton from "./components/StyledButton";
import { StyledPrimaryButton } from "./components/StyledButton";
import Card from "./components/Card";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <main>
      <h1>Styled Components Challenge 2</h1>

      <Card />

      <StyledPrimaryButton
        onClick={() => {
          alert("Thats the primary Button");
        }}
      >
        Primary Button
      </StyledPrimaryButton>
      <Counter />
    </main>
  );
}

export default App;
