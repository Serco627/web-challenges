import Card from "./components/Card";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <main>
      <h1>Hello from React</h1>
      <Card name="Homer Jay Simpson" />

      <Card name="Serco" />
    </main>
  );
}

export default App;
