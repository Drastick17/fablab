import { Avatar, Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../store/UserContext";
import style from "./style.module.css";

export default function MenuComponent() {
  const { resetUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (action: string) => {
    if (action === "profile") {
      navigate("/profile");
    }
    if (action === "logout") {
      resetUser?.();
      window.localStorage.removeItem("token");
      navigate("/");
    }
    setAnchorEl(null);
  };
  return (
    <nav className={style.menu}>
      <Link to="/home" className={style.menuLi}>
        Agendas
      </Link>
      <Link to="/services" className={style.menuLi}>
        Servicios
      </Link>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose("profile");
            }}
          >
            Mi perfil
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("logout");
            }}
          >
            Cerrar Sesión
          </MenuItem>
        </Menu>
      </Box>
    </nav>
  );
}
