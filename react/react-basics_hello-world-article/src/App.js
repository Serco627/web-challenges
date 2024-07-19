import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <HelloWorldArticle />;
      <HelloWorldArticle />;
    </div>
  );
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is the header</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </p>
    </article>
  );
}
