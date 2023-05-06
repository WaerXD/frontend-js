import React from "react";
import { Card, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import IToDo from "../interfaces/IToDo";

interface ToDo {
  todo: IToDo;
}

function ToDoList(props: ToDo) {
  return (
    <Space direction="vertical" size={16}>
      {" "}
      <Card
        title={props.todo.title}
        style={{ width: 300, border: "solid black 1px" }}
        actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}
      >
        <p>{props.todo.description}</p>
      </Card>
    </Space>
  );
}

export default ToDoList;
