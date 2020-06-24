import React from "react";
import { Button } from "react-bootstrap";
import moment from "moment";

const TableRow = ({ event, deleteEvent, handleEdit }) => {
  const { title } = event;
  let date = moment.utc(event.start).format("MMMM Do YYYY");
  let time = moment(event.start).format("h:mm a");

  return (
    <tr>
      <td>{title}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <Button variant="warning" onClick={() => handleEdit(event)}>
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={() => deleteEvent(event)}>
          X
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
