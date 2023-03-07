import React from "react";
import css from "../styles/Services.module.css";
import ServicesData from "./ServicesData";
const data_Services = [
  {
    id: 1,
    img: "https://i.imgur.com/EDKC396.png",
    content1: "lsjdfjs dnfhjsdf shdfkjs",
    content2: "lsjdfjs dnfhjsdf shdfkjs",
  },
  {
    id: 2,
    img: "https://i.imgur.com/Mu1kUJa.png",
    content1: "lsjdfjs dnfhjsdf shdfkjs",
    content2: "lsjdfjs dnfhjsdf shdfkjs",
  },
  {
    id: 3,
    img: "https://i.imgur.com/HYtJqeL.png",
    content1: "lsjdfjs dnfhjsdf shdfkjs",
    content2: " lsjdfjs dnfhjsdf shdfkjs",
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
        <div className={css.feature}>
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
      </div>
    </>
  );
};

export default Services;
