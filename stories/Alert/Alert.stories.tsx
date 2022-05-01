import React from "react";
import { Meta } from "@storybook/react";
import { Alert } from ".";

const meta: Meta = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;

export const Alerts = () => (
  <>
    <Alert>
      This is <strong>Info</strong> message.
    </Alert>
    <Alert variant="warning">
      This is <strong>Warning</strong> message.
    </Alert>
    <Alert variant="success">
      This is <strong>Success</strong> message.
    </Alert>
    <Alert variant="error">
      This is <strong>Error</strong> message.
    </Alert>
  </>
);
