import { Link } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import style from "./style.module.css";
import MenuMobile from "./MenuMobile";

export type LinkType = {
  link?: string;
  label?: string;
};

export default function HeaderNav({ navigations }: { navigations: LinkType[] }) {
  return (
    <header className={style.header}>
      <Link to={"/home"}>
        <img className={style.logo} src="/img/logo-withoutbg.png" />
      </Link>
      <MenuComponent navigations={navigations} />
      <MenuMobile navigations={navigations} />
    </header>
  );
}
