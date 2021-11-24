import React, { useState, Fragment, useEffect } from "react";
import { Form, Input, Button, Radio, Switch, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListTypeJobs } from "components/Header/module/actions";
import { actAddSubJob} from "../module/actions";
export default function AddSubJob(props) {
  const dispatch = useDispatch();
  const { listTypeJobs } = useSelector((state) => state.TypeJobsReducer);
  useEffect(() => {
    dispatch(actFetchListTypeJobs());
  }, [dispatch]);
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      status: true,
      typeJob: null,
    },
    onSubmit: (values) => {
      dispatch(actAddSubJob(values));
    },
  });
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const renderListTypeJob = () => {
    return listTypeJobs.map((job, index) => {
      const { _id, name } = job;
      return (
        <Select.Option value={_id} key={index}>
          {name}
        </Select.Option>
      );
    });
  };

  return (
    <Fragment>
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
        size={componentSize}
      >
        <h2 className="text-center">Add SubJob</h2>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name">
          <Input name="name" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Type">
          <Select onChange={handleChangeSwitch("typeJob")}>
            {renderListTypeJob()}
          </Select>
        </Form.Item>
        <Form.Item label="Status">
          <Switch onChange={handleChangeSwitch("status")} defaultChecked={true}/>
        </Form.Item>
        <Form.Item label>
          <Button type="primary" htmlType="submit">
            Add Job
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}
