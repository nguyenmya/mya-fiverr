import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Management</li>
            <li>
              <a href="..">
                <i className="metismenu-icon pe-7s-diamond" />
                Users
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <NavLink to="/admin/user-managerment/add">
                    <i className="metismenu-icon" />
                    AddUser
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="...">
                <i className="metismenu-icon pe-7s-car" />
                Jobs
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <NavLink to="/admin/job-management">
                    <i className="metismenu-icon"></i>List Jobs
                  </NavLink>
                  <NavLink to="/admin/job-management/add-job">
                    <i className="metismenu-icon"></i>Add Job
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="..">
                <i className="metismenu-icon pe-7s-car" />
                TypeJob
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <NavLink to="/admin/type-job">
                    <i className="metismenu-icon"></i>Type Job
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="..">
                <i className="metismenu-icon pe-7s-display2" />
                Sub Type Job
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </a>
              <ul>
                <li>
                  <NavLink to="/admin/subjob-management">
                    <i className="metismenu-icon"></i>List SubJobs
                  </NavLink>
                  <NavLink to="/admin/subjob-management/add-subjob">
                    <i className="metismenu-icon"></i>Add SubJobs
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
