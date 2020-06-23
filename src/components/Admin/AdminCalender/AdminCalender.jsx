import React from "react";
import Calender from "../../Calender/Calender";
import AddEvent from "../../Calender/AddEvent";
import { connect } from "react-redux";
import CalenderForm from "./CalenderForm";

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
      <CalenderForm />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};
export default connect(mapStateToProps, {})(AdminCalender);
