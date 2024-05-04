import "./sec4.css" ;
import client1 from "../../media/client1.jpg" ;
import client2 from "../../media/client2.jpg" ;

const Sec4 = () => {
    return(
        <div>
<section className="sec4">
        <div className="container">
            <div className="header_sec4">
                <h2>What Says Our Customers</h2>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="all_sec4">
                        <div className="text_sec4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam</p>
                            <h5>Mike Hamell</h5>
                            <p>magna aliqua</p>
                        </div>

                        <div className="img_sec4">
                            <img src={client1} alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="all_sec4">
                        <div className="text_sec4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam</p>
                            <h5>Mike Hamell</h5>
                            <p>magna aliqua</p>
                        </div>

                        <div className="img_sec4">
                            <img src={client2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="left_and_right_sec4">
                <div className="arrow_left arrow_sec4">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className="arrow_right arrow_sec4">
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>

        </div>
    </section>
        </div>
    )
}

export default Sec4 ;