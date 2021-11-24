import React, { useState, Fragment, useEffect } from "react";
import { Form, Input, Button, Radio, InputNumber, Switch, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListTypeJobs } from "components/Header/module/actions";
import { actEditJob, actFetchListSubJob } from "../module/actions";
import { actGetJobTittle } from "containers/client/DetailJobs/modules/action";
export default function EditJob(props) {
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const { listTypeJobs } = useSelector((state) => state.TypeJobsReducer);
  const { listSubJob } = useSelector((state) => state.JobManagementReducer);
  const { tittleJob } = useSelector((state) => state.tittleJobReducer);
  const jobIdValue = props.match.params.jobId;
  useEffect(() => {
    dispatch(actFetchListTypeJobs());
    dispatch(actFetchListSubJob());
    dispatch(actGetJobTittle(jobIdValue));
  }, [dispatch, jobIdValue]);
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      job: {
        _id: tittleJob._id,
        name: tittleJob.name,
        rating: tittleJob.rating,
        price: tittleJob.price,
        proServices: tittleJob.proServices,
        localSellers: tittleJob.localSellers,
        onlineSellers: tittleJob.onlineSellers,
        deliveryTime: tittleJob.deliveryTime,
        type: tittleJob.type,
        subType: tittleJob.subType,
      },
      image: null,
    },
    onSubmit: (values) => {
      let formData = new FormData();
      if (values.image !== null) {
        formData.append("job", values.image, values.image.name);
      }
      dispatch(actEditJob(jobIdValue, values.job, formData));
      console.log(values);
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
      if (typeJob?._id == formik.values.job.type?._id) {
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
        <h2 className="text-center">Edit Job</h2>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name">
          <Input
            name="job.name"
            onChange={formik.handleChange}
            value={formik.values.job.name}
          />
        </Form.Item>
        <Form.Item label="Type">
          <Select
            onChange={handleChangeSwitch("job.type")}
            value={formik.values.job.type?._id}
          >
            {renderListTypeJob()}
          </Select>
        </Form.Item>
        <Form.Item label="Sub Type">
          <Select
            onChange={handleChangeSwitch("job.subType")}
            value={formik.values.job.subType?._id}
          >
            {renderListSubType()}
          </Select>
        </Form.Item>
        <Form.Item label="Price">
          <InputNumber
            onChange={handleChangeSwitch("job.price")}
            min={1}
            value={formik.values.job.price}
          />
        </Form.Item>
        <Form.Item label="Rating">
          <InputNumber
            onChange={handleChangeSwitch("job.rating")}
            min={1}
            max={10}
            value={formik.values.job.rating}
          />
        </Form.Item>
        <Form.Item label="Image">
          <input type="file" onChange={handleChangeFile} />
          <img
            style={{ maxWidth: "150px" }}
            src={imgSrc == "" ? tittleJob.image : imgSrc}
            alt="Image"
            className="mt-3"
          />
        </Form.Item>
        <Form.Item label="Pro Services">
          <Switch
            onChange={handleChangeSwitch("job.proServices")}
            checked={formik.values.job.proServices}
          />
        </Form.Item>
        <Form.Item label="Local Sellers">
          <Switch
            onChange={handleChangeSwitch("job.localSellers")}
            checked={formik.values.job.localSellers}
          />
        </Form.Item>
        <Form.Item label="Online Sellers">
          <Switch
            onChange={handleChangeSwitch("job.onlineSellers")}
            checked={formik.values.job.onlineSellers}
          />
        </Form.Item>
        <Form.Item label="Delivery Time">
          <Switch
            onChange={handleChangeSwitch("job.deliveryTime")}
            checked={formik.values.job.deliveryTime}
          />
        </Form.Item>
        <Form.Item label>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}
