import React from "react";
import Image from "next/image"; //s
import css from "../styles/Hero.module.css";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";
import Pizza1 from "../assets/p1.jpg";
import { UilPhone } from "@iconscout/react-unicons";
const Hero = () => {
  return (
    <div className={css.container}>
      {/* left */}
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More than Faster</span>
          <Image priority src={Cherry} alt="cherry" width={40} height={25} />
        </div>
        <div className={css.heroText}>
          <span>Be the Fastest</span>
          <span>In Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
          </span>
        </div>
        <span className={css.miniText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          quisquam molestias? Aut facere enim odio quae velit at repudiandae
          maxime alias vero recusandae?
        </span>
        <button className={`btn ${css.btn}`}>Try Pizza!</button>
      </div>
      {/* right */}
      <div className={css.rightSide}>
        <div className={css.ImageContainer}>
          <Image
            priority
            src={HeroImage}
            alt="HeroImage priority"
            layout="intrinsic"
          />
        </div>
        <div className={css.contactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>
        <div className={css.pizza}>
          <div>
            <Image
              priority
              src={Pizza1}
              alt="pizza"
              objectFit="cover"
              layout="intrinsic"
            />
          </div>
          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> 7.49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
