import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../store/UserContext";
import styles from "./style.module.css"; // Importa los estilos CSS Modules
export default function NotFound() {
  const navigate = useNavigate()
  const {user} = useContext(UserContext) 
  useEffect(() =>{setTimeout(
    () =>{
      navigate(user?.homePage ?? '/')
    },1000
  )},[navigate]
  )
  return (
    <motion.div
      initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={styles.notFound}
    >
      <h1>Oops! Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <div className={styles.imageContainer}>
        <img
          src="https://th.bing.com/th/id/R.0d1329f5ff7d31712e3d12ce160df6ec?rik=I4zzFS%2boujobJA&pid=ImgRaw&r=0"
          alt="404 Error"
        />
      </div>
    </motion.div>
  );
}
