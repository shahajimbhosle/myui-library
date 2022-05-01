import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "../theme";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const loadingKeyframe = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

const StyledLoading = styled.div<SpinnerProps>`
  height: ${({ size }) => (size ? `${size}px` : "50px")};
  width: ${({ size }) => (size ? `${size}px` : "50px")};
  border: solid ${({ size }) => (size ? size / 5 : 10)}px
    ${theme.color.disabledBg};
  border-top-color: ${({ color }) => (color ? color : theme.color.red)};
  border-radius: 50%;
  animation: ${loadingKeyframe} 1s linear infinite;
`;

export const Spinner = (props: SpinnerProps) => <StyledLoading {...props} />;
