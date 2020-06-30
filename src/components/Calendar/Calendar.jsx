import React, { useEffect, useState } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import {
  getEvents,
  addToEvents,
  deleteEvent,
} from "../../redux/actions/calenderActions";
import { connect } from "react-redux";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../assets/stylesheets/calendar.css";
import Notifications from "../Notifications/Notifications";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  useEffect(() => {
    props.getEvents();
    // eslint-disable-next-line
  }, []);

  const { events } = props;
  const [confirmItem, toggleConfirmItem] = useState(false);
  const [event, setEvent] = useState();
  const [confirmed, setConfirmed] = useState(false);

  // onClick of event on calender
  const onSelectEvent = (event) => {
    if (props.isAuthenticated) {
      toggleConfirmItem(!confirmItem);
      setConfirmed(false);
      setEvent(event);
    }
  };

  // handle event delete
  const handleConfirm = () => {
    props.deleteEvent(event);
    toggleConfirmItem(!confirmItem);
    setConfirmed(true);
  };
  return (
    <div id="calender">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => onSelectEvent(event)}
      />
      {/* insert notifications component here */}
      {confirmItem && (
        <Notifications
          type={"alert"}
          heading={"Confirm Delete?"}
          body={"Are you sure you want to delete this item?"}
          variant={"danger"}
          handleConfirm={handleConfirm}
          confirmButtonText={"Delete"}
        />
      )}
      {confirmed && (
        <Notifications
          type={"toast"}
          heading={"Item Deleted"}
          body={"Try refreshing the page to see the changes."}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    isAuthenticated: state.auth.isAuthenticated,
  };
};
export default connect(mapStateToProps, {
  getEvents,
  addToEvents,
  deleteEvent,
})(MyCalendar);
