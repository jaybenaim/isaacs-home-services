import React, { useState } from "react";
import { Form } from "react-bootstrap";
import AddEvent from "../../Calender/AddEvent";
import "../../../assets/stylesheets/calenderForm.css";

const CalenderForm = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [allDay, setAllDay] = useState(false);

  let hour = Number(startTime.slice(0, 2));
  const getPrefix = (hour) => {
    if (hour - 12 < 12 && hour > 0) {
      return "AM";
    }
    if (hour === "0") {
      return "AM";
    }
    if (hour - 12 <= 0) {
      return "PM";
    }
  };
  hour = getPrefix(hour);
  const amOrPm = hour;

  const event = {
    title: `${title} - ${startTime} ${amOrPm}`,
    start: startDate,
    end: !endDate ? startDate : endDate,
    allDay,
  };
  const handleSetDate = (date) => {
    let formattedDate = date.split("-");
    let year = formattedDate[0];
    let month = String(Number(formattedDate[1]) - 1);
    let day = formattedDate[2];

    let newDate = new Date(year, month, day);

    setStartDate(newDate);
    setStartDateValue(date);
  };
  const handleEndDate = (date) => {
    let newDate = new Date(date);
    setEndDate(newDate);
    setEndDateValue(date);
  };
  const handleStartDateTime = (time) => {
    let formattedDate = startDateValue.split("-");
    let year = formattedDate[0];
    let month = String(Number(formattedDate[1]) - 1);
    let day = formattedDate[2];

    let formattedTime = time.split(":");
    let hour = formattedTime[0];
    let min = formattedTime[1];

    let dateTime = new Date(year, month, day, hour, min);

    setStartDate(dateTime);
    setStartTime(time);
  };

  return (
    <div className="calender-form">
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group controlId="calenderFormTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted">Title for your event</Form.Text>
        </Form.Group>
        <Form.Group controlId="calenderFormStart">
          <Form.Label>Start Date</Form.Label>
          <input
            type="date"
            placeholder="Start Date"
            value={startDateValue}
            onChange={(e) => handleSetDate(e.target.value)}
          />
        </Form.Group>
        {startDateValue && (
          <Form.Group controlId="calenderFormStart">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="time"
              placeholder="Start Time"
              value={startTime}
              onChange={(e) => handleStartDateTime(e.target.value)}
            />
          </Form.Group>
        )}

        <Form.Group controlId="calenderFormEndDate">
          <Form.Label>End Date</Form.Label>

          <Form.Control
            type="date"
            placeholder="Check me out"
            value={endDateValue}
            onChange={(e) => handleEndDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="calenderFormAllDay">
          <Form.Check
            type="checkbox"
            value={allDay}
            label="Full Day Job (Click Here to change)"
            onChange={(e) => setAllDay(!allDay)}
          />
        </Form.Group>
        <AddEvent event={event} />
      </Form>
    </div>
  );
};

export default CalenderForm;
