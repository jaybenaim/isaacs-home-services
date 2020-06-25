import React, { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { connect } from "react-redux";
import CalendarForm from "./CalendarForm";
import EditCalendar from "./EditCalendar";
import { Button } from "react-bootstrap";

const AdminCalender = ({ events }) => {
  const [showCalendarForm, toggleCalendarForm] = useState(false);
  const [caret, setCaret] = useState("fa fa-caret-down");
  const [action, setAction] = useState("add");
  const [currentEvent, setCurrentEvent] = useState();

  const handleToggleCalendarForm = () => {
    toggleCalendarForm(!showCalendarForm);
    setCaret(showCalendarForm ? "fa fa-caret-down" : "fa fa-caret-up");
  };
  const handleHeadingToggle = (action, event) => {
    if (action === "edit") {
      setCurrentEvent(event);
      toggleCalendarForm(true);

      setAction("edit");
    }
    if (action === "add") {
      setAction("add");
      toggleCalendarForm(!showCalendarForm);
    }
  };

  return (
    <>
      <Calendar myEventsList={events} />
      {action === "add" ? (
        <h2>
          Add Events{" "}
          <i className={caret} onClick={() => handleToggleCalendarForm()}></i>
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

      {showCalendarForm && (
        <CalendarForm
          edit={action === "edit" ? true : false}
          event={currentEvent}
        />
      )}

      <EditCalendar handleHeadingToggle={handleHeadingToggle} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};
export default connect(mapStateToProps, {})(AdminCalender);
