import "./sec1.css";
import f1 from "../../media/f1.png";
import f2 from "../../media/f2.png";
import f3 from "../../media/f3.png";
import f4 from "../../media/f4.png";
import f5 from "../../media/f5.png";
import f6 from "../../media/f6.png";
import f7 from "../../media/f7.png";
import f8 from "../../media/f8.png";
import f9 from "../../media/f9.png";
import { useEffect, useState } from "react";
import React from "react";
import WOW from "wowjs";

function Sec1() {
  const menu = [
    {
      img: f1,
      title: "Delicious Pizza",
      descrption:
        "Veniam Debitis Quaerat Officiis Quasi Cupiditate Quo, Quisquam Velit, Magnam Voluptatem Repellendus Sed Eaque",
      price: "$20",
      category: "Pizza",
    },
    {
      img: f2,
      title: "Delicious Burger",
      descrption:
        "Veniam Debitis Quaerat Officiis Quasi Cupiditate Quo, Quisquam Velit, Magnam Voluptatem Repellendus Sed Eaque",
      price: "$15",
      category: "Burger",
    },
    {
      img: f3,
      title: "Delicious Pizza",
      descrption:
        "Veniam Debitis Quaerat Officiis Quasi Cupiditate Quo, Quisquam Velit, Magnam Voluptatem Repellendus Sed Eaque",
      price: "$17",
      category: "Pizza",
    },
    {
      img: f4,
      title: "Delicious Pasta",
      descrption:
        "Veniam Debitis Quaerat Officiis Quasi Cupiditate Quo, Quisquam Velit, Magnam Voluptatem Repellendus Sed Eaque",
      price: "$18",
      category: "Pasta",
    },
    {
      img: f5,
      title: "French Fries",
      descrption:
        "Veniam Debitis Quaerat Officiis Quasi Cupiditate Quo, Quisquam Velit, Magnam Voluptatem Repellendus Sed Eaque",
      price: "$10",
      category: "Fries",
    },
    {
      img: f6,
      title: "Delicious Pizza",
      descrption:
        "Veniam Debitis Quaerat Officiis Quasi Cupiditate Quo, Quisquam Velit, Magnam Voluptatem Repellendus Sed Eaque",
      price: "$15",
      category: "Pizza",
    },
    {
      img: f7,
      title: "Tasty Burger",
      descrption:
        "Veniam Debitis Quaerat Officiis Quasi Cupiditate Quo, Quisquam Velit, Magnam Voluptatem Repellendus Sed Eaque",
      price: "$12",
      category: "Burger",
    },
    {
      img: f8,
      title: "Tasty Burger",
      descrption:
        "Veniam Debitis Quaerat Officiis Quasi Cupiditate Quo, Quisquam Velit, Magnam Voluptatem Repellendus Sed Eaque",
      price: "$14",
      category: "Burger",
    },
    {
      img: f9,
      title: "Delicious Pasta",
      descrption:
        "Veniam Debitis Quaerat Officiis Quasi Cupiditate Quo, Quisquam Velit, Magnam Voluptatem Repellendus Sed Eaque",
      price: "$10",
      category: "Pasta",
    },
  ];

  const [filter, setFilter] = useState(menu);

  const filterProduct = (cat) => {
    const listProducts = menu.filter((x) => x.category === cat);
    setFilter(listProducts);
  };

  useEffect(() => {
    let list_menu = document.querySelectorAll(".list_menu li");

    const activeListMenu = (e) => {
      for (let i = 0; i < list_menu.length; i++) {
        if (list_menu[i].classList.contains("list_active")) {
          list_menu[i].classList.remove("list_active");
        }
      }
      e.target.classList.add("list_active");
    };

    for (let i = 0; i < list_menu.length; i++) {
      list_menu[i].addEventListener("click", activeListMenu);
    }
  }, []);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="sec1">
      <div className="container">
        <div className="header_sec1 text-center">
          <h2>Our Menu</h2>
          <ul className="list_menu">
            <li className="list_active" onClick={() => setFilter(menu)}>
              all
            </li>
            <li id="Burger" onClick={() => filterProduct("Burger")}>
              Burger
            </li>
            <li id="Pizza" onClick={() => filterProduct("Pizza")}>
              Pizza
            </li>
            <li id="Pasta" onClick={() => filterProduct("Pasta")}>
              Pasta
            </li>
            <li id="Fries" onClick={() => filterProduct("Fries")}>
              Fries
            </li>
          </ul>
        </div>

        <div className="all_box_sec1">
          <div className="row">
            {filter.map((i) => (
              <div className="col-lg-4 col-md-6 col-sm-12 wow animate__fadeInUp">
                <div className="box_sec1">
                  <div className="img_sec1">
                    <img src={i.img} />
                  </div>

                  <div class="text_sec1">
                    <h4>{i.title}</h4>
                    <p class="p_box_top_sec1">{i.descrption}</p>
                    <div class="icons_box_sec1">
                      <p>{i.price}</p>
                      <span>
                        <i class="fa-solid fa-cart-shopping"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="btn_sec1">
          <button className="btn_main">View More</button>
        </div>
      </div>
    </div>
  );
}

export default Sec1;
