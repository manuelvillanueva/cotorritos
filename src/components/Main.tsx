import { Link } from "gatsby";
import * as React from "react";
import * as style from "./Main.module.css";

export default function Main({ menus }: any) {
  return (
    <section className={style.section}>
      <Link className="link-button" to="/alimentos">
        <button className="menu-button">Menú</button>
      </Link>
      {menus.map((menu: any) => {
        return (
          <div>
            <img src={menu.carta.url} alt="" className={style.image} />
          </div>
        );
      })}
      <div className="grid-container-icons">
        {/* <img src={mariscoses.carta.url} alt="" /> */}
        <a
          className="link-scl"
          href="https://www.facebook.com/cotorritoscdmx"
          target="_blank"
        >
          {/* <img className="menu-scl" alt="" src={fb} /> */}
        </a>
        <a
          className="link-scl"
          href="https://www.instagram.com/cotorritos_cdmx"
          target="_blank"
        >
          {/* <img className="menu-scl" alt="" src={ins} /> */}
        </a>
        <Link to="/cotorreo">
          {/* <img className="menu-cotorreo" alt="" src={cotorreo} /> */}
        </Link>
        <Link className="link-img" to="/en">
          {/* <img className="menu-img" alt="" src={us} /> */}
        </Link>
      </div>
    </section>
  );
}
