import { useState } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import { StyledDecrementButton } from "./StyledButton";
import { StyledResetButton } from "./StyledButton";

const StyledCount = styled.p`
  padding: 20px;
  font-size: 2rem;
  color: pink;
`;

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <StyledCount>{count}</StyledCount>
      <StyledButton
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </StyledButton>
      <StyledResetButton
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </StyledResetButton>
      <StyledDecrementButton
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </StyledDecrementButton>
    </div>
  );
}
