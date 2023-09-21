import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Sticky = () => {
  return (
    <>
      <div className="sticky-footer">
        <p>Let's Connect :</p>

        <div style={{ display: "flex", gap: "1.2rem" }}>
          <a
            href="https://www.linkedin.com/in/zakariae-belkasmi-882b34170/"
            target="_blank"
          >
            <FaLinkedin style={{ color: "white" }} />
          </a>
          <a href="https://github.com/zackthe" target="_blank">
            <FaGithub style={{ color: "white" }} />
          </a>

          <a href="https://www.instagram.com/za_ach/" target="_blank">
            <FaInstagram style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sticky;
