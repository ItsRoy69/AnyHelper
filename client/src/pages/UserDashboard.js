import React, { useEffect, useState } from "react";

import "../styles/UserDashboard.css";

import profile from "../assets/workerman.png";
import Democover from "../assets/DemoCoverimage.png";
import DemoShopimage from "../assets/DemoShopimage.jpeg";
import background1 from "../assets/workerslist1.png";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EditUserDashboard from "../components/EditUserDashboard";
import AddItems from "../components/AddItems";

import { Link, useNavigate } from "react-router-dom";
import { BsPencilSquare, BsPlusSquare, BsShop } from "react-icons/bs";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [modal8, setModal8] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const type = localStorage.getItem("type");

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const [items, setItems] = useState("");

  const fetchUser = async () => {
    if (type == 0) {
      await axios
        .get(`https://anyhelper.herokuapp.com/stores/get-user/${user._id}`)
        .then((response) => {
          setLoggedInUser(response.data);
          setItems(response.data.items);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (type == 1) {
      await axios
        .get(`https://anyhelper.herokuapp.com/workers/get-user/${user._id}`)
        .then((response) => {
          setLoggedInUser(response.data);
          setItems(response.data.items);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (type == 2) {
      await axios
        .get(`https://anyhelper.herokuapp.com/customers/get-user/${user._id}`)
        .then((response) => {
          console.log(response.data);
          setLoggedInUser(response.data);
          setItems(response.data.items);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  console.log(loggedInUser.items);

  const deleteItem = async (item) => {
    await axios
      .post("https://anyhelper.herokuapp.com/stores/delete-item", {
        email: user.email,
        item: item,
      })
      .then((response) => {
        console.log(response);
        alert("Item Deleted From Shop!");
      })
      .catch((e) => {
        console.log(e);
        alert("Item not deleted from shop.");
      });

    console.log(item);
    if (items.includes(item)) {
      setItems(
        items.filter((elem) => {
          return elem !== item;
        })
      );
    }
  };

  useEffect(() => {
    fetchUser();
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {token && loggedInUser ? (
        <>
          <Navbar />

          {/* //* EDIT INFO MODAL START */}
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Edit user info
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <EditUserDashboard user={loggedInUser} />
              </div>
            </div>
          </div>

          {/* //* ADD INPUT MODAL START */}

          <div
            class="modal fade"
            id="addItems"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Add items
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <AddItems />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="UserDashboard">
            <div className="UserDasboard_left">
              <div className="UserDasboard_ProfileCard">
                <div className="UserDasboard_ProfileImages">
                  {loggedInUser.coverImg ? (
                    <>
                      <img src={loggedInUser.coverImg} alt="CoverImage" />
                    </>
                  ) : (
                    <img src={Democover} alt="CoverImage" />
                  )}

                  {loggedInUser.profileImg ? (
                    <>
                      <img src={loggedInUser.profileImg} alt="CoverImage" />
                    </>
                  ) : (
                    <img src={DemoShopimage} alt="CoverImage" />
                  )}
                </div>
                <div className="UserDasboard_ProfileName">
                  <span>{loggedInUser.admin}</span>
                  <span>{loggedInUser.name}</span>
                  {type == 0 ? (
                    <>
                      <div className="UserDasboard_itemsStatus">
                        <div>
                          <span>{loggedInUser.stype}</span>
                          <span>{loggedInUser.sname}</span>
                        </div>
                      </div>
                      <span>{loggedInUser.address}</span>
                    </>
                  ) : null}

                  {type == 1 ? (
                    <>
                      <span>{loggedInUser.phone}</span>
                      <span>{loggedInUser.profession}</span>
                    </>
                  ) : null}

                  {type == 2 ? (
                    <>
                      <span>{loggedInUser.address}</span>
                    </>
                  ) : null}
                  <div className="Userboard_edit">
                    <BsPencilSquare
                      onClick={() => setModal8(true)}
                      className="Userboard_pencil"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    />

                    {/* {modal8 && <EditUserDashboard setModal={setModal8} />} */}
                  </div>
                </div>

                <div className="UserDasboard_itemsStatus">
                  <hr />
                  <div>
                    {type == 0 ? (
                      <>
                        <div className="UserDasboard_itemsfollow">
                          <span>11</span>
                          <span>Services</span>
                        </div>
                      </>
                    ) : null}

                    {type == 1 ? (
                      <div className="UserDasboard_itemsfollow">
                        <span>11</span>
                        <span>Services</span>
                      </div>
                    ) : null}

                    {type == 2 ? (
                      <>
                        <div className="UserDasboard_itemsfollow">
                          <span>11</span>
                          <span>Services</span>
                        </div>
                        <div className="UserDasboard_itemsvl"></div>
                        <div className="UserDasboard_itemsfollow">
                          <span>33</span>
                          <span>Times ordered</span>
                        </div>
                      </>
                    ) : null}
                  </div>
                  <hr />
                  <Link to="/chatbox" className="UserDasboard_itemschat">
                    <span>Chat</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="UserDasboard_mid">
              <div className="UserDasboard_midCard">
                {type == 0 ? (
                  <div className="column">
                    <div className="row">
                      <div
                        className="userdashboardlist_card"
                        style={{ width: "1000px" }}
                      >
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>WORKERS</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/workerslist"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="UserDashboard_shop_headings">
                        <h1
                          style={{
                            fontFamily: "'Jost', sans-serif",
                            fontStyle: "normal",
                            fontWeight: " 700",
                            padding: "20px",
                          }}
                        >
                          Items in Shop
                        </h1>

                        <h3
                          style={{
                            fontFamily: "'Jost', sans-serif",
                            fontStyle: "normal",
                            fontWeight: " 700",
                            padding: "20px",
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#addItems"
                        >
                          Add items <BsPlusSquare />
                        </h3>
                      </div>

                      {items.map((item, index) => {
                        return (
                          <div className="col-lg-3 mb-2">
                            <div
                              className="items_card"
                              style={{ height: "14rem" }}
                              key={index}
                            >
                              <img
                                src={`https://source.unsplash.com/random/500×500/?${item}`}
                                alt=""
                                className="items_image"
                                style={{
                                  width: "100%",
                                  objectFit: "cover",
                                  height: "10rem",
                                }}
                              />
                              <div className="items_carddetails">
                                <h5 className="items_para">{item}</h5>
                                <button
                                  className="items_service_button"
                                  onClick={() => deleteItem(item)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {type == 1 ? (
                  <div className="column">
                    <div className="row">
                      <div
                        className="userdashboardlist_card"
                        style={{ width: "1000px" }}
                      >
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>SHOPS</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/shoplist"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <h1
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontStyle: "normal",
                          fontWeight: " 700",
                          padding: "20px",
                        }}
                      >
                        Services you can provide
                      </h1>

                      <div className="col-lg-3 mb-3">
                        <div className="userdashboardlist_card">
                          <div
                            className="card userdashboardCard text-white card-has-bg click-col"
                            style={{ backgroundImage: `url(${background1})` }}
                          >
                            {user.orders.map((order) => {
                              return (
                                <div className="card-img-overlay d-flex flex-column">
                                  <div className="card-body">
                                    <h6>{order.name}</h6>
                                    <h6>{order.email}</h6>
                                    <h6>{order.address}</h6>
                                  </div>
                                  <div className="card-footer">
                                    <div className="media">
                                      <div className="media-body">
                                        <Link
                                          to="/chatbox"
                                          className="userdashboardlist_btn"
                                        >
                                          Message
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {type == 2 ? (
                  <div className="row">
                    <div className="col-lg-3 mb-3">
                      <div className="userdashboardlist_card">
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>WOMEN RELATED SERVICES</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/womenservicelist"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 mb-3">
                      <div className="userdashboardlist_card">
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>WOMEN SALON</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/womensalonlist"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 mb-3">
                      <div className="userdashboardlist_card">
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>MEN SALON</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/mensalonlist"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 mb-3">
                      <div className="userdashboardlist_card">
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>THERAPIES</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/therapieslist"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 mb-3">
                      <div className="userdashboardlist_card">
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>CLEANING</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/cleaninglist"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 mb-3">
                      <div className="userdashboardlist_card">
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>SHOPS</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/shoplist"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 mb-3">
                      <div className="userdashboardlist_card">
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>WORKERS</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/workerslist"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 mb-3">
                      <div className="userdashboardlist_card">
                        <div
                          className="card userdashboardCard text-white card-has-bg click-col"
                          style={{ backgroundImage: `url(${background1})` }}
                        >
                          <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                              <h6>BLOGS</h6>
                            </div>
                            <div className="card-footer">
                              <div className="media">
                                <div className="media-body">
                                  <Link
                                    to="/blogs"
                                    className="userdashboardlist_btn"
                                  >
                                    Checkout
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : null}
      <Footer />
    </>
  );
};

export default UserDashboard;
