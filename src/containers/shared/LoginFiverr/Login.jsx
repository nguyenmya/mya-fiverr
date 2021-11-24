import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actLogin } from '../../shared/LoginFiverr/modules/action';
import Loader from 'components/Loader/Loader';
import "../LoginFiverr/Login.scss"

export default function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, error, currentUser } = useSelector(
    state => state.authReducer
  );

  const onFinish = values => {
    console.log('Received values of form: ', values);
    dispatch(actLogin(values, history));

  };

  if (loading) return <Loader />;
  return !currentUser ? (
    <div className="login">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="login__content"
      >
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          validateTrigger="onBlur"
        >
          {error && <div className="alert  thongbao  ">{error}</div>}
          <div className="login__form__item">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <div className="row">
                <div className="col-6">
                  <Button
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </div>
                <div className="col-6">
                  Or <a href="...">register now!</a>
                </div>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );

}
