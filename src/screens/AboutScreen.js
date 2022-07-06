import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setUserAge, setUserName } from "../redux/actions";

function AboutScreen() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="name">Enter your name</label>
              <input
                id="name"
                value={userData.userName}
                style={{ width: '100%' }}
                placeholder="Enter your name"
                className="form-control"
                onChange={(event) => dispatch(setUserName(event.target.value))}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="age">Enter your age</label>
              <input
                id="age"
                value={userData.userAge}
                style={{ width: '100%' }}
                placeholder="Enter your age"
                className="form-control"
                onChange={(event) => dispatch(setUserAge(event.target.value))}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default AboutScreen;
