import React from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";
import css from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={css.header}>
      {/* logo  */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Tasty Bites</span>
      </div>
      {/* menu side */}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
      {/* right side */}
      <div className={css.rightSide}>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2E2E2E" />
          <div className={css.badge}>1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
