import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import { Col, Row, Form, Button, Input, Space } from "antd";
import { useTodos } from "./hooks/todos";
import axios from "axios";
import IToDo from "./interfaces/IToDo";

const URL = "http://localhost:3100/todo";

function App() {
  const [form] = Form.useForm();
  const { todoList, reloadTodo } = useTodos();
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleCreate = async (todo: IToDo) => {
    await axios.post(URL, {
      title: inputTitle,
      description: inputDescription,
      isCompleted: false,
    });
    reloadTodo();
    onReset();
  };

  const deleteAllTodos = async () => {
    await axios.delete(URL);
    reloadTodo();
  };

  const onReset = () => {
    form.resetFields();
  };

  const onReload = () => {
    reloadTodo();
  }

  return (
    <>
      <h1>ToDo App</h1>
      <hr />
      <Row>
        <Col span={8} >
          {}
          {todoList.map((todo) => (
            <ToDoList todo={todo} key={todo.id} onReload={onReload}/>
          ))}
        </Col>
        <Col span={8}>
          <Space direction="vertical" style={{ marginTop: 30 }}>
            <Button
              type="primary"
              style={{ width: 200, background: "green" }}
              onClick={() => {
                reloadTodo();
              }}
            >
              Обновить
            </Button>
            <Button
              type="primary"
              danger
              style={{ width: 200 }}
              onClick={() => {
                deleteAllTodos();
              }}
            >
              Удалить всё
            </Button>
          </Space>
        </Col>
        <Col span={8}>
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, marginTop: 30, marginRight: 70 }}
            initialValues={{ remember: true }}
            onFinish={handleCreate}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Заголовок"
              name="title"
              initialValue={""}
              rules={[
                { required: true, message: "Пожалуйста введите заголовок" },
              ]}
            >
              <Input
                value={inputTitle}
                onChange={(event) => {
                  setInputTitle(event.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              label="Описание"
              name="description"
              initialValue={""}
              rules={[
                { required: true, message: "Пожалуйста введите описание" },
              ]}
              style={{ marginTop: 10 }}
            >
              <Input
                value={inputDescription}
                onChange={(event) => {
                  setInputDescription(event.target.value);
                }}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: 10, width: 200, background: "#e3dd22" }}
              >
                Создать
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default App;
