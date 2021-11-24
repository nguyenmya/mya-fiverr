
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actDetailUserInformation, actEditUserInformation, actHistoryJobsUser, actUploadImg, } from "./modules/action";
import { useFormik } from 'formik';
import "../UserInformation/UserInformation.scss"
import { Form, Card, Input } from 'antd';
import { useState } from "react";

export default function UserInformation(props) {
    const dispatch = useDispatch();
    const { detailUser, historyJobs } = useSelector((state) => state.userListJobsReducer);
    const { currentUser } = useSelector((state) => state.authReducer);

    const userId = props.match.params.id;
    useEffect(() => {
        dispatch(actDetailUserInformation(userId));
        dispatch(actHistoryJobsUser(currentUser?.token));
    }, [dispatch, userId, currentUser?.token]);
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const [isShow, setIsShow] = React.useState(true);

    const [show, setShow] = React.useState(true);

    const handleClick = () => {
        setIsShow(!isShow);
    };

    const handleClick1 = () => {
        setShow(!show);
    };

    const [setComponentSize] = useState('default');
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            _id: detailUser?._id,
            name: detailUser.name,
            email: detailUser?.email,
            password: detailUser?.password,
            phone: detailUser?.phone,
            birthday: detailUser.birthday,
            gender: detailUser.gender,
            role: detailUser.role,
            skill: detailUser.skill,
            certification: detailUser.certification,
            bookingJob: detailUser.bookingJob
        },
        onSubmit: (values) => {
            console.log("values", values);
            dispatch(actEditUserInformation(userId, values, currentUser?.token));
        }
    })

    return (
        <div className="user__information">
            <div className=" container user__information__content">
                <div className="row">
                    <div className=" col-md-5 col-lg-5 col-xl-4 userInformation__item1">
                        <div className=" card card-1 ">
                            <UploadImgUser path={props} />
                            <h6 className="name__profile text-center">{detailUser.email}</h6>
                            <div className=" container preview__public__model">
                                <div className=" btn__profile">Preview Public Model</div>
                                <hr></hr>
                            </div>
                            <div className="home__town">
                                <ul className="row home__town__one">
                                    <li className="flex-item-from">From</li>
                                    <li className="flex-item-vietnam">Vietnam</li>
                                </ul>
                                <ul className="row  home__town__two">
                                    <li className="flex-item-member ">Member since</li>
                                    <li className="flex-item-year">Otc 2021</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" card card-1  card__bottom">
                            <div className="learning">
                                <img src="../../images/UserInformation/userInformation_2.png" alt="" />
                            </div>
                            <div className="circle">
                                <img src="../../images/UserInformation/userInformation_1.png" alt="" />
                            </div>
                            <div className="badges">Earn badges and stand out</div>
                            <div className="boost">Boost your sales, by boosting your expertise.</div>
                            <div className="enroll__now container">
                                <button className="btn btn-success">Enroll Now</button>
                            </div>
                            <hr></hr>
                            <div className="add__form">
                                <div>
                                    <ul className=" add__form__certification">
                                        <li className="flex-item-certification">Certification</li>
                                        <li className="flex-item-add-certification" onClick={handleClick1}>Add New</li>
                                        <div>
                                            {show ?
                                                <>
                                                </>
                                                :
                                                <div className="add__certification card">
                                                    <div>
                                                        <Form
                                                            onSubmitCapture={formik.handleSubmit}
                                                            labelCol={{ span: 4 }}
                                                            wrapperCol={{ span: 14 }}
                                                            layout="horizontal" >

                                                            <Input name="certification"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.certification} />
                                                            <hr></hr>
                                                            <div className="row add__button__certification">
                                                                <div className="col-6">
                                                                    <div className="cancle" onClick={handleClick1}>Cancel</div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <button className="add" type="submit">Add New</button>
                                                                </div>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                                <div className="">
                                    {detailUser.certification?.map((certification, index) => {
                                        return (
                                            <div key={index} className="noidung__add">{certification}</div>
                                        )
                                    })}
                                </div>
                                <ul className=" add__form__skill">
                                    <li className="flex-item-skill ">Skill</li>
                                    <li className="flex-item-add" onClick={handleClick}>Add Skill</li>
                                    <div>
                                        {isShow ?
                                            <>
                                            </>
                                            : <div className="">
                                                <div className="add__skill card ">
                                                    <div className="">
                                                        <Form
                                                            layout="horizontal"
                                                            onSubmitCapture={formik.handleSubmit}
                                                            labelCol={{ span: 4 }}
                                                            wrapperCol={{ span: 14 }}
                                                            onValuesChange={onFormLayoutChange}>

                                                            <input name="skill" onChange={formik.handleChange}
                                                                value={formik.values.skill} />

                                                            <div className="row add__button__skill">
                                                                <div className="col-6">
                                                                    <div className="cancle" onClick={handleClick1}>Cancel</div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <button className="add" type="submit">Add New</button>
                                                                </div>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </div>

                                            </div>
                                        }
                                    </div>
                                </ul>
                            </div>
                            <div className="">
                                {detailUser.skill?.map((addSkill, index) => {
                                    return (
                                        <div key={index} className="noidung__addskill">{addSkill}</div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className=" col-md-7 col-lg-7 col-xl-8 user__information__right  userInformation__item2">
                        <div className="card car__done__create">
                            <div className="Buying">
                                <div className="row ">
                                    <div className="col-3 col-lg-2">
                                        <img src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/business_blocks/office-building.7ac5061.gif" alt="" />
                                    </div>
                                    <div className="col-9 col-lg-10">
                                        <b>Buying services for work? </b>
                                        <span>Get the best experience for your business</span>
                                        <div className="questions">with 3 quick questions.</div>
                                        <div className="industry">What’s your industry
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card create__new__gif">
                            <div className="row">
                                <div className="col-9 Gigs">
                                    It seems that you don't have any active Gigs. Get selling!
                                </div>
                                <div className="col-3 button__gif">
                                    <button type="submit" className="btn btn-success">Create  a new gif</button>
                                </div>
                            </div>
                        </div>
                        <div className=" history__job__booking">
                            <div className="row">
                                <div className=" col-9 bookingName" >
                                    {historyJobs.bookingJob?.map((booking, index) => {
                                        return (
                                            <div key={index} className="h-full flex items-center p-4 rounded-lg">
                                                <Card
                                                    hoverable>
                                                    <div className="row">
                                                        <div className="col-3 col-lg-3 ">
                                                            <img alt="example" src={booking.image} />
                                                        </div>
                                                        <div className="col-9 col-lg-9">
                                                            <div className="name">{booking.name}</div>
                                                        </div>
                                                    </div>
                                                </Card>,
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export function UploadImgUser(props) {
    const dispatch = useDispatch();
    const { detailUser } = useSelector((state) => state.userListJobsReducer);

    const { currentUser } = useSelector((state) => state.authReducer);
    console.log("current", currentUser);
    const idJOb = props.path.match.params.id;
    useEffect(() => {
        dispatch(actDetailUserInformation(idJOb));
    }, [dispatch, idJOb]);

    const [imgSrc, setImgSrc] = useState(detailUser && detailUser.avatar ? detailUser.avatar : "");

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            avatar: null,
        },

    })


    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            setImgSrc(e.target.result);
        };
        formik.setFieldValue("avatar", file);
        let formData = new FormData();
        formData.append("avatar", file, file.name);
        console.log("formdata", formData);

        dispatch(actUploadImg(formData, currentUser?.token));
        dispatch(actEditUserInformation(formData, currentUser?.token))

    };

    return (
        <div className="upload__avatar">
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }} >
                <div className="select  ">
                    {/* <div className="col-3 col-sm-2 col-lg-3">
                    </div> */}
                    <div className="img_select">
                        <img
                            type="submit"
                            className=""
                            src={imgSrc === "" ? detailUser.avatar : imgSrc}
                            alt="..." />
                    </div>
                    <div className="chontep">
                        <input type="file" onChange={handleChangeFile} className="file" />
                    </div>

                </div>
            </Form>
        </div>

    )
}



