import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { JoinStyle } from "./JoinUs.style.js";
import ContactPopUp from "../globalComponents/contactPopUp/ContactPopUp";

const JoinUs = () => {
  return (
    <JoinStyle>
      <div>
        <NavBar />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfEHpF9H3U9yCzmUPEiac637mECOzXAqrr9AXuxuz48KUd1pQ/viewform?embedded=true"
          width="700"
          height="520"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </JoinStyle>
  );
};

export default JoinUs;
