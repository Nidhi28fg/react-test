import { faqData } from "./faaq/faqq";
import "./styles.css";
import React, { useState } from "react";
import AppCss from "./App.css";

export default function Faqq() {
  let [mfaq, setMfaq] = useState(faqData[0].id);
  let items = faqData.map((fdata, i) => {
    let sqfaq = {
      fdata,
      mfaq,
      setMfaq,
    };
    return <Faaqitems sqfaq={sqfaq} key={i} />;
  });
  return (
    <div className="faq">
      <h2>FAQ</h2>
      {items}
    </div>
  );
}

function Faaqitems({ sqfaq }) {
  let { fdata, mfaq, setMfaq } = sqfaq;
  return (
    <div className="faqbox">
      <div className="faqquestion" onClick={() => setMfaq(fdata.id)}>
        {fdata.question}
      </div>
      <div className={mfaq === fdata.id ? "showfaqanswer" : "faqanswer"}>
        {fdata.answer}
      </div>
    </div>
  );
}
