import "./sec2.css";
import aboutImg from "../../media/about-img.png";

const Sec2 = () => {
  return (
    <div className="">
      <section class="sec2">
        <div class="container">
          <div class="row all_sec2">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="img_sec2">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="text_sec2">
                <h2>We Are Feane</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <button className="btn_main">read more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec2;
