import React from "react";
import NavBar from "../globalComponents/navBar/NavBar";
import { JoinStyle } from "./JoinUs.style.js";

const JoinUs = () => {
  return (
    <>
      <NavBar />
      <JoinStyle>
        <div className="join-us">
          <h1>Join Us</h1>
          <iframe
            class="responsive-iframe"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfEHpF9H3U9yCzmUPEiac637mECOzXAqrr9AXuxuz48KUd1pQ/viewform?embedded=true"
            // width="640"
            // height="600"
            align="center"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </JoinStyle>
    </>
  );
};

export default JoinUs;
