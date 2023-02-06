import * as React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";

const Input = React.forwardRef(function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled
      slotProps={{
        input:  { className:"bg-blue-100 text-red-900 border w-12" },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default Input;
