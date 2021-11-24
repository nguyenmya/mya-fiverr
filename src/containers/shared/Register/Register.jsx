import React, { useState } from 'react';
import { useFormik } from 'formik';
import moment from 'moment'; import { useDispatch } from 'react-redux';
import { actRegister } from './modules/action,';
import {
    Form,
    Input,
    DatePicker,
    Switch,
} from 'antd';
import "../Register/Register.scss"
export default function Register(props) {
    const dispatch = useDispatch();
    const [componentSize, setComponentSize] = useState('default');

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone: '',
            skill: [],
            certification: [],
            birthday: '',
            gender: true,
            type: '',
        },
        onSubmit: (value) => {
            console.log("values", value);
            dispatch(actRegister(value));
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
        <div className="register" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="register__content">
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

                    scrollToFirstError
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                    validateTrigger="onBlur">
                    <Form.Item label=" first_name" style={{ marginTop: "80px" }} name="first_name"
                        rules={[{ required: true, message: 'Please input your fist-name', whitespace: true }]}>
                        <Input name="first_name" onChange={formik.handleChange} />
                    </Form.Item >
                    <Form.Item label=" last_name" name="last-name" rules={[{ required: true, message: 'Please input your last-name', whitespace: true }]} >
                        <Input name="last_name" onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item label="email" name="email" rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}>
                        <Input name="email" onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item label="password" name="password" rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                        hasFeedback >
                        <Input.Password name="password" onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item label="phone" name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]} >
                        <Input name="phone" onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item label="skill" name="skill" rules={[{ required: true, message: 'Please input your skill', whitespace: true }]}>
                        <Input name="skill" onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item label="type" name="type" rules={[{ required: true, message: 'Please input your type', whitespace: true }]}  >
                        <Input name="type" onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item label="certification" name="certification" rules={[{ required: true, message: 'Please input your skill', whitespace: true }]} >
                        <Input name="certification" onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item label="birthday" name="birthday" >
                        <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
                    </Form.Item>
                    <Form.Item label=" gender " name=" gender" rules={[{ required: true, message: 'Please input your skill', whitespace: true }]}>
                        <Switch name="gender" onChange={handleChangeSwitch('gender')} />
                    </Form.Item>
                    <Form.Item >
                        <button type="submit" className="btn btn-default btn-register" value=""> Register</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
