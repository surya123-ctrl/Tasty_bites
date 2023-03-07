import React from "react";
import css from "../styles/Services.module.css";
import ServicesData from "./ServicesData";
const data_Services = [
  {
    id: 1,
    img: "https://i.imgur.com/EDKC396.png",
    content1: "Easy to Order",
    content2: "You only need a few steps in food ordering.",
  },
  {
    id: 2,
    img: "https://i.imgur.com/Mu1kUJa.png",
    content1: "Easy to Order",
    content2: "Delivery that is always on time, even faster.",
  },
  {
    id: 3,
    img: "https://i.imgur.com/HYtJqeL.png",
    content1: "Easy to Order",
    content2: "Not only fast for us, quality is also number one.",
  },
];

const Services = () => {
  return (
    <>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
      </div>
      {/* features */}
      <div className={css.services}>
        {data_Services.map(({ id, img, content1, content2 }) => {
          return (
            <ServicesData
              id={id}
              img={img}
              content1={content1}
              content2={content2}
            />
          );
        })}
      </div>
    </>
  );
};

export default Services;
