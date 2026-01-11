import { useState } from "react";
import useFormInput from "../hooks/useFormInput";

export default function CreatePost({ onSubmit }) {
  const content = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.value.trim()) return;

    onSubmit(content.value);
    content.reset();
  };

  return (
    <div className="create-post">
      <input
        type="text"
        placeholder="Quoi de neuf ?"
        value={content.value}
        onChange={content.onChange}
      />
      <button onClick={handleSubmit}>Publier</button>
    </div>
  );
}
