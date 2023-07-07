import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Family Counseling</a>
              </li>
              <li>
                <a href="#">Individual Counseling</a>
              </li>
              <li>
                <a href="#">Depression and Anxiety Support</a>
              </li>
              <li>
                <a href="#">Online Counseling</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Exercise</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <form action="">
              <input
                type="text"
                name=""
                placeholder="Yourname"
                className="inputName"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="inputEmail"
              />
              <input type="submit" value="Submit" className="inputSubmit" />
            </form>
          </div>
        </div>
      </div>
      {/* 
      <br />
      <hr /> */}

      <div className="row">
        <div className="col">
          <p>© {currentYear} MindCare. All Rights Reserved.</p>
        </div>

        <div className="socialIcons">
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
