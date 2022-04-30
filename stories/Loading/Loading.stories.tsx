import React from "react";
import { Meta } from "@storybook/react";
import styled from "styled-components";

import { Loading } from ".";
import { Button } from "../Button";
import theme from "../theme";

const meta: Meta = {
  title: "Components/Loding",
  component: Loading,
};

export default meta;

const LoadingContainer = styled.div`
  with: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LodingDiv = () => (
  <LoadingContainer>
    <Loading />
  </LoadingContainer>
);

export const LoadingButton = () => (
  <Button
    disabled
    startIcon={<Loading size={12} color={theme.color.disabledText} />}
  >
    Loading
  </Button>
);
