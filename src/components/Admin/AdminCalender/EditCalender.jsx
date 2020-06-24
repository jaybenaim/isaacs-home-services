import React, { useState } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

import CalenderForm from "./CalenderForm";
import TableRow from "./TableRow";

import { deleteEvent } from "../../../redux/actions/calenderActions";

const EditEvents = (props) => {
  const [editForm, showEditForm] = useState(false);

  const { events, handleHeadingToggle } = props;
  const tableRows = () => {
    let sortedEvents =
      events.length >= 1 &&
      events.sort(function (a, b) {
        // Sort by date ASC
        var dateA = a.start;
        var dateB = b.start;
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        // names must be equal
        return 0;
      });

    return (
      events.length >= 1 &&
      sortedEvents.sort().map((event, i) => {
        return (
          <TableRow
            key={i}
            event={event}
            deleteEvent={props.deleteEvent}
            handleEdit={handleEdit}
          />
        );
      })
    );
  };

  const handleEdit = (event) => {
    showEditForm(!editForm);
    handleHeadingToggle("edit", event);
  };
  return (
    <div className="div">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRows()}</tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { events: state.events.events };
};
export default connect(mapStateToProps, { deleteEvent })(EditEvents);
