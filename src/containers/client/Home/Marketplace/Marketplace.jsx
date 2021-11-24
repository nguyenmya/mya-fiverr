import React from "react";
import "./Marketplace.scss";

export default function Marketplace() {
  return (
    <div className="Marketplace">
      <h1>Explore the marketplace</h1>
      <div className="container Marketplace__content">
        <ul className="Marketplace__item">
          <li className="flex-item">
            <img src="../../images/market/1.jpg" alt="" />
            <h6>Graphics & Design</h6>
          </li>
          <li className="flex-item">
            <img src="../../images/market/2.jpg" alt="" />
            <h6>Digital Marketing</h6>
          </li>
          <li className="flex-item">
            <img src="../../images/market/3.jpg" alt="" />
            <h6>Writing & Translation</h6>
          </li>
          <li className="flex-item">
            <img src="../../images/market/1.jpg" alt="" />
            <h6>Video & Animation</h6>
          </li>
          <li className="flex-item">
            <img src="../../images/market/5.jpg" alt="" />
            <h6>Music & Audio</h6>
          </li>
        </ul>
      </div>

      <div className="container Marketplace__content">
        <div className="container Marketplace__content">
          <ul className="Marketplace__item">
            <li className="flex-item">
              <img src="../../images/market/1.jpg" alt="" />
              <h6>Graphics & Design</h6>
            </li>
            <li className="flex-item">
              <img src="../../images/market/2.jpg" alt="" />
              <h6>Digital Marketing</h6>
            </li>
            <li className="flex-item">
              <img src="../../images/market/3.jpg" alt="" />
              <h6>Writing & Translation</h6>
            </li>
            <li className="flex-item">
              <img src="../../images/market/1.jpg" alt="" />
              <h6>Video & Animation</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
