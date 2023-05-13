import React, { useState } from "react";
import { Card, Space, Modal, Input, Form, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import IToDo from "../interfaces/IToDo";
import axios from "axios";

const URL = "http://localhost:3100/todo";

interface ToDo {
  todo: IToDo;
  onReload: () => void;
}

function ToDoList({todo, onReload}: ToDo) {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateTodos = async () => {
    await axios.patch(URL + "/" + todo.id, {
      title: titleValue,
      description: descriptionValue,
    });
    onReload();
    handleCancel();
    resetInputs();
  };

  const deleteTodo = async () => {
    await axios.delete(URL + "/" + todo.id);
    onReload();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUpdateValues = () => {
    setTitleValue(todo.title);
    setDescriptionValue(todo.description);
  };

  const resetInputs = () => {
    setTitleValue("");
    setDescriptionValue("");
  };

  return (
    <Space direction="vertical" size={16}>
      {" "}
      <Card
        title={todo.title}
        style={{ width: 300, border: "solid black 1px" }}
        actions={[
          <EditOutlined
            key="edit"
            onClick={() => {
              showModal();
              handleUpdateValues();
            }}
          />,
          <DeleteOutlined
            key="delete"
            onClick={() => {
              deleteTodo();
            }}
          />,
        ]}
      >
        <p>{todo.description}</p>
      </Card>
      <Modal
        title="Изменить"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {" "}
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, marginTop: 20, marginRight: 70 }}
          initialValues={{ remember: true }}
          onFinish={handleUpdateTodos}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Заголовок"
            name="title"
            initialValue={titleValue}
            rules={[
              { required: true, message: "Пожалуйста введите заголовок" },
            ]}
          >
            <Input
              value={titleValue}
              onChange={(event) => {
                setTitleValue(event.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Описание"
            name="description"
            initialValue={descriptionValue}
            rules={[{ required: true, message: "Пожалуйста введите описание" }]}
            style={{ marginTop: 10 }}
          >
            <Input
              value={descriptionValue}
              onChange={(event) => {
                setDescriptionValue(event.target.value);
              }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 60 }}
            >
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
}

export default ToDoList;
