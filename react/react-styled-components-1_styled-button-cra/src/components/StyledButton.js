import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const StyledPrimaryButton = styled.button`
  background-color: blue;
  padding: 15px 32px;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: yellow;
    color: black;
  }
`;

export const StyledDecrementButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const StyledResetButton = styled.button`
  background-color: grey;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export default StyledButton;
