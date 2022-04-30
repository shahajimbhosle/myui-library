import React from "react";
import styled from "styled-components";
import theme from "../theme";

interface ButtonProps {
  children: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "danger";
  disabled?: boolean;
  startIcon?: any;
  endIcon?: any;
}

const getBackgroundColor = (
  color: string,
  disabled: boolean,
  isForHover: boolean = false
): string => {
  if (disabled) return theme.color.disabledBg;

  switch (color) {
    case "secondary":
      return isForHover ? theme.color.secondaryDark : theme.color.secondary;

    case "success":
      return isForHover ? theme.color.successDark : theme.color.success;

    case "danger":
      return isForHover ? theme.color.dangerDark : theme.color.danger;

    default:
      return isForHover ? theme.color.primaryDark : theme.color.primary;
  }
};

const getSize = (size: string): string => {
  switch (size) {
    case "sm":
      return `
      font-size: 12px;
      padding: 5px;
      height: 15px;
      `;

    case "lg":
      return `
        font-size: 16px;
        padding: 5px 15px;
        height: 35px;
        `;

    default:
      return `
      font-size: 14px;
      padding: 5px 10px;
      height: 25px;
      `;
  }
};

const StyledButton = styled.button<{
  size: string;
  color: string;
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
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: ${({ disabled }) =>
    disabled ? theme.color.disabledText : theme.color.white};
  background-color: ${({ color, disabled }) =>
    getBackgroundColor(color, disabled)};

  ${({ disabled }) =>
    !disabled &&
    `
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    `}

  ${({ size }) => getSize(size)}

  &:hover {
    background-color: ${({ color, disabled }) =>
      getBackgroundColor(color, disabled, true)};
  }
`;

const IconContainer = styled.span`
  padding: 0 5px;
`;

export const Button = ({
  children,
  size = "md",
  color = "primary",
  disabled = false,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton size={size} color={color} disabled={disabled} {...props}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      <IconContainer>{children}</IconContainer>
      {endIcon && <IconContainer>{endIcon}</IconContainer>}
    </StyledButton>
  );
};
