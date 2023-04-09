import React from "react";
import css from "../styles/Services.module.css";
import Image from "next/image";
const ServicesData = ({ id, img, content1, content2 }) => {
  return (
    <>
      <div className={css.feature}>
        <div className={css.ImageWrapper} key={id}>
          <Image
            priority
            src={img}
            width={120}
            height={120}
            alt="image"
            objectFit="cover"
            layout="intrinsic"
          />
        </div>
        <span>{content1}</span>
        <span>{content2}</span>
      </div>
    </>
  );
};

export default ServicesData;
