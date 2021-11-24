import React, { useEffect } from "react";
import { Table, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd/lib/radio";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { actDeleteSubJob } from "./module/actions";
import { actFetchListSubJob } from "../JobManagement/module/actions";
export default function SubJobManagement() {
  const { listSubJob } = useSelector((state) => state.JobManagementReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListSubJob());
  }, [dispatch]);

  const { Search } = Input;

  const onSearch = (value) => {};

  const columns = [
    {
      title: "Name SubJob",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Type Job",
      dataIndex: "typeJob",
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: "Action",
      render: (text, job) => {
        return (
          <Fragment>
            <NavLink
              to={`/admin/subjob-management/edit-subjob/${job._id}`}
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
                  dispatch(actDeleteSubJob(job._id));
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

  const data = listSubJob;

  function onChange(pagination, filters, sorter, extra) {}
  return (
    <div>
      <h3>List Jobs</h3>
      <NavLink to="/admin/subjob-management/add-subjob">
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
