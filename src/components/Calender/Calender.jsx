import React, { useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

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
  const { events } = props;
  return (
    <div className="calender">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
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
