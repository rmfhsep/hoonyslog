import React from "react";
import Link from "next/link";
import style from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <Link href={"/"} className={style.container}>
        <div>Hoonys log</div>
        <div>About</div>
      </Link>
    </header>
  );
};

export default Header;
