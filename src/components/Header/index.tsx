import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

export default function HeaderNav() {
  const context = useContext(UserContext);
  return (
    <header className={style.header}>
      <Link to={"/home"}>
        <img className={style.logo} src="/public/img/logo-withoutbg.png" />
      </Link>

      <nav className={style.menu}>
        <Link to="/home" className={style.menuLi}>
          Acerca de FabLab
        </Link>
        <Link to="/services" className={style.menuLi}>
          Servicios
        </Link>
        <Link to="/" className={style.menuLi}>
          Ubicacion
        </Link>
      </nav>
    </header>
  );
}
