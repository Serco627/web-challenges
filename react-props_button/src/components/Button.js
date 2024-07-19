export function handleClick() {
  alert("You clicked a button");
}

export function handleMouseOver() {
  console.log("You clicked the button");
}

export default function Button({ color, disabled, text, background, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        color: color,
        backgroundColor: background,
        margin: "30px",
        padding: "10px",
        border: "5px solid black",
        boxShadow: "1px 1px 10px 10px yellow",
      }}
    >
      {text}
    </button>
  );
}
