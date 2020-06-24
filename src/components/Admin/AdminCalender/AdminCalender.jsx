import React, { useState } from "react";
import Calender from "../../Calender/Calender";
import { connect } from "react-redux";
import CalenderForm from "./CalenderForm";
import EditCalender from "./EditCalender";
import { Button } from "react-bootstrap";

const AdminCalender = ({ events }) => {
  const [showCalenderForm, toggleCalenderForm] = useState(false);
  const [caret, setCaret] = useState("fa fa-caret-down");
  const [action, setAction] = useState("add");
  const [currentEvent, setCurrentEvent] = useState();

  const handleToggleCalenderForm = () => {
    toggleCalenderForm(!showCalenderForm);
    setCaret(showCalenderForm ? "fa fa-caret-down" : "fa fa-caret-up");
  };
  const handleHeadingToggle = (action, event) => {
    if (action === "edit") {
      setCurrentEvent(event);
      toggleCalenderForm(true);

      setAction("edit");
    }
    if (action === "add") {
      setAction("add");
      toggleCalenderForm(!showCalenderForm);
    }
  };

  return (
    <>
      <Calender myEventsList={events} />
      {action === "add" ? (
        <h2>
          Add Events{" "}
          <i className={caret} onClick={() => handleToggleCalenderForm()}></i>
        </h2>
      ) : (
        action === "edit" && (
          <>
            <h2>Edit Event - {currentEvent.title}</h2>{" "}
            <Button
              variant="outline-danger"
              onClick={() => handleHeadingToggle("add")}
            >
              x
            </Button>
          </>
        )
      )}

      {showCalenderForm && (
        <CalenderForm
          edit={action === "edit" ? true : false}
          event={currentEvent}
        />
      )}

      <EditCalender handleHeadingToggle={handleHeadingToggle} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};
export default connect(mapStateToProps, {})(AdminCalender);
