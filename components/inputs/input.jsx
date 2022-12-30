import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  control,
  className,
  name,
  id,
  type,
  placeholder,
  label,
  defaultValue,
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue || "",
  });
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={className || ""}
        name={name}
        id={id || ""}
        type={type || "text"}
        placeholder={placeholder || ""}
        {...{ ...field, ...props }}
      />
    </>
  );
};
export default Input;
