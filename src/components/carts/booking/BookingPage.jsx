import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../../Header";
import PcPage from "./PcPage";
import PsPage from "./PsPage";
import VipPage from "./VipPage";

const BookingPage = () => {
  return (
    <>
      <Header />
      <div className="booking">
        {" "}
        <div className="bk">
          <PcPage />
          <PsPage />
          <VipPage />
        </div>
        <div className="booking_length">
          <div></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BookingPage;
