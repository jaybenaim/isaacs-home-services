import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { getEvents, addToEvents } from "../../redux/actions/calenderActions";
import { connect } from "react-redux";
import AddEvent from "./AddEvent";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  useEffect(() => {
    props.getEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={props.events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      <AddEvent />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};
export default connect(mapStateToProps, { getEvents, addToEvents })(MyCalendar);
