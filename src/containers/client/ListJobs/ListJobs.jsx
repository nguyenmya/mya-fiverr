import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./ListJobs.scss";
import { actFetchListJobBySubType } from "./module/actions";
export default function ListJobs(props) {
  const { listJobs } = useSelector((state) => state.JobReducer);
  const dispatch = useDispatch();
  const subTypeId = props.match.params.subTypeId;
  useEffect(() => {
    dispatch(actFetchListJobBySubType(subTypeId));
  }, [dispatch, subTypeId]);
  const renderListJobs = () => {
    return listJobs.map((job, index) => {
      const { _id, name, price, rating, image } = job;
      return (
        <div className="col-sm-3 card-layout" key={index}>
          <div className="card-wrapper">
            <NavLink to={`/detail-jobs/${_id}`} className="media">
              <img className="w-100" src={image} alt="Description" />
            </NavLink>
            <div className="seller-info row">
              <div className="seller-image">
                <img
                  src="../images/ListJobs/JPEG_20201030_153457_4491597895407383130.jpg"
                  alt=".."
                />
              </div>
              <div className="seller-identifiers">
                <div className="seller-name">
                  <a href="..">rajnishbaldha</a>
                </div>
                <div className="seller-level">
                  <span>Level 2 Seller</span>
                </div>
              </div>
            </div>
            <h3 className="seller-title">
              <NavLink to={`/detail-jobs/${_id}`}>{name}</NavLink>
            </h3>
            <div className="content-info">
              <div className="rating-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1792 1792"
                  width={15}
                  height={15}
                >
                  <path
                    fill="currentColor"
                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                  />
                </svg>
                {rating}.0
                <span>(840)</span>
              </div>
            </div>
            <div className="seller-footer row">
              <div className="icon-heart">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z" />
                </svg>
              </div>
              <a href=".." className="price">
                <small>Starting at</small>
                <span>${price}</span>
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="list-jobs">
      <header className="related-search">
        <nav className="layout-row row">
          <b>Suggested</b>
          <div className="search-tags">
            <a href="..">html css</a>
            <a href="..">html website</a>
            <a href="..">psd to html</a>
            <a href="..">html design</a>
            <a href="..">html email</a>
            <a href="..">html css javascript</a>
          </div>
        </nav>
      </header>
      <div className="header-wrapper row">
        <div className="search-header">
          <span className="title">Results for "html"</span>
        </div>
      </div>
      <div className="topbar">
        <div className="topbar-floating row">
          <div className="top-filters row">
            <div className="floating-menu-filter">
              <button>Category</button>
              <ul className="floating-menu-list">
                <li className="floating-menu-item"></li>
              </ul>
            </div>
            <div className="floating-menu-filter">
              <button>Service Options</button>
              <ul className="floating-menu-list">
                <li className="floating-menu-item"></li>
              </ul>
            </div>
            <div className="floating-menu-filter">
              <button>Seller Details</button>
              <ul className="floating-menu-list">
                <li className="floating-menu-item"></li>
              </ul>
            </div>
            <div className="floating-menu-filter">
              <button>Budget</button>
              <ul className="floating-menu-list">
                <li className="floating-menu-item"></li>
              </ul>
            </div>
            <div className="floating-menu-filter">
              <button>Delivery Time</button>
              <ul className="floating-menu-list">
                <li className="floating-menu-item"></li>
              </ul>
            </div>
          </div>
          <div className="togglers-wrapper row">
            <div className="tooltip-toggler-wrapper row">
              <div className="toggler-wrapper row">
                <label>
                  <input type="checkbox" />
                  <span></span>
                </label>
                Pro services
              </div>
            </div>
            <div className="tooltip-toggler-wrapper row">
              <div className="toggler-wrapper row">
                <label>
                  <input type="checkbox" />
                  <span></span>
                </label>
                Subscription services
              </div>
            </div>
            <div className="tooltip-toggler-wrapper row">
              <div className="toggler-wrapper row">
                <label>
                  <input type="checkbox" />
                  <span></span>
                </label>
                Online sellers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-secondary row">
        <div className="results-infor">25,596 services available</div>
        <div className="sort-by-wrapper">
          <span className="pre-title">Sort by</span>
          <div className="floating-menu">
            <div className="menu-title">Relevance</div>
          </div>
        </div>
      </div>
      <div className="content-row row">
        <div className="content">
          <div className="listing-container row">{renderListJobs()}</div>
        </div>
        <ul className="page-pagination row">
          <li className="page-number page-arrow">
            <a href="..">
              <span style={{ width: 16, height: 16 }}>
                <svg
                  width={8}
                  height={15}
                  viewBox="0 0 8 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z" />
                </svg>
              </span>
            </a>
          </li>
          <li className="page-number">
            <a href="..">1</a>
          </li>
          <li className="page-number">
            <a href="..">2</a>
          </li>
          <li className="page-number">
            <a href="..">3</a>
          </li>
          <li className="page-number">
            <a href="..">4</a>
          </li>
          <li className="page-number">
            <a href="..">5</a>
          </li>
          <li className="page-number page-arrow">
            <a href="..">
              <span style={{ width: 16, height: 16 }}>
                <svg
                  width={8}
                  height={16}
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
