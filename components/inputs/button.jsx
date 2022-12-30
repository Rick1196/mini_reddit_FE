import React from "react";
import ReactTooltip from "react-tooltip";
const Button = ({ children, ...props }) => {
  const { tooltip, tip, ...buttonProps } = props;
  const [isTooltipVisible, setTooltipVisibility] = React.useState(false);

  React.useEffect(() => {
    setTooltipVisibility(true);
  }, []);
  return (
    <>
      <button data-tip={tip || ""} {...buttonProps}>
        {children}
      </button>
      {tooltip && isTooltipVisible && <ReactTooltip {...{ tooltip }} />}
    </>
  );
};

export default Button;
