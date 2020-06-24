import React from "react";
import Calender from "../../Calender/Calender";
import { connect } from "react-redux";
import CalenderForm from "./CalenderForm";
import EditEvents from "./EditCalender";

const AdminCalender = ({ events }) => {
  return (
    <>
      <Calender myEventsList={events} />
      <h2>Add Events</h2>
      <CalenderForm />
      <EditEvents />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};
export default connect(mapStateToProps, {})(AdminCalender);
