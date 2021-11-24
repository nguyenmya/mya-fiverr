import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Switch, Select } from "antd";
import { useFormik } from "formik";
import { actDetailTypeJob, actEditTypeJob } from "../modules/action";
import { actFetchListSubJob } from "containers/admin/JobManagement/module/actions";

export default function EditTypeJob(props) {
  const dispatch = useDispatch();
  const { detailTypeJob } = useSelector((state) => state.typeJobsReducer);
  const { listSubJob } = useSelector((state) => state.JobManagementReducer);
  const typeJobId = props.match.params.typeId;
  useEffect(() => {
    dispatch(actDetailTypeJob(typeJobId));
    dispatch(actFetchListSubJob());
  }, [dispatch, typeJobId]);
  const [componentSize, setComponentSize] = useState("default");
  const { Option } = Select;
  const selectDefault = [];
  detailTypeJob.subTypeJobs?.forEach((job,index) => {
    selectDefault.push(job._id);
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: detailTypeJob.name,
      _id: detailTypeJob._id,
      subTypeJobs: selectDefault,
      status: detailTypeJob.status,
    },
    onSubmit: (values) => {
      dispatch(actEditTypeJob(typeJobId, values));
    },
  });

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const renderSubJob = () => {
    return listSubJob.map((job, index) => {
      return (
        <Option value={job?._id} label={job.name} key={index}>
          <div className="demo-option-label-item">{job.name}</div>
        </Option>
      );
    });
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
          size={componentSize}
        >
          <Form.Item label="Name" style={{ marginTop: "80px" }}>
            <Input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Form.Item>
          <Form.Item label="Sub Job">
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Select subjob"
              value={formik.values.subTypeJobs}
              optionLabelProp="label"
              onChange={handleChangeSwitch("subTypeJobs")}
            >
              {renderSubJob()}
            </Select>
          </Form.Item>
          <Form.Item label=" status ">
            <Switch
              name="status"
              onChange={handleChangeSwitch("status")}
              checked={formik.values.status}
            />
          </Form.Item>
          <Form.Item label="Tác vụ">
            <button type="submit" className="btn btn-default" value="">
              {" "}
              Sửa
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
