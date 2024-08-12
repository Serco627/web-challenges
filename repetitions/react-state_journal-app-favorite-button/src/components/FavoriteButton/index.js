import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  const [isFavorite, setIsFavourite] = useState(false);
  const toggleFavouriteButton = () => {
    setIsFavourite(!isFavorite);
  };

  return (
    <button
      className="favorite-button"
      onClick={() => {
        toggleFavouriteButton();
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
