import React from "react";
import { addToEvents } from "../../redux/actions/calenderActions";
import { connect } from "react-redux";

const AddEvent = (props) => {
  const event = {
    title: "new Event",
    start: new Date(),
    end: new Date(),
    allDay: true,
  };

  const addEvent = () => {
    props.addToEvents(event);
  };
  return (
    <button onClick={addEvent} className="btn btn-ouline-primary">
      Add event
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};
export default connect(mapStateToProps, { addToEvents })(AddEvent);
