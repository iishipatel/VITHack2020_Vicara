import React, { useState } from "react";
import { useHistory } from "react-router";

import { Form, Input, Button, Radio } from "antd";
import axios from "axios";
import "./Form.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 96 },
};
const tailLayout = {
  // wrapperCol: { offset: 8, span: 16 },
};

function FormData(props) {
  //   const [formdata, setformdata] = useState(null);
  const [gender, setGender] = useState(0);

  let history = useHistory();

  const onFinish = (values) => {
    const bmi = (values.weight * 10000) / values.height ** 2;

    axios
      .post("https://healthinsafe.herokuapp.com/predict", {
        age: values.age,
        gender_num: gender,
        bmi: bmi,
        map: values.map,
        hr: values.hr,
        temp: values.temp,
      })
      .then((res) => {
        console.log(res);
        history.push({
          pathname: "/results",
          userData: { detail: res.data },
          bmi: bmi,
          usersName: values.Name,
          values: values,
          gender: gender
        });
      })
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const genderhandle = (e) => {
    setGender(e.target.value);
  };

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="formdatalist"
      >
        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Full Name:</div>
        <Form.Item name="Name">
          <Input placeholder="Sambhav Jain" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Age:</div>
        <Form.Item name="age">
          <Input placeholder="20" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Gender:</div>

        <Radio.Group
          onChange={genderhandle}
          value={gender}
          className="radio_btn_antd"
        >
          <Radio value={1}>Male</Radio>
          <Radio value={0}>Female</Radio>
        </Radio.Group>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Height (cm):</div>
        <Form.Item name="height">
          <Input placeholder="169" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Weight (kg):</div>

        <Form.Item name="weight">
          <Input placeholder="70" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Heart Rate:</div>
        <Form.Item name="hr">
          <Input placeholder="112" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Temprature (F):</div>
        <Form.Item name="temp">
          <Input placeholder="102" />
        </Form.Item>

        <div style={{ color: "#EFF3F8", fontSize: 16 }}>Blood Pressure:</div>
        <Form.Item name="map">
          <Input placeholder="108" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#0ED470",
              color: "#11151B",
              width: "100%",
              fontWeight: 600,
              fontSize: 14,
              border: "none",
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default FormData;