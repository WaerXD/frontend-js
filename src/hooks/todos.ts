import { useState, useEffect } from "react";
import IToDo from "../interfaces/IToDo";
import axios from "axios";
const URL = "http://localhost:3100/todo";

export function useTodos() {
  const [todoList, setTodoList] = useState<IToDo[]>([]);

  function reloadTodo() {
    getTodos();
  }

  async function getTodos() {
    const response = await axios.get(URL);
    setTodoList(response.data.todoList);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return { todoList, reloadTodo };
}
