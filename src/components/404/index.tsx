import { Link } from "react-router-dom";
import styles from "./style.module.css"; // Importa los estilos CSS Modules

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>Oops! Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <div className={styles.imageContainer}>
        <img
          src="https://th.bing.com/th/id/R.0d1329f5ff7d31712e3d12ce160df6ec?rik=I4zzFS%2boujobJA&pid=ImgRaw&r=0"
          alt="404 Error"
        />
        <Link to="/">Volver a la página de inicio</Link>
      </div>
    </div>
  );
}
