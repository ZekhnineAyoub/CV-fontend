import React from "react";
import { Form, Input, Button } from "antd";
import "../index.css";
import axios from "axios";

const baseURL = "contact";
const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 10,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email ",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const Contact = () => {
  const onFinish = (values) => {
    console.log("values");
  };

  /////call api ///////

  const [post, setPost] = React.useState(null);

  function createPost() {
    axios
      .post(baseURL)
      .then((response) => {
        setPost(response.data);
      });
  }
  return ( 
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={["user", "civilite"]} label="Civilite">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={["user", "entreprise"]} label="Entreprise">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={["user", "telephone"]} label="Téléphone*">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={["user", "commentaire"]} label="Commentaire">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
        <Button onClick= {createPost} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contact;
