import { useRef } from "react";

export default function UncontrolledInput() {
  const inputRef = useRef(null);

  const showValue = () => {
    alert(`Вы ввели: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Введите текст" />
      <button onClick={showValue}>Показать</button>
    </div>
  );
}
