import { useRef } from "react";

export default function ClickCounter() {
  const countRef = useRef(0); // нач. значение

  function handleClick() {
    countRef.current += 1; // изм. напрямую
    console.log("Кликнули:", countRef.current);
  }

  return <button onClick={handleClick}>Кликни меня (счётчик в консоли)</button>;
}
