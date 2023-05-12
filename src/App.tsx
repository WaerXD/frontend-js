import React from "react";
import ToDoList from "./components/ToDoList";
import ControlPanel from "./components/ControlPanel";
import { Col, Row } from "antd";
import { useTodos } from "./hooks/todos";

function App() {
  const { todoList } = useTodos();
  return (
    <>
      <h1>ToDo App</h1>
      <hr />
      <Row>
        <Col span={8}>
          {todoList.map((todo) => (
            <ToDoList todo={todo} key={todo.id} />
          ))}
        </Col>
        <Col span={8}>
          <ControlPanel />
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
}

export default App;
