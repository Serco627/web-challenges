import styled from "styled-components";

export const DescriptionList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  justify-items: center;
`;

export const StyledCard = styled.article`
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid var(--color-light);
`;

export const StyledButton = styled.button`
  background-color: #f7f7f7;
  border: 2px solid #333;
  color: #333;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
`;
