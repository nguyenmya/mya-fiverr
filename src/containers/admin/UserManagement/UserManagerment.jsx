import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink , Redirect} from "react-router-dom";
import { Table } from 'antd';
import { Input } from "antd";

import { actDeleteUser, actListUserAdmin } from "./module/action";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
export default function UserManagerment() {
  const { Search } = Input;
  const dispatch = useDispatch();
  const { userList } = useSelector(state => state.listUserReducer)
  const {  currentUser } = useSelector(state => state.authReducer);

  useEffect(() => {
    dispatch(actListUserAdmin())
  }, [dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="1" className="">{text}</a>,
      width: 150,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      width: 180,
      sorter: {
        compare: (a, b) => a.emai - b.emai,
        multiple: 1,
      },
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      key: 'birthday ',
      ellipsis: true,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
      ellipsis: true,
      width: 150,
    },
    {
      title: 'skill',
      dataIndex: 'skill',
      key: 'skill',
      ellipsis: true,
    },
    {
      title: 'Long Column',
      dataIndex: 'address',
      key: 'address 4',
      ellipsis: true,
    },
    {
      title: "hành động",
      dataIndex: "hành động",
      multiple: 3,

      render: (text, user) => {
        return <div key={text}>
          <NavLink className="bg-dark text-white hhhhh" to={`/Admin/user-managerment/edit/${user._id}`} >
            <i className="btn-xoa-sua-showtime">
              <EditOutlined />
            </i>
          </NavLink>
          <span width={200} onClick className=" bg-dark ml-2"
            onClick={() => {
              if(window.confirm('Are you sure you want to delete' + user._id)) {
                dispatch(actDeleteUser(user._id));
              }
            }} >
            <i className="btn-xoa-sua-showtime">
              <DeleteOutlined />
            </i>
          </span>
          <NavLink className="bg-dark text-white" to={`/Admin/MovieManager/ShowTime/${user._id}`} >
            <i className="btn-xoa-sua-showtime">
              <CalendarOutlined />
            </i>
          </NavLink>
        </div>
      },
    },
  ];
  const onSearch = values => {
    console.log(values);
    dispatch(actListUserAdmin(values));
  }

  const data = userList;
  
  return  currentUser.user.role==="ADMIN" ?(
    <div>
      <Link className="nav-link searchText" to="/admin/user-managerment/add">
        Thêm 
      </Link>
      <Search
        className="mt-5 searchText"
        placeholder="pls search:"
        enterButton={<SearchOutlined />}
        onSearch={onSearch}
        size="small"></Search>
      <Table columns={columns} dataSource={data} />
    </div>
  ): (
    <Redirect to="/"/>
  )
}
