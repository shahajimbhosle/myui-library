import React from "react";
import { Meta } from "@storybook/react";
import styled from "styled-components";

import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

/** Different colors of button */
export const Color = () => (
  <ButtonsContainer>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="danger">Danger</Button>
  </ButtonsContainer>
);

/** Different sizes of button */
export const Size = () => (
  <ButtonsContainer>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </ButtonsContainer>
);

/** Disabled button */
export const Disabled = () => <Button disabled>Disabled</Button>;
