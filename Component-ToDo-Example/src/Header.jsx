import React from "react";

export default function Header(props) {
  const { amountOfTodos } = props;

  return <h1>My Todo List contains {amountOfTodos} things </h1>;
}
