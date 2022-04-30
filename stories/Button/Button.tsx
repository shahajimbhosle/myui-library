import React, { ReactNode } from "react";
import styled from "styled-components";
import theme from "../theme";

interface ButtonProps {
  children: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "danger";
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const StyledButton = styled.button<{
  size: string;
  variant: string;
  disabled: boolean;
}>`
  box-sizing: inherit;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 0;
  user-select: none;
  cursor: pointer;
  color: #fff;
  background-color: ${theme.color.primary};
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  font-size: 16px;
  padding: 8px 15px;

  &:hover {
    background-color: #1565c0;
  }
`;

export const Button = ({
  children,
  size = "md",
  variant = "primary",
  disabled = false,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton size={size} variant={variant} disabled={disabled} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
};
