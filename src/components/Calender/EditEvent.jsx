import React from "react";
import { editEvent } from "../../redux/actions/calenderActions";
import { connect } from "react-redux";

const EditEvent = (props) => {
  const editEvent = () => {
    const { event } = props;
    props.editEvent(event);
  };

  return (
    <button onClick={editEvent} className="btn btn-ouline-primary">
      Save Changes
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};
export default connect(mapStateToProps, { editEvent })(EditEvent);
