import React from "react";
import ToDoList from "./components/ToDoList";
import ControlPanel from "./components/ControlPanel";
import { Col, Row, Input, Button, Space } from "antd";
import IToDo from "./interfaces/IToDo";

const todos: IToDo[] = [
  {
    id: 1,
    title: "foo1",
    description: "bar1",
    isCompleted: false,
  },
  {
    id: 2,
    title: "foo2",
    description: "bar2",
    isCompleted: false,
  },
  {
    id: 3,
    title: "foo3",
    description: "bar3",
    isCompleted: false,
  },
  {
    id: 4,
    title: "foo4",
    description: "bar4",
    isCompleted: false,
  },
];
let todoList: JSX.Element[] = [];

for (let i = 0; i < todos.length; i++) {
  todoList.push(<ToDoList todo={todos[i]} />);
}

function App() {
  return (
    <>
      <h1>ToDo App</h1>
      <hr />
      <Row>
        <Col span={8}>{todoList}</Col>
        <Col span={8}>
          <ControlPanel />
        </Col>
        <Col span={8}>
          <Input
            placeholder="Заголовок"
            style={{ marginTop: 30, width: 300 }}
          />
          <Input placeholder="Описание" style={{ marginTop: 10, width: 300 }} />
          <Space direction="vertical" style={{ marginTop: 10 }}>
            <Button type="primary" style={{ width: 200 }}>
              Создать
            </Button>
            <Button type="primary" style={{ width: 200 }}>
              Сохранить
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  );
}

export default App;
