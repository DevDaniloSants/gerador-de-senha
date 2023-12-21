import { useState } from "react";

export default function useCopy() {
  const [copy, setCopy] = useState("Copiar");

  const copiedText = (text, password) => {
    setCopy(text);
    navigator.clipboard.writeText(password);
  };

  return { copy, copiedText };
}
