import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({
  children,
  rol,
}: {
  children: React.ReactNode;
  rol?: string;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
