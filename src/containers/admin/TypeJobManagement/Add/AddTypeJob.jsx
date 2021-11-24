import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {
    Form,
    Input,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import { actAddTypeJob } from '../modules/action';

export default function AddTypeJob() {
    const dispatch = useDispatch();
    const [componentSize, setComponentSize] = useState('default');
    console.log('hello ');
    const formik = useFormik({
        initialValues: {
            // subTypeJobs: [],
            // deleteAt: false,
            name: "",
            status: false,
        },
        onSubmit: (values) => {
            console.log(values);
            dispatch(actAddTypeJob(values));
        }
    })
  
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div>
            <div className="">
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
                    <Form.Item label=" name" style={{ marginTop: "80px" }} >
                        <Input name="name" onChange={formik.handleChange} />
                    </Form.Item>
                    {/* <Form.Item label=" subTypeJobs" >
                        <Input name="subTypeJobs" onChange={formik.handleChange} />
                    </Form.Item> */}
                
                    {/* <Form.Item label=" deleteAt ">
                        <Switch name="deleteAt" onChange={handleChangeSwitch('deleteAt')} />
                    </Form.Item> */}
                    <Form.Item label=" status ">
                        <Switch name="status" onChange={handleChangeSwitch('status')} />
                    </Form.Item>
                    <Form.Item label="Tác vụ">
                        <button type="submit" className="btn btn-default" value=""> Thêm</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
