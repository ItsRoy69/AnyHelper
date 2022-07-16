import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import shp1 from "../assets/shp1.svg";

import "../styles/ShopJoin.css";

const ShopJoin = () => {

  const [shop, setShop] = useState({
    
    shopType: "plumbing",
    item1: "",
    price1: 0,
    item2: "",
    price2: 0,
    item3: "",
    price3: 0,
    item4: "",
    price4: 0,
    item5: "",
    price5: 0,
    item6: "",
    price6: 0,
    item7: "",
    price7: 0,
    item8: "",
    price8: 0,
    item9: "",
    price9: 0
  });

  var pemitems = {
    item1: "Tap",
    item2: "Showers",
    item3: "Valves",
    item4: "CPVC Pipes & Fittings",
    item5: "Metal Fittings",
    item6: "Sinks",
    item7: "Toilet Pot",
    item8: "Flush Valve",
    item9: "Water Storage Solution",
  };
  
  var electricItems = {
    item1: "LED Bulb",
    item2: "WIRE",
    item3: "MCB",
    item4: "Extension Box",
    item5: "Switch",
    item6: "Socket",
    item7: "Switch Board",
    item8: "Bulb Holder",
    item9: "Tube Light"
  };
  var mechanicItems = {
    item1: "Wheel",
    item2: "Gear",
    item3: "Electric Wrench",
    item4: "Mechanic ToolSet",
    item5: "Adjustable spanner",
    item6: "Wire Stripper",
    item7: "Screw Driver",
    item8: "Springs",
    item9: "Clamp"
  };  

  var collapseTitle;
  var collapseItems = {};
  if (shop.shopType === "plumbing") {
    collapseTitle = "Plumbing Items";
    collapseItems = pemitems;
  } else if (shop.shopType === "electric") {
    collapseTitle = "Electric Items";
    collapseItems = electricItems;
  } else {
    collapseTitle = "Mechanic Items";
    collapseItems = mechanicItems;
  }
  shop.item1 = collapseItems.item1;
  shop.item2 = collapseItems.item2;
  shop.item3 = collapseItems.item3;
  shop.item4 = collapseItems.item4;
  shop.item5 = collapseItems.item5;
  shop.item6 = collapseItems.item6;
  shop.item7 = collapseItems.item7;
  shop.item8 = collapseItems.item8;
  shop.item9 = collapseItems.item9;
  
  
  return (
    <>
      <Navbar />

      <div className="shopjoin_container container">
        <div className="shopjoin_container_inner">
          <h2 className="shopjoin_header">Register your shop</h2>

          <div className="shopjoin_form1 row">
            <div className="col-lg-6 col-md-12">
              <img src={shp1} alt="" className="shp_img1" />
            </div>

            <div className="col-lg-6 col-md-12 form_col">
              <form>
                <input
                  className="form-control form1_control"
                  placeholder="Name"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Email"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Latitude"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Longitude"
                />

                <a type="button" className="btn btn-warning" style={{ marginBottom: "2rem" }} href="https://gps-coordinates.org/">
                   Get Location         
                </a>

                <input
                  className="form-control form1_control"
                  placeholder="Password"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Phone"
                />

                <input
                  className="form-control form1_control"
                  placeholder="City"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Address"
                />

                <input
                  className="form-control form1_control"
                  placeholder="Shop name"
                />

                <div className="nav-item dropdown">
                  <p
                    className="dropdown-toggle form1_control"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Occupation
                  </p>

                  <ul className="dropdown-menu " aria-labelledby="navbarDropdown" onChange={(e) =>
                      setShop({
                        ...shop,
                        shopType: e.target.value,
                      })
                    }>
                    <li>
                      <option className="dropdown-item" value="plumbing">
                        Plumbing
                      </option>
                    </li>
                    <li>
                      <option className="dropdown-item" value="electric">
                        Electric
                      </option>
                    </li>
                    <li>
                      <option className="dropdown-item" value="mechanic">
                        Mechanic
                      </option>
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="shopjoin_form1 row">
            <div className="col-lg-3 col-md-12 form_col">              

              <input
                className="form-control form1_control"
                id="item1"
                placeholder={collapseItems.item1}
              />

              <input
                className="form-control form1_control"
                id="item2"
                placeholder={collapseItems.item2}
              />              
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  className="form-control form1_control"
                  id="item3"
                  placeholder={collapseItems.item3}
                />

                <input
                  className="form-control form1_control"
                  id="item4"
                  placeholder={collapseItems.item4}
                />              
                
              </form>
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  className="form-control form1_control"
                  id="item5"
                  placeholder={collapseItems.item5}
                />

                <input
                  className="form-control form1_control"
                  id="item6"
                  placeholder={collapseItems.item6}
                />               
                
              </form>
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  className="form-control form1_control"
                  id="item7"
                  placeholder={collapseItems.item7}
                />

                <input
                  className="form-control form1_control"
                  id="item8"
                  placeholder={collapseItems.item8}
                />
              </form>
            </div>

            <div className="col-lg-3 col-md-12 form_col">
              <form>
                <input
                  className="form-control form1_control"
                  id="item9"
                  placeholder={collapseItems.item9}
                />
                <button type="submit" className="btn btn-warning">
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopJoin;
