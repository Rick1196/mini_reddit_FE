import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const FormWrapper = ({
  schema,
  requestedSubmit,
  setRequestedSubmit,
  children,
  onSubmit,
  ...props
}) => {
  const formProps = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (requestedSubmit === true) {
      formProps.handleSubmit(onSubmit)();
      setRequestedSubmit(false);
    }
  });

  return (
    <form onSubmit={formProps.handleSubmit(onSubmit)} {...props}>
      {children(formProps)}
    </form>
  );
};

export default FormWrapper;
