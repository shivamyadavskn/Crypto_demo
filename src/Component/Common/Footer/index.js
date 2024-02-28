import React from "react";
// import "./styles.css";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer flex justify-between p-8 text-[var(--black)] bg-[var(--white)]">
      <p className="logo text-xl font-bold " onClick={() => topFunction()}>
        CryptoTracker<span className="text-[var(--blue)]">.</span>
      </p>


      <div className="social-links flex gap-8">
        <a href="https://github.com/shivamyadavskn">
          <GitHubIcon className="social-link" />
        </a>
        <a href="mailto:shivamyadavskn@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.linkedin.com/in/shivamyadavskill/">
          <LinkedInIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
