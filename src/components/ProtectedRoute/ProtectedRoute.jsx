import React, { useState } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../Auth/Login";
import "./protectedRoute.css";

function PrivateRoute({ role, children: Component, ...rest }) {
  const [showAlert, setShowAlert] = useState(true);
  if (role === undefined) {
    role = false;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        role === "admin" ? (
          Component
        ) : showAlert ? (
          <>
            <div className="alert alert-danger login-alert" role="alert">
              Please login first!
              <button
                className="btn-success alert-close-btn"
                onClick={() => setShowAlert(false)}
              >
                X
              </button>
            </div>
            <Login {...props} />
          </>
        ) : (
          <Login {...props} />
        )
      }
    />
  );
}
export default PrivateRoute;

/// create component with alert message to login
// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { isLoaded, isEmpty } from "react-redux-firebase";
// import { useSelector } from "react-redux";

// const PrivateRoute = ({ children, ...remainingProps }) => {
//   const auth = useSelector((state) => state.firebase.auth);
//   return (
//     <Route
//       {...remainingProps}
//       render={({ location }) =>
//         isLoaded(auth) && !isEmpty(auth) ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };
// export default PrivateRoute;
// import React, { useState } from "react";
// // eslint-disable-next-line
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "../../Home/Home";
// import AdminHome from "../../Admin/AdminHome/AdminHome";
// import { useSelector } from "react-redux";

// function PrivateRoute({ role, children: Component, ...rest }) {
//   const auth = useSelector((state) => state.firebase.auth);

//   const [showAlert, setShowAlert] = useState(true);
//   if (role === undefined) {
//     role = false;
//   }
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !auth.isEmpty ? (
//           Component
//         ) : showAlert ? (
//           <>
//             <div className="alert alert-danger login-alert" role="alert">
//               Please login first!
//               <button
//                 className="btn-success alert-close-btn"
//                 onClick={() => setShowAlert(false)}
//               >
//                 X
//               </button>
//             </div>
//           </>
//         ) : (
//               <Home {...props} />
//             )
//       }
//     />
//   );
// }
// export default PrivateRoute;

// /// create component with alert message to login
