import React, { useState  } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setFontSize } from "../redux/actions";

function HomeScreen() {
  const userData = useSelector((state) => state.user);
  const [fontSizes, setFontSizes] = useState([10, 20, 30, 40]);

  const styleData = useSelector((state) => state.style);

  const dispatch = useDispatch();
  

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>{"userName = " + userData.userName}</p>

        <p>{"userAge = " + userData.userAge}</p>

        <p>{"fontSize = " + styleData.fontSize}</p>

        <div className="form-group">
          <label htmlFor="fontSize">FontSize</label>

          <select
            onChange={(event) => dispatch(setFontSize(event.target.value))}
            id="fontSize"
            className="form-control"
            style={{ width: 200 }}
          >
            {fontSizes.map((item) => (
              <option selected={styleData.fontSize == item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </header>
    </div>
  );
}

export default HomeScreen;
