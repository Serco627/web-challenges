import styled from "styled-components";

const StyledWrapper = styled.div`
  border: solid black 3px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 2rem;
  color: Darkblue;
`;

const StyledCardDescription = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  background: darkgrey;
  color: pink;
`;

export default function Card() {
  return (
    <StyledWrapper>
      <StyledTitle>This is a header</StyledTitle>
      <StyledCardDescription>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </StyledCardDescription>
    </StyledWrapper>
  );
}
