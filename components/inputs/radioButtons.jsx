import Input from "./input";
export const RadioButton = ({
  control,
  name,
  id,
  className,
  value,
  children,
  ...props
}) => {
  return (
    <label className="flex flex-row gap-2">
      <Input
        {...{
          control,
          name,
          id,
          className,
          value,
          type: "radio",
          ...props,
        }}
      />
      {children}
    </label>
  );
};

const RadioButtons = ({
  control,
  className,
  name,
  id,
  placeholder,
  options,
  ...props
}) => {
  return (
    <>
      {options.map((option, index) => (
        <RadioButton
          key={`option_${option.name}_${index}`}
          {...{
            control,
            name,
            id: option.id,
            className: option.className,
            value: option.value,
            type: "radio",
            ...props,
          }}
        >
          {option.label}
        </RadioButton>
      ))}
    </>
  );
};

export default RadioButtons;
