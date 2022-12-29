import "./App.css";
import Popup from "./components/Popup";
import { useState } from "react";
// import { useState, useEffect } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [timedPopup, setTimedPopup] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //       setTimedPopup(true);
  //     }, 5000);
  // }, []);

  return (
    <div className="App">
      <main>
        <button className="button-popup" onClick={() => setButtonPopup(true)}>
          show popup
        </button>
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Theme Color</h3>
        <h4 className="changetheme">Change Theme</h4>
        <p className="paragraph1">Font Color</p>
        <p className="paragraph-right">#444444</p>
        <p className="c-right"></p>
        <p className="paragraph">Background Color</p>
        <p className="paragraph-right">#FFFFFF</p>
        <p className="c-rightF"></p>
        <p className="paragraph">Button Color</p>
        <p className="paragraph-right">#2072EF</p>
        <p className="c-rightB"></p>
        <p className="paragraph">Button Border Color</p>
        <p className="paragraph-right">#2072EF</p>
        <p className="c-rightB"></p>
        <p className="paragraph">Buttons Mouseover Color</p>
        <p className="paragraph-right">#0053D1</p>
        <p className="c-rightM"></p>
      </Popup>
      {/* 
      popup timed */}
      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h1>My timed popup</h1>
        <h3>Theme Color</h3>
        <h4>Change Theme</h4>
        <p>Font Color</p>
        <p>Background Color</p>
        <p>Button Color</p>
        <p>Button Border Color</p>
        <p>Buttons Mouseover Color</p>
      </Popup> */}
    </div>
  );
}

export default App;
