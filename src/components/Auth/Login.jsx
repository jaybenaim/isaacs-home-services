import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import classnames from "classnames";
class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push("/admin");
    }
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      };
    }
    return null;
  }
  componentDidMount() {
    this.setState({ errors: {} });
    this.props.loginUser();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth.isAuthenticated) {
      prevProps.history.push("/admin");
    }
    if (prevState.errors.length >= 1) {
      this.setState({ errors: prevState });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };
  showErrors = (errors) => {
    let keys = Object.keys(errors);
    for (let i = 0; i < keys.length; i++) {
      return <li>{errors[keys[i]]}</li>;
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            {errors.response && (
              <div>{this.showErrors(errors.response.data)}</div>
            )}
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <label htmlFor="email" style={{ display: "none" }}>
                  Email
                </label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>{" "}
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <label htmlFor="password" style={{ display: "none" }}>
                  Password
                </label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
