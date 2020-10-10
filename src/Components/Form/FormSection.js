import React  from 'react'
import { Form, Input, Button, Radio } from 'antd';

function FormSection() {

    const [form] = Form.useForm();
    return (
        <div style={{ fontFamily: 'Open Sans' }} >
            <Form
              form={form}
              layout="vertical"
            >
              <Form.Item required>
                <div style={{ color: "#EFF3F8", fontSize: 16}}>Full Name</div>
                <Input placeholder="John Doe" />
              </Form.Item>
              <Form.Item name="gender"  >
                <div style={{ color: "#EFF3F8", fontSize: 16, paddingBottom: 5}}>Gender</div>
                <Radio.Group className="row" >
                    <div className="col-lg-6">
                      <Radio value="Male" style={{  color: "#EFF3F8", fontSize: 16 }} >Male</Radio>
                    </div>
                    <div className="col-lg-6">
                      <Radio value="Female"  style={{  color: "#EFF3F8", fontSize: 16 }}>Female</Radio>
                    </div>
                </Radio.Group>
              </Form.Item>
              <Form.Item required>
                <div style={{ color: "#EFF3F8", fontSize: 16}}>Height</div>
                <Input placeholder="129.3" style={{ width: '70%' }}  />
                <Input defaultValue="centimeter(cm)" style={{ width: '30%' }} />
              </Form.Item>
              
              <Form.Item required>
                <div style={{ color: "#EFF3F8", fontSize: 16}}>Weight</div>
                <Input placeholder="75.4" style={{ width: '70%' }}  />
                <Input defaultValue="kilograms (Kg)" style={{ width: '30%' }}  />
              </Form.Item>
              <Form.Item required>
                <div style={{ color: "#EFF3F8", fontSize: 16}}>Heart Rate</div>
                <Input placeholder="77"  />
              </Form.Item>
              <Form.Item required>
                <div style={{ color: "#EFF3F8", fontSize: 16}}>Temperature</div>
                <Input placeholder="98.6" style={{ width: '70%' }}  />
                <Input defaultValue="farenheit" style={{ width: '30%' }}  />
              </Form.Item>
              <Form.Item required>
                <div style={{ color: "#EFF3F8", fontSize: 16}}>Blood Pressure</div>
                <Input placeholder="Upper Limit" style={{ width: '50%' }}  />
                <Input placeholder="Lower Limit" style={{ width: '50%' }} />
              </Form.Item>
              <Form.Item style={{ marginTop: '3rem' }} >
                <Button style={{ backgroundColor: '#0ED470', color:'#11151B', width: '100%', fontWeight: 600, fontSize: 14, border: 'none' }} >GENERATE REPORT</Button>
              </Form.Item>
            </Form>
        </div>
    )
}

export default FormSection
