import React, { useEffect, useState } from "react";
import { Meta } from "@storybook/react";
import { Progress } from ".";

const meta: Meta = {
  title: "Components/Progress",
  component: Progress,
};

export default meta;

export const ProgressBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value < 100) {
      setTimeout(() => setValue(value + 1), 50);
    } else {
      setTimeout(() => setValue(0), 500);
    }
  }, [value]);

  return <Progress value={value}></Progress>;
};
