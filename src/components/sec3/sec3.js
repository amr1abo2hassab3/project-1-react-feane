import "./sec3.css";
import { Link } from "react-router-dom";

const Sec3 = () => {
  return (
    <div>
      <section class="sec3">
        <div class="container">
          <div class="header_sec3">
            <h2>Book A Table</h2>
          </div>

          <div className="row sec3_row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="all_form_sec3">
                <div className="form_sec3">
                  <form action="">
                    <div>
                      <input type="text" placeholder="your name" />
                    </div>
                    <div>
                      <input type="number " placeholder="phone number " />
                    </div>
                    <div>
                      <input type="email" placeholder="your email" />
                    </div>
                    <div>
                      <input type="number" placeholder="how many person ?" />
                    </div>
                    <div>
                      <input type="date" placeholder="" />
                    </div>
                  </form>
                </div>

                <div className="btn_sec3">
                  <button className="btn_main">book now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="map_sec3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d756.0582611751925!2d-74.005737!3d40.712886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a221033756f%3A0xfd3ae0851a438f14!2sServicios%20Gael%20SA!5e0!3m2!1sar!2seg!4v1704485888144!5m2!1sar!2seg"
                  width="600"
                  height="450"
                ></iframe>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec3;
