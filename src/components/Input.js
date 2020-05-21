import React, { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  // const handleCheckboxToggle = (e) => setChecked(!checked);
  const handleCheckboxToggle = (e) => setChecked((prevChecked) => !prevChecked);
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxToggle}
      />
      <ul>
        <li>{text}</li>
        <li>{checked.toString()}</li>
      </ul>
    </>
  );
}
