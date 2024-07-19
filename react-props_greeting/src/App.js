import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Serco" />
      <Greeting name="Lorenz" />
      <Greeting name="Andrea" />
    </>
  );
}

function Greeting({ name }) {
  const coach = "Andrea";
  return (
    <div>
      <h1>{name === coach ? "Hello Coach!" : `Hello ${name}`}</h1>
    </div>
  );
}
