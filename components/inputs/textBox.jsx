import React from "react";
import { useController } from "react-hook-form";

const TextBox = ({ control, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: props.defaultValue || "",
  });
  return (
    <>
      {props.labbel && <label htmlFor={props.id}>{props.label}</label>}
      <textarea
        className={props.className || ""}
        name={props.name}
        id={props.id}
        cols={props.cols || 30}
        rows={props.rows || 10}
        {...field}
      ></textarea>
    </>
  );
};
export default TextBox;
