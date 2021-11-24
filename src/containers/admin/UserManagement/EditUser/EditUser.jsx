import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Radio, DatePicker, Switch, } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { actDetailUser, actEditUser } from '../module/action';

function EditUser(props) {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.listUserReducer);
  console.log("editUser", detailUser);
      let { idUser } = props.match.params;

  useEffect(() => {
    dispatch(actDetailUser(idUser));
  }, [dispatch, idUser]);
  const [componentSize, setComponentSize] = useState('default');
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      _id: detailUser?._id,
      name: detailUser.name,
      email: detailUser?.email,
      password: detailUser?.password,
      phone: detailUser?.phone,
      birthday: detailUser.birthday,
      gender: detailUser.gender,
      role: detailUser.role,
      skill: detailUser.skill,
      certification: detailUser.certification,
      bookingJob: detailUser.bookingJob
    },
    onSubmit: (values) => {
      console.log("values", values);
      let { idUser } = props.match.params;
      dispatch(actEditUser(values, idUser))

    }
  })
  const handleChangeDatePicker = (value) => {
    let birthday = moment(value);
    console.log(birthday);
    formik.setFieldValue('birthday', birthday)
  }
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
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
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label=" name" style={{ marginTop: "80px" }} >
          <Input name="name" onChange={formik.handleChange} value={formik.values.name} />
        </Form.Item>
        <Form.Item label="email">
          <Input name="email" onChange={formik.handleChange} value={formik.values.email} />
        </Form.Item>
        <Form.Item label="password" >
          <Input name="password" onChange={formik.handleChange} value={formik.values.password} />
        </Form.Item>
        <Form.Item label="phone" >
          <Input name="phone" onChange={formik.handleChange} value={formik.values.phone} />
        </Form.Item>
        <Form.Item label="birthday">
          <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} value={moment(formik.values.birthday)} />
        </Form.Item>
        <Form.Item label=" gender ">
          <Switch name="gender" onChange={(value) => { formik.setFieldValue("gender", value);}}
            checked={formik.values.gender} />
        </Form.Item>
        <Form.Item label="Tac vụ">
          <button type="submit" className="btn btn-default" value=""> Thêm</button>
        </Form.Item>
      </Form>
    </>
  );
};
export default EditUser;