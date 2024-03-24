import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";

export default function Layout({
  children,
  rol,
}: {
  children: React.ReactNode;
  rol?: string;
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, refreshUser } = useContext(UserContext);

  useEffect(() => {
    if (user?.id && pathname === "/") {
      setTimeout(() => navigate("/services"), 200);
    }
  }, [user, pathname, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  useEffect(() => {

    if(window.localStorage.getItem('token-fablab')){
      refreshUser?.();
    }
  }, []);

  return (
    <AnimatePresence key={pathname}>
      <motion.section
        key="layout"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <main
          style={{
            alignItems: !rol ? "center" : "start",
            justifyContent: "center",
          }}
          className="layoutMain"
        >
          {children}
        </main>
      </motion.section>
    </AnimatePresence>
  );
}
