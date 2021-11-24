import React, { useState, Fragment, useEffect } from "react";
import { Form, Input, Button, Radio, InputNumber, Switch, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListTypeJobs } from "components/Header/module/actions";
import {
  actAddNewJob,
  actFetchListSubJob,
} from "../module/actions";
export default function AddJob(props) {
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const { listTypeJobs } = useSelector((state) => state.TypeJobsReducer);
  const { listSubJob } = useSelector((state) => state.JobManagementReducer);
  useEffect(() => {
    dispatch(actFetchListTypeJobs());
    dispatch(actFetchListSubJob());
  }, [dispatch]);
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    initialValues: {
      job: {
        name: "",
        rating: 0,
        price: 0,
        proServices: false,
        localSellers: false,
        onlineSellers: false,
        deliveryTime: false,
        type: null,
        subType: null,
      },
      image: null,
    },
    onSubmit: (values) => {
      let formData = new FormData();
      formData.append("job", values.image, values.image.name);
      dispatch(actAddNewJob(values.job, formData));
    },
  });
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    formik.setFieldValue("image", file);
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

  const renderListSubType = () => {
    return listSubJob.map((job, index) => {
      const { _id, name, typeJob } = job;
      if (
        typeJob?._id === formik.getFieldProps("job.type").value ||
        typeJob === formik.getFieldProps("job.type").value
      ) {
        return (
          <Select.Option value={_id} key={index}>
            {name}
          </Select.Option>
        );
      }
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
        <h2 className="text-center">Add Job</h2>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name">
          <Input name="job.name" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Type">
          <Select onChange={handleChangeSwitch("job.type")}>
            {renderListTypeJob()}
          </Select>
        </Form.Item>
        <Form.Item label="Sub Type">
          <Select onChange={handleChangeSwitch("job.subType")}>
            {renderListSubType()}
          </Select>
        </Form.Item>
        <Form.Item label="Price">
          <InputNumber onChange={handleChangeSwitch("job.price")} min={1} />
        </Form.Item>
        <Form.Item label="Rating">
          <InputNumber
            onChange={handleChangeSwitch("job.rating")}
            min={1}
            max={10}
          />
        </Form.Item>
        <Form.Item label="Image">
          <input type="file" onChange={handleChangeFile} />
          {imgSrc === "" ? (
            ""
          ) : (
            <img
              style={{ maxWidth: "150px" }}
              src={imgSrc}
              alt="Image"
              className="mt-3"
            />
          )}
        </Form.Item>
        <Form.Item label="Pro Services">
          <Switch onChange={handleChangeSwitch("job.proServices")} />
        </Form.Item>
        <Form.Item label="Local Sellers">
          <Switch onChange={handleChangeSwitch("job.localSellers")} />
        </Form.Item>
        <Form.Item label="Online Sellers">
          <Switch onChange={handleChangeSwitch("job.onlineSellers")} />
        </Form.Item>
        <Form.Item label="Delivery Time">
          <Switch onChange={handleChangeSwitch("job.deliveryTime")} />
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
