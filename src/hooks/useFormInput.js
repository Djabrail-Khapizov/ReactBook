import { useState } from "react";

export default function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => setValue(e.target.value);
  const reset = () => setValue(initialValue);

  return { value, onChange, reset };
}
