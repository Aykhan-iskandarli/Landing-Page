import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <section className="footer">
      <footer>
        <div className="container">
          <div className="row justify-between">
            <div className="col-4 col-md-6 col-xs-11">
              <ul className="menu-list">
                <li>
                  <Logo />
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit ducimus voluptatibus neque illo id repellat quisquam?
                    Autem expedita earum quae laborum ipsum ad.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-3 col-md-6 col-xs-11">
              <ul className="menu-list">
                <h4>PRIVACY & TOS</h4>
                <li>
                  <Link to="/">Advertiser Agreement</Link>
                </li>
                <li>
                  <Link to="/">Acceptable Use Policy</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Technology Privacy</Link>
                </li>
                <li>
                  <Link to="/">Developer Agreement</Link>
                </li>
              </ul>
            </div>
            <div className="col-2 col-md-6 col-xs-11">
              <ul className="menu-list">
                <h4>NAVIGATE</h4>
                <li>
                  <Link to="/">Advertisers</Link>
                </li>
                <li>
                  <Link to="/">Developers</Link>
                </li>
                <li>
                  <Link to="/">Resources</Link>
                </li>
                <li>
                  <Link to="/">Company</Link>
                </li>
                <li>
                  <Link to="/">Connect</Link>
                </li>
              </ul>
            </div>
            <div className="col-3 col-md-6 col-xs-11">
              <ul className="menu-list">
                <h4>CONTACT US</h4>
                <li>
                  Mailing Address:xx00 E. Union Ave Suite 1100. Denver, CO 80237
                </li>
                <li>+999 90932 627</li>
                <li>support@yourdomain.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer