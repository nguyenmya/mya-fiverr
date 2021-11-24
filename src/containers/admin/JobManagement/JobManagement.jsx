import React, { useEffect } from "react";
import { Table, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd/lib/radio";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListJobs } from "containers/client/ListJobs/module/actions";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { actDeleteJob } from "./module/actions";
export default function JobManagement() {
  const { listJobs } = useSelector((state) => state.JobReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListJobs());
  }, [dispatch]);

  const { Search } = Input;

  const onSearch = (value) => {
    dispatch(actFetchListJobs(value));
  };

  const columns = [
    {
      title: "Name Job",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Rate",
      dataIndex: "rating",
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Image",
      render: (text, job) => {
        return (
          
          <img src={job.image} alt="Image" style={{ maxWidth: "100px" }} />
        );
      },
    },
    {
      title: "Action",
      render: (text, job) => {
        return (
          <Fragment>
            <NavLink
              to={`/admin/job-management/edit-job/${job._id}`}
              className="mr-3 text-success"
            >
              <EditOutlined />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              to="/"
              className="text-danger"
              onClick={() => {
                if (window.confirm("Bạn có chắc chắn muốn xóa phim")) {
                  dispatch(actDeleteJob(job._id));
                }
              }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
    },
  ];

  const data = listJobs;

  function onChange(pagination, filters, sorter, extra) {}
  return (
    <div>
      <h3>List Jobs</h3>
      <NavLink to="/admin/job-management/add-job">
        <Button className="mb-3">Add Job</Button>
      </NavLink>
      <Search
        className="mb-3"
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"_id"}
      />
    </div>
  );
}
