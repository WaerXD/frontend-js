import React from "react";
import { Button, Space } from "antd";

function ControlPanel() {
  return (
    <Space direction="vertical" style={{ marginTop: 30 }}>
      <Button type="primary" style={{ width: 200, background:"green" }}>
        Обновить
      </Button>
      <Button type="primary" style={{ width: 200, background:"#e3dd22" }}>
        Создать
      </Button>
      <Button type="primary" danger style={{ width: 200 }}>
        Удалить всё
      </Button>
    </Space>
  );
}

export default ControlPanel;
