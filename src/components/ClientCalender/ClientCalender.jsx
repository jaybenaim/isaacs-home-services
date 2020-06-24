import React from "react";

import ContactInfo from "../ContactInfo/ContactInfo";
import MyCalendar from "../Calender/Calender";

import { connect } from "react-redux";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../assets/stylesheets/calender.css";

const ClientCalender = () => {
  return (
    <div className="calender">
      <h1 className="primary-font">Availability</h1>
      <MyCalendar />
      <ContactInfo />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};
export default connect(mapStateToProps, {})(ClientCalender);
