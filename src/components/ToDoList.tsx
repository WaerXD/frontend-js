import React from "react";
import { Card, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import IToDo from "../interfaces/IToDo";
import axios from "axios";
const URL = "http://localhost:3100/todo";

interface ToDo {
  todo: IToDo;
}

async function deleteTodo(id: number | undefined) {
  await axios.delete(URL + "/" + id);
}

function ToDoList({ todo }: ToDo) {
  return (
    <Space direction="vertical" size={16}>
      {" "}
      <Card
        title={todo.title}
        style={{ width: 300, border: "solid black 1px" }}
        actions={[
          <EditOutlined key="edit" />,
          <DeleteOutlined
            key="delete"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          />,
        ]}
      >
        <p>{todo.description}</p>
      </Card>
    </Space>
  );
}

export default ToDoList;
