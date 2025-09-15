import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <form>
        
      <input
        type="text"
        value={name}
        onChange={(e) => 
            setName(e.target.value)}
        placeholder="Ваше имя"
      />

      <p>Привет, {name || "гость"}!</p>

    </form>
  );
}