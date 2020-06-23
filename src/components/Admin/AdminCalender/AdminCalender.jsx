import React from "react";
import Calender from "../../Calender/Calender";
import AddEvent from "../../Calender/AddEvent";
import { connect } from "react-redux";

const AdminCalender = ({ events }) => {
  const event = {
    title: "new Event",
    start: new Date(),
    end: new Date(),
    allDay: true,
  };

  return (
    <>
      <Calender myEventsList={events} />

      <AddEvent event={event} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};
export default connect(mapStateToProps, {})(AdminCalender);
