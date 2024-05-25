import "./styles.css";
import React, { useState } from "react";
import btn from "./button.module.css";
import AppCss from "./App.css";
import { faqData } from "./faaq/faqq";
import Faqq from "./faqq.jsx";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import helpTopics from "./faaq/helpTopics";
import { Link } from "react-router-dom";

export default function App() {
  let [pstatus, setPstatus] = useState(false);
  let [menustatus, setMenustatus] = useState(false);
  let [enquire, setEnquire] = useState(false);
  let [mfaq, setMfaq] = useState(faqData[0].id);
  let showNotification = () => {
    NotificationManager.info("Please fill your details");
  };
  let [notice, setNotice] = useState(0);
  let [content, setContent] = useState(helpTopics[0]);

  let changeDatas = (index) => {
    setNotice(index);
    setContent(helpTopics[index]);
  };

  return (
    <div className="App" style={{ backgroundColor: "skyblue", height: "100%" }}>
      <button className="enquirebutton" onClick={() => setEnquire(!enquire)}>
        Enquire Now{" "}
      </button>
      <div className={`enquirebox ${enquire ? "menquire" : " "} `}></div>
      <div className={`enquire ${enquire ? "qenuire" : " "}`}>
        <div className="x">
          {" "}
          <h3>Enquire Now</h3>
          <button className="btnx" onClick={() => setEnquire(!enquire)}>
            X
          </button>
        </div>
        <br />
        <label>Name</label>
        <br />
        <input></input>
        <br />
        <label>Email-id</label>
        <br />
        <input></input>
        <br />
        <label>Phone</label>
        <br />
        <input></input>
        <br />
        <button>Submit</button>
      </div>
      <button className="micon" onClick={() => setMenustatus(!menustatus)}>
        {menustatus ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-excel-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5.884 4.68 8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 1 1 .768-.64" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-justify"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>
        )}
      </button>
      <NotificationContainer />
      <button className="notifications" onClick={showNotification}>
        i
      </button>
      <div className={`menu ${menustatus ? "activeMenu" : ""}`}>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>ABOUT US</li>
          <li>CONTACT </li>
          <li>SERVICE</li>
          <li>WHY US</li>
          <li>CAREERS</li>
        </ul>
      </div>

      <div className="howtologin">
        <ul>
          {helpTopics.map((topic, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => changeDatas(index)}
                  className={notice == index ? "acticetap" : " "}
                >
                  {topic.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {content !== undefined ? <p> {content.content} </p> : ""}

      <h2>
        <strong>Login or Sign Up</strong>
      </h2>
      <br />
      <label> Email Id or user id </label>
      <br />
      <input type="text" style={{ width: "325px" }} />
      <br />
      <label>Enter your password </label>
      <br />
      <input
        type={pstatus ? "text" : "password"}
        placeholder={pstatus ? "Text" : "Password"}
      />
      <button className={btn.button} onClick={() => setPstatus(!pstatus)}>
        {pstatus ? "Hide" : "Show"}
      </button>
      <Faqq />
    </div>
  );
}
