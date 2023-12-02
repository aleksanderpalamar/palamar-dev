"use client";

import { experimental_useFormStatus } from "react-dom";

type SubmitProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Submit = (props: SubmitProps) => {
  const status = experimental_useFormStatus();
  
  return (
    <button {...props} />
  );
};
