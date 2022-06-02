import React, { useState } from "react";
import "../styles/Items.css";

import { BsBagPlusFill } from "react-icons/bs";

import items1 from "../assets/items1.png";
import items2 from "../assets/items2.png";
import items3 from "../assets/items3.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Payment from "../components/Payment";

const Items = () => {

  const [modal, setModal] = useState(false);

    return (
    <>
      <Navbar />
      <div className="Items-container-header">
        <h1>Shop items here</h1>
      </div>
      <div className="container itemscard_parent">

        <div className="card itemscard_card" style={{ width: "18rem" }}>
          <img src={items1} className="card-img-top itemscard_img" alt="..." />
          <div className="card-body">
            <h5 className="card-title itemscard_title">PHILIPS Base B22 LED Bulb</h5>
            <p>2.7 watt led bulb</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="itemcard_price">$10</h5>
            <div className="button" onClick={setModal} >
              <BsBagPlusFill
                size={18}
                style={{ fill: "#C70A80", marginRight: "0.4rem" }}
              />
              Buy Now
            </div>
            {modal && <Payment setModal={setModal} />}
          </div>
        </div>

        <div className="card itemscard_card" style={{ width: "18rem" }}>
          <img src={items2} className="card-img-top itemscard_img" alt="..." />
          <div className="card-body">
            <h5 className="card-title itemscard_title">PHILIPS Base B22 LED Bulb</h5>
            <p>2.7 watt led bulb</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="itemcard_price">$10</h5>
            <div className="button" onClick={setModal} >
              <BsBagPlusFill
                size={18}
                style={{ fill: "#C70A80", marginRight: "0.4rem" }}
              />
              Buy Now
            </div>
            {modal && <Payment setModal={setModal} />}
          </div>
        </div>

        <div className="card itemscard_card" style={{ width: "18rem" }}>
          <img src={items3} className="card-img-top itemscard_img" alt="..." />
          <div className="card-body">
            <h5 className="card-title itemscard_title">PHILIPS Base B22 LED Bulb</h5>
            <p>2.7 watt led bulb</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="itemcard_price">$10</h5>
            <div className="button" onClick={setModal} >
              <BsBagPlusFill
                size={18}
                style={{ fill: "#C70A80", marginRight: "0.4rem" }}
              />
              Buy Now
            </div>
            {modal && <Payment setModal={setModal} />}
          </div>
        </div>

        <div className="card itemscard_card" style={{ width: "18rem" }}>
          <img src={items1} className="card-img-top itemscard_img" alt="..." />
          <div className="card-body">
            <h5 className="card-title itemscard_title">PHILIPS Base B22 LED Bulb</h5>
            <p>2.7 watt led bulb</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="itemcard_price">$10</h5>
            <div className="button" onClick={setModal} >
              <BsBagPlusFill
                size={18}
                style={{ fill: "#C70A80", marginRight: "0.4rem" }}
              />
              Buy Now
            </div>
            {modal && <Payment setModal={setModal} />}
          </div>
        </div>

        <div className="card itemscard_card" style={{ width: "18rem" }}>
          <img src={items2} className="card-img-top itemscard_img" alt="..." />
          <div className="card-body">
            <h5 className="card-title itemscard_title">PHILIPS Base B22 LED Bulb</h5>
            <p>2.7 watt led bulb</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="itemcard_price">$10</h5>
            <div className="button" onClick={setModal} >
              <BsBagPlusFill
                size={18}
                style={{ fill: "#C70A80", marginRight: "0.4rem" }}
              />
              Buy Now
            </div>
            {modal && <Payment setModal={setModal} />}
          </div>
        </div>

        <div className="card itemscard_card" style={{ width: "18rem" }}>
          <img src={items3} className="card-img-top itemscard_img" alt="..." />
          <div className="card-body">
            <h5 className="card-title itemscard_title">PHILIPS Base B22 LED Bulb</h5>
            <p>2.7 watt led bulb</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h5 className="itemcard_price">$10</h5>
            <div className="button" onClick={setModal} >
              <BsBagPlusFill
                size={18}
                style={{ fill: "#C70A80", marginRight: "0.4rem" }}
              />
              Buy Now
            </div>
            {modal && <Payment setModal={setModal} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
