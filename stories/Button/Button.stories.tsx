import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

// Primary button
const PrimaryProps = {
  onClick: () => alert("You clicked primary button."),
};

export const Primary = () => <Button {...PrimaryProps}>Primary</Button>;
