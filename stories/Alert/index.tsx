import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  FaExclamationCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import theme from "../theme";

const iconStyles = {
  marginTop: "4px",
  marginRight: "5px",
};

const getIcon = (variant: string): ReactNode => {
  switch (variant) {
    case "success":
      return <FaCheckCircle style={iconStyles} />;

    case "warning":
      return <FaExclamationTriangle style={iconStyles} />;

    case "error":
      return <FaExclamationCircle style={iconStyles} />;

    default:
      return <FaInfoCircle style={iconStyles} />;
  }
};

const getBgColor = (variant: string): string => {
  switch (variant) {
    case "success":
      return theme.color.alertSuccessBg;

    case "warning":
      return theme.color.alertWarningBg;

    case "error":
      return theme.color.alertErrorBg;

    default:
      return theme.color.alertInfoBg;
  }
};

interface AlertProps {
  variant?: "info" | "success" | "warning" | "error";
  children?: ReactNode | string;
}

const StyledP = styled.p<AlertProps>`
  color: ${theme.color.white};
  background-color: ${({ variant = "info" }) => getBgColor(variant)};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 5px;
  margin: 10px;
  border-radius: 3px;
`;

export const Alert = ({ variant = "info", children, ...props }: AlertProps) => {
  return (
    <StyledP variant={variant} {...props}>
      <span>{getIcon(variant)}</span>
      <div>{children}</div>
    </StyledP>
  );
};
