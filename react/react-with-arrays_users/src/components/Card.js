import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ user }) {
  // •	user.roles ist ein Array von Rollen.
  // •	map iteriert über jedes Element im roles-Array und führt die Callback-Funktion aus.
  // •	In der Callback-Funktion wird für jedes tag-Element ein Tag-Komponent erstellt und zurückgegeben.
  // •	Der key-Prop wird gesetzt, um jedem Tag-Komponent einen eindeutigen Schlüssel zu geben.
  // •	Der tag-Prop wird gesetzt, um den Wert des aktuellen tag-Elements an den Tag-Komponent zu übergeben.

  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles.map((tag) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
