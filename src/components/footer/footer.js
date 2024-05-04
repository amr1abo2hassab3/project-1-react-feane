import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm12">
              <div className="all_footer_top">
                <div className="footer_contact">
                  <div className="header_footer_top">
                    <h2>Contact Us</h2>
                  </div>
                  <div className="links_contact">
                    <div>
                      <i className="fa-solid fa-location-dot"></i>
                      <p className="footer_contact_p">location</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-phone"></i>
                      <p className="footer_contact_p">call +01 1234567890</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-envelope"></i>
                      <p className="footer_contact_p">demo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm12">
              <div className="all_footer_social">
                <div className="header_footer_top">
                  <h2>feane</h2>
                </div>

                <div className="social_p">
                  <p>
                    Necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words,
                    combined with
                  </p>
                </div>

                <div className="social_Icons_footer">
                  <div>
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-pinterest"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm12">
              <div className="all_footer_right">
                <div className="header_footer_top">
                  <h2>Contact Us</h2>
                </div>
                <div className="text_footer_right">
                  <p>Everyday</p>
                  <p>10.00 Am -10.00 Pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text_footer_bottom">
            <p>© 2024 All Rights Reserved By Free Html Templates</p>
            <p>© Distributed By ThemeWagon</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
