import { Link } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import style from "./style.module.css";
import MenuMobile from "./MenuMobile";

export default function HeaderNav({ hidden }: { hidden: boolean }) {
  return (
    <section hidden={hidden}>
      <header className={style.header}>
        <Link to={"/home"}>
          <img className={style.logo} src="/img/logo-withoutbg.png" />
        </Link>
        <MenuComponent />
        <MenuMobile />
      </header>
    </section>
  );
}
