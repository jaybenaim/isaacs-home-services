import React from "react";

import ContactInfo from "../ContactInfo/ContactInfo";
import MyCalendar from "../Calendar/Calendar";

import { connect } from "react-redux";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../assets/stylesheets/calendar.css";

const ClientCalendar = () => {
  return (
    <div className="client-calender">
      <h1 className="primary-font">Availability</h1>
      <MyCalendar />
      <ContactInfo />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(ClientCalendar);
