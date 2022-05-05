import React from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react";
import { Link } from ".";
import theme from "../theme";

const LinksContainer = styled.div`
  display: grid;
`;

const meta: Meta = {
  title: "Components/Link",
  component: Link,
};

export default meta;

export const Links = () => (
  <LinksContainer>
    <Link>Default link</Link>
    <Link color={theme.color.dangerDark}>Different Color</Link>
    <Link color="blue">Blue Color</Link>
  </LinksContainer>
);
