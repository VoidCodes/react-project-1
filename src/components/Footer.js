import React from "react";

function Footer() {
  return (
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Biography</h5>
            <p className="grey-text text-lighten-4">This website is just a clone of my school project that i did, but rewritten in <a className="blue-text text-lighten-2" href="https://reactjs.org/">ReactJS</a></p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Social media</h5>
              <ul>
                <li><a className="white-text" href="https://www.facebook.com/"><img src="https://img.icons8.com/material/24/000000/facebook-new.png" alt="Facebook"/></a></li>
                <li><a className="white-text" href="https://twitter.com/home"><img src="https://img.icons8.com/material/24/000000/twitter--v1.png" alt="Twitter"/></a></li>
                <li><a className="white-text" href="https://www.instagram.com/"><img src="https://img.icons8.com/material/24/000000/instagram-new--v1.png" alt="Instagram"/></a></li>
                <li><a className="white-text" href="https://www.linkedin.com/"><img src="https://img.icons8.com/material/24/000000/linkedin--v3.png" alt="LinkedIn"/></a></li>
              </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2022 Copyright Harold
        </div>
      </div>
    </footer>
  );
}

export default Footer;