import React from "react";
import { Meta } from "@storybook/react";
import { Breadcrumb } from ".";

const meta: Meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

export default meta;

export const Breadcrumbs = () => (
  <Breadcrumb
    links={[
      {
        content: "Home",
        order: 1,
      },
      {
        content: "Components",
        order: 2,
      },
      {
        content: "Buttons",
        order: 3,
      },
    ]}
  />
);
