import React from "react";
import "./styles.css";
import Button from "./components/Button";
import { handleClick } from "./components/Button";
import { handleMouseOver } from "./components/Button";

export default function App() {
  return (
    <div>
      <Button
        color="white"
        text="Submit"
        background="green"
        onClick={handleClick}
      />

      <Button
        color="white"
        text="Decline"
        background="red"
        onClick={handleMouseOver}
      />

      <Button
        color="blue"
        text="Disabled Button"
        disabled
        background="white"
        onClick={handleClick}
      />
    </div>
  );
}
