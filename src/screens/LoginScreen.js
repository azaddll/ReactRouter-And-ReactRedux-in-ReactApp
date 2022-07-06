import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUserAge, setUserName } from "../redux/actions";
import { setEmail, setPassword } from "../redux/actions";
import { useNavigate } from "react-router";

function AboutScreen() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const authData = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const login = () => {
    if (authData.email == "" || authData.email == null) {
      alert("Enter your email Address");
      return;
    }

    if (authData.password == "" || authData.password == null) {
      alert("enter your password");
      return;
    }

    dispatch(setAuth(true));

    navigate("/Home");
  };

  const logout = () => {
    dispatch(setAuth(false));
  }

  return (
    <div className="App">
      <Header />
      <header className="App-header">
          {authData.auth == false && (
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="name">Enter Email</label>
                  <input
                    id="name"
                    style={{ width: "100%" }}
                    placeholder="Enter email"
                    className="form-control"
                    onChange={(event) => dispatch(setEmail(event.target.value))}
                  />
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="form-group">
                  <label htmlFor="age">Enter Password</label>
                  <input
                    id="age"
                    value={authData.password}
                    style={{ width: "100%" }}
                    placeholder="Enter password"
                    className="form-control"
                    onChange={(event) =>
                      dispatch(setPassword(event.target.value))
                    }
                    type={"password"}
                  />
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="form-group">
                  <button onClick={() => login()} className="btn btn-danger">
                    Login
                  </button>
                </div>
              </div>
            </div>
          )}
          {authData.auth == true && (
            <div className="col-12 mt-3">
              <div className="form-group">
                <button onClick={() => logout()} className="btn btn-danger">
                  Logout
                </button>
              </div>
            </div>
          )}
      </header>
    </div>
  );
}

export default AboutScreen;
