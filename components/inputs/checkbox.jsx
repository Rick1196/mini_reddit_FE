import React, { Children } from "react";
import Input from "./input";

const Checkbox = ({ control, name, children, className, ...props }) => {
  return (
    <>
      <label className="flex flex-row gap-2">
        <Input
          {...{
            control,
            name,
            className: className || "",
            type: "checkbox",
            ...props,
          }}
        />
        {children}
      </label>
    </>
  );
};

export default Checkbox;
