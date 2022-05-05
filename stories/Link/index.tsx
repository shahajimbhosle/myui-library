import React, { ReactNode } from "react";
import styled from "styled-components";
import theme from "../theme";
import { LightenDarkenColor } from "../util";

interface LinkProps {
  color?: string;
  children: ReactNode;
}

const A = styled.a<{ color: string }>`
  color: ${({ color }) => LightenDarkenColor(color, 80)};
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    text-decoration: underline;
    color: ${({ color }) => color};
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
