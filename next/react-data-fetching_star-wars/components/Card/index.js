import { DescriptionList, StyledCard, StyledButton } from "./Card.styled";
import Link from "next/link";

export default function Card({ id, name, height, eyeColor, birthYear }) {
  return (
    <StyledCard>
      <StyledButton>
        {" "}
        <Link href="/"> Back</Link>
      </StyledButton>
      <h1>Name: {name}</h1>
      <DescriptionList>
        <dt>ID:</dt>
        <dd>{id}</dd>
        <dt>Height:</dt>
        <dd>{height}</dd>
        <dt>Eye Color:</dt>
        <dd>{eyeColor}</dd>
        <dt>Birth Year:</dt>
        <dd>{birthYear}</dd>
      </DescriptionList>
    </StyledCard>
  );
}
