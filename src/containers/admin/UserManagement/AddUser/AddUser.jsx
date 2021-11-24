import React, { useState} from 'react';
import { useDispatch } from 'react-redux'
import {
  Form,
  Input,
  DatePicker,
  Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { actAddUser } from '../module/action';

function AddUser(props) {
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState('default');
  console.log('hello ');
  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        password: '',
        phone: '',
        birthday: '',
        gender: true,
        role: '',
        skill: [],
        certification: [],
        bookingJob: []
    },
    onSubmit: (values) => {
      console.log(values);
       dispatch(actAddUser(values))
    }
  })
  const handleChangeDatePicker = (value) => {
    let birthday = moment(value).format('YYYY/MM/DD')
    console.log(birthday);
    formik.setFieldValue('birthday', birthday)
  }

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    }
  }

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="AddUser">
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}>
        <Form.Item label=" name" style={{marginTop: "80px"}} >
          <Input name="name" onChange={formik.handleChange}  />
        </Form.Item>
        <Form.Item label="email">
          <Input name="email" onChange={formik.handleChange}  />
        </Form.Item>
        <Form.Item label="password" >
          <Input name="password" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="phone" >
          <Input name="phone" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="skill" >
          <Input name="skill" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="role" >
          <Input name="role" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="certification" >
          <Input name="certification" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="birthday">
          <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label=" gender ">
          <Switch name="gender" onChange={handleChangeSwitch('gender')} />
        </Form.Item>
        <Form.Item label="Tac vụ">
          <button type="submit" className="btn btn-default" value=""> Thêm</button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddUser;