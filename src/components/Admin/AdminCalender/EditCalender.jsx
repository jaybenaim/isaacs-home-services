import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import moment from "moment";

const EditEvents = ({ events }) => {
  const tableRows = () => {
    let sortedEvents = events.sort(function (a, b) {
      // Sort by date ASC
      var dateA = a.date.toUpperCase();
      var dateB = b.date.toUpperCase();
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      // names must be equal
      return 0;
    });

    return (
      events.length >= 1 &&
      sortedEvents.sort().map((event, i) => {
        const { title } = event;
        let date = moment.utc(event.date).format("MMMM Do YYYY");
        let time = moment(event.date).format("h:mm a");
        return (
          <tr key={i}>
            <td>{title}</td>
            <td>{date}</td>
            <td>{time}</td>
          </tr>
        );
      })
    );
  };
  return (
    <div className="div">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>

            <th>Date</th>
            <th>Time</th>
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
export default connect(mapStateToProps, {})(EditEvents);
