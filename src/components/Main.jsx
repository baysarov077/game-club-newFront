import React from "react";
import Header from "./Header";
import titleImg from "./img/pubg.png";
import map from './img/map.png'

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="flexTitle">
            <div className="mainImgBlock">
              <img className="titleImg" src={titleImg} alt="none" />
            </div>
            <div className="titleText">
              <h1>
                Лучша работа во <br />
                всем мире
              </h1>
              <div className="map">
                <img style={{width: '100%'}} src={map} alt="" />
              </div>
              <div className="buttons" style={{ display: "flex" }}>
                <button className="titleBtn">Перейти к брони</button>
                <button className="titleBtn">Позвонить</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
