import React from "react";
import { UilFacebook, UilGithub, UilInstagram } from "@iconscout/react-unicons";
import css from "../styles/Footer.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHTS ARE RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={35} />
        <UilGithub size={35} />
        <UilInstagram size={35} />
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Tasty Bites</span>
      </div>
    </div>
  );
};

export default Footer;
