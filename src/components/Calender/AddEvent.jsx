import React, { useEffect } from "react";
import { addToEvents, getEvents } from "../../redux/actions/calenderActions";
import { connect } from "react-redux";

const AddEvent = (props) => {
  const addEvent = () => {
    const { event } = props;
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
export default connect(mapStateToProps, { addToEvents, getEvents })(AddEvent);
