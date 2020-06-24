import React, { useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import ContactInfo from "../ContactInfo/ContactInfo";

import { getEvents, addToEvents } from "../../redux/actions/calenderActions";
import { connect } from "react-redux";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../assets/stylesheets/calender.css";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  useEffect(() => {
    props.getEvents();
    // eslint-disable-next-line
  }, []);
  const { isAuthenticated, events } = props;
  return (
    <div className="calender">
      {!isAuthenticated && <h1 className="primary-font">Availability</h1>}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      {!isAuthenticated && <ContactInfo />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    isAuthenticated: state.auth.user.isAuthenticated,
  };
};
export default connect(mapStateToProps, { getEvents, addToEvents })(MyCalendar);
