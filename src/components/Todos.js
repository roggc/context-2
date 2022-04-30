import { useEffect } from "react";
import { getTodosHooks } from "../context/hooks";

const { useTodosValues } = getTodosHooks();

const Todos = () => {
  const { todos } = useTodosValues();
  useEffect(() => {
    console.log("Todos rendered");
  });
  return <div>{todos[0].text}</div>;
};

export default Todos;
