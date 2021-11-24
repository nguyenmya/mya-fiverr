import AdminHeader from "components/AdminHeader/AdminHeader";
import AdminSidebar from "components/AdminSideBar/AdminSidebar";
import withLayout from "hocs/withLayout";
import React from "react";
import { Fragment } from "react";
function AdminLayout(props) {
  return (
    <Fragment>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <AdminHeader />
        <div className="app-main">
          <AdminSidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">{props.children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withLayout(AdminLayout);
