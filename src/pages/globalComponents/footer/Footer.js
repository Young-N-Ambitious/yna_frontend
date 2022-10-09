import React from "react";
import twitter from "../../../assets/twitter.png";
import linkedin from "../../../assets/Linkedin.png";

const Footer = () => {
  return (
    <footer class="py-10 bg-[#ffd644] md:flex md:items-center md:justify-between md:p-6">
      <span class="text-lg font-bold text-black sm:text-center">
        © 2022 YOUNG N AMBITIOUS 2022
      </span>
      <ul class="flex flex-wrap items-center  text-sm space-x-5 text-gray-500 ">
        <li>
          <a
            href="https://twitter.com/YNA_Squad"
            target="_blank"
            rel="noreferrer"
          >
            <img class="w-27.62 h-17.42 " src={twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/yna-consult-group/"
            target="_blank"
            rel="noreferrer"
          >
            <img class="w-29.52 h-22.3 " src={linkedin} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
