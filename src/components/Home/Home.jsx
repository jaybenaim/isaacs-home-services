import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { refreshData } from "../../redux/actions/dataActions";

const Home = (props) => {
  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <h3>Home</h3>
          <button onClick={() => props.refreshData()}> Refresh Data</button>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    services: state.services,
  };
};
export default withRouter(connect(mapStateToProps, { refreshData })(Home));
