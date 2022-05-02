import React, { ReactNode } from "react";
import styled from "styled-components";
import theme from "../theme";

interface LinkProps {
  color?: string;
  children: ReactNode;
}

const A = styled.a<{ color: string }>`
  color: ${({ color }) => color};
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Link = ({
  color = theme.color.primary,
  children,
  ...props
}: LinkProps) => {
  return (
    <A color={color} {...props}>
      {children}
    </A>
  );
};
