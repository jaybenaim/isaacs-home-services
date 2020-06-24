import React from "react";
import Calender from "../../Calender/Calender";
import { connect } from "react-redux";
import CalenderForm from "./CalenderForm";

const AdminCalender = ({ events }) => {
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
