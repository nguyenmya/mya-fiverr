import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Badge } from "antd";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { actDeleteTypeJob, actListTypeJob } from "./modules/action";
// import AddTypeJob from "./Add/AddTypeJob";

export default function TypeJobManagement() {
  // const { Search } = Input;

  const dispatch = useDispatch();
  const { listTypeJob } = useSelector((state) => state.typeJobsReducer);
  useEffect(() => {
    dispatch(actListTypeJob());
  }, [dispatch]);

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: "subTypeJobs",
      key: "subTypeJobs",
      width: 500,
      render: () => (
        <span>
          <Badge status="success" />
          {listTypeJob?.map((mia, index) => {
            return (
              <div key={index}>
                {mia.subTypeJobs?.map((itemJob, index) => {
                  return (
                    <div></div>
                    // <div key={index} style={{width: 500}}>{itemJob.name}</div>
                  );
                })}
              </div>
            );
          })}
        </span>
      ),
    },

    {
      title: "Action",
      render: (index, job) => {
        return (
          <Fragment key={index}>
            <NavLink
              to={`/admin/type-job/edit/${job._id}`}
              className="mr-3 text-success"
            >
              <EditOutlined />
            </NavLink>
            <span
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.confirm("Bạn có chắc chắn muốn xóa ?");
                dispatch(actDeleteTypeJob(job._id));
              }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
    },
  ];

  const data = listTypeJob;
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <Link className="nav-link " to="/admin/type-job/add">
        Thêm
      </Link>
      <Table columns={columns} dataSource={data} onChange={onChange} />

      {/* <AddTypeJob /> */}
    </div>
  );
}
