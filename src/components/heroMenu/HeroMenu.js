import React from "react";
import "./heroMenu.css";
import o1 from "../../media/o1.jpg";
import o2 from "../../media/o2.jpg";

function HeroMenu() {
  return (
    <div>
      <div className="hero_menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="all_Element_hero">
                <div className="img_hero_menu">
                  <img src={o1} />
                </div>

                <div className="text_hero_menu">
                  <h2>Tasty Thursdays</h2>
                  <p>
                    20% <span>off</span>
                  </p>
                  <button className="btn_main">
                    order now{" "}
                    <span>
                      <i class="fa-solid fa-cart-shopping"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="all_Element_hero">
                <div className="img_hero_menu">
                  <img src={o2} />
                </div>

                <div className="text_hero_menu">
                  <h2>Pizza Days</h2>
                  <p>
                    15% <span>off</span>
                  </p>
                  <button className="btn_main">
                    order now{" "}
                    <span>
                      <i class="fa-solid fa-cart-shopping"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMenu;
