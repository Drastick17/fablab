import { Link } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import style from "./style.module.css";
import MenuMobile from "./MenuMobile";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

export type LinkType = {
  link?: string;
  label?: string;
};

export default function HeaderNav() {
  const { user } = useContext(UserContext);
  return (
    <header className={style.header}>
      <Link to={user?.homePage ?? ""}>
        <img className={style.logo} src="/img/logo-withoutbg.png" />
      </Link>
      <MenuComponent />
      <MenuMobile/>
    </header>
  );
}
