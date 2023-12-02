"use client";

import { PropsWithChildren, useState } from "react";
//import { useFormState } from "react-dom";

type HTMLFormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

type FormProps = PropsWithChildren<
  Omit<HTMLFormProps, "action"> & {
    action: ( formData: FormData) => Promise<any>;
    onClose?: () => void;
  }
>;

export const FormLogin = (props: FormProps) => {
  //const [state, formAction] = useFormState(props.action, { error: null}); 
  
  return (
    <form {...props}>
      {/*state.error && 
        <div className="bg-rose-500/10 text-rose-500 rounded p-2">
          {state.error}
        </div>
  */}      
      {props.children}
    </form>
  );
};
