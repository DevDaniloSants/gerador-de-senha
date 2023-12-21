import { useState } from "react";

export default function useGenerator() {
  const [password, setPassword] = useState("");

  const generator = (value) => {
    const characters =
      "'!@#$%¨&*(),.1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'";
    let index = 0;
    let newPassword = "";
    for (let i = 0; i < value; i++) {
      index = Math.floor(Math.random() * characters.length);
      newPassword += characters[index];
    }

    setPassword(newPassword);
  };

  return { password, generator };
}
