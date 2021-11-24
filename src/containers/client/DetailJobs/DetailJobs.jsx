import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetJobTittle, actGetComment } from "./modules/action";
import { Card } from "antd";
import { GithubFilled, StarFilled } from "@ant-design/icons";
import "../DetailJobs/DetailJobs.scss";
import { Checkbox, Button } from "antd";
import { actDatCongViec } from "./BookingJob/modules/action";

export default function DetailJobs(props) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const dispatch = useDispatch();
  const { tittleJob, commentJob } = useSelector((state) => state.tittleJobReducer);
  console.log("object, commentJob", commentJob);
  const { currentUser } = useSelector((state) => state.authReducer);
  const { jobId } = props.match.params;
  useEffect(() => {
    dispatch(actGetJobTittle(jobId));
    dispatch(actGetComment(jobId));
  }, [dispatch, jobId]);

  return (
    <div className="Detailjob__checkout">
      <div className=" detailjob ">
        <div className="row  chinh ">
          <div className=" col-12 col-md-7 col-lg-7 col-xl-8 detailjob__right  detail__item1">
            <div className="minimalist">
              I will design 3 flat minimalist logo design{" "}
            </div>
            <div className="infor">
              <i>
                <GithubFilled />
              </i>
              <span className="Seller">Top Rated Seller</span>
              <span className="Level">Level 2 Seller </span>|
              <span className="Star">
                <span className="">
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />/
                  <span className="rating">{tittleJob.rating}</span>
                  <span className="name">{tittleJob.name}</span>
                </span>
              </span>
            </div>
            <hr className="hr"></hr>
            <div className="exceptional">
              <img src="../../images/market/1.png" alt="" />
              <span className="People ">People keep coming back?</span>
              <span>
                afzaal1721 has an exceptional number of repeat buyers.
              </span>
            </div>
            {/* <hr></hr> */}
            <div>
              <div className="img__job">
                <img
                  alt="example"
                  src={tittleJob.image} />
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-5 col-lg-5 col-xl-4 detailjob__left detail__item2 ">
            <Card hoverable >
              <div className="detailjob__tabs">
                <div className=" mia">
                  <input id="tab-1" type="radio" name="tabs" defaultChecked />
                  <label htmlFor="tab-1" className="tabs1">
                    Basic
                  </label>
                  <input id="tab-2" type="radio" name="tabs" />
                  <label htmlFor="tab-2" className="tabs1">
                    Standard
                  </label>
                  <input id="tab-3" type="radio" name="tabs" />
                  <label htmlFor="tab-3" className="tabs1">
                    Premium
                  </label>
                  <div className="content">
                    <div id="content-1">
                      <div className="container">
                        <div className="row">
                          <div className="col-8 Standard ">Basic</div>
                          <div className="col-2 ">
                            <div className="price">{tittleJob.price}$</div>
                          </div>
                        </div>
                        <div className="application">
                          Create a simple web application for your business.
                        </div>
                      </div>
                      <div className="container detailjobs__check">
                        <div className="row">
                          <div className="col-5">30 Day dellverry</div>
                          <div className="col-7">1 revisions</div>
                        </div>

                        <div className="checked__jobs">
                          <nav className="">
                            <Checkbox
                              onChange={onChange}
                              checked={tittleJob.proServices}
                            >
                              proServices
                            </Checkbox>
                          </nav>
                          <nav>
                            <Checkbox
                              onChange={onChange}
                              checked={tittleJob.onlineSellers}
                            >
                              onlineSellers
                            </Checkbox>
                          </nav>
                          <nav>
                            <Checkbox
                              onChange={onChange}
                              checked={tittleJob.localSellers}
                            >
                              localSellers
                            </Checkbox>
                          </nav>
                          <nav>
                            <Checkbox
                              onChange={onChange}
                              checked={tittleJob.deliveryTime}
                            >
                              deliveryTime
                            </Checkbox>
                          </nav>
                          <nav>
                            <Checkbox
                              onChange={onChange}
                              checked={tittleJob.status}
                            >
                              status
                            </Checkbox>
                          </nav>
                          <Button
                            onClick={() => {

                              dispatch(
                                actDatCongViec(props.match.params.jobId, currentUser?.token)
                              );
                            }}
                            block
                          >
                            <span className="mr-10">
                              Continue (${tittleJob.price})
                            </span>
                          </Button>
                          <div className="Compare__package">
                            Compare package
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="content-2">
                      <h2>Tab-2</h2>
                      <p>This is tab2</p>
                    </div>
                    <div id="content-3">
                      <h2>Tab-3</h2>
                      <p>This is tab3</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            ,
          </div>
        </div>
      </div>
      <div className="comment">
        <div className="noidung__job">
          <h5>About This Gig </h5>
          <h6>Top Rated Seller with all positive reviews</h6>
          <div className="hello">Hello,</div>
          <div className="content">
            Want a custom website built for your business? Or Having trouble in
            recognizing or fixing
          </div>
          <div className="content">
            Want a custom website built for your business? Or Having trouble in
            recognizing{" "}
          </div>
          <div className="content">
            or fixing any issues in HTML, CSS, Bootstrap jquery, javascript, PHP
            or database(Mysql/Oracle).{" "}
          </div>
          <h5 className="offer">Things I offer:</h5>
          <div className="information_detailjob">
            <ul>
              <li>CRM development</li>
              <li>E-commerce&nbsp;Development</li>
              <li>
                Custom website development (both front-end and back-end) with
                Laravel, PHP and MySQL
              </li>
              <li>
                Vue.js, HTML, CSS, Boostrap, Javascript/Jquery, PHP single/multi
                web page,
              </li>
              <li>
                Complete website creation from scratch using Laravel Rest Api
                and vue.js
              </li>
              <li>Web Application with proper exception handling</li>
              <li>Can work with APIs, integrate API's in your applications.</li>
              <li>Responsive - Mobile Friendly sites.</li>
              <li>Great UI/UX for&nbsp;your site.</li>
              <li>
                PSD to HTML, XD to HTML&nbsp;or any other design to HTML with
                best quality and pixel perfect design
              </li>
              <li>Fix issues in&nbsp;front-end or add some changes to it.</li>
              <li>Bug Investigation and Bug fixing.</li>
              <li>MySQL database design and integration in websites.</li>
              <li>
                MySQL database bugs fixing and integration issues fixing.&nbsp;
              </li>
            </ul>
          </div>
          <div className="satisfied">
            I will do the work until you are satisfied with fast and responsive
            communication.{" "}
          </div>
          <div className="row comment__bottom">
            <div className="col-5">
              <div className="Programming">Programming Language</div>
              <div className="php">PHP</div>
            </div>
            <div className="col-7">
              <div className="Expertise">Expertise </div>
              <div className="Cross__Browser">Cross Browser</div>
              <div className="Cross__Browser">Cross Browser</div>
              <div className="Cross__Browser">Cross Browser</div>
            </div>
          </div>
        </div>
        <div className="about">About The Seller</div>
        <div className="row contact__user">
          <div className="img__user__contact">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/18c7c0738fc034b345a91eca46d8309c-1556973467573/db0dc305-dada-4cc9-b18e-a63070519c15.jpg"
              alt="..."
            />
          </div>
          <div className="thongtin">
            <span className="nofilrazzaq">nofilrazzaq </span>
            <span className="online">Online</span>
            <div className="Web__Developer">Web Developer</div>
            <span className="Star__comment">
              <span className="">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <span className="rating">{tittleJob.rating}</span>
              </span>
            </span>
            <div className="contact">
              {" "}
              <button>Contact me</button>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="user__comment">
        <div className=" row comment__user__name">
          <div className="  user__comment">
            <img src="../../images/Market/3.png" alt="..." />
          </div>
          <div className=" noidung__commnet">
            <span>cmtranslation</span>

            {commentJob?.map((item, index) => {
              return <div key={index}>{item.content}</div>;
            })}
          </div>
        </div>
        <div>
        </div>
      </div>

    </div>
  );
}
