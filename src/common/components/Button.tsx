import styled from "@emotion/styled";
import { color } from "../styles/colors";

export const Button = styled.button`
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${color.emerald};

  &:hover,
  &:focus,
  &:active {
    background-color: ${color.lightEmerald};
  }

  &:disabled {
    background-color: ${color.gray};
  }
`;
