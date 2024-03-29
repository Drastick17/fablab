/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../store/UserContext";
import style from "./style.module.css";

export default function MenuMobile() {
  const { resetUser, user } = useContext(UserContext);
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
    <div className={style.mobilMenu}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<FaBars color="#fff" />}
      />
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
          onClick={() => handleClose("")}
          hidden={!user?.isAdmin}
          href="/admin"
        >
          Panel de administrador
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("")}
          hidden={!user?.isAdmin}
          href="/admin"
        >
          Agendar
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose("logout");
          }}
        >
          Cerrar Sesión
        </MenuItem>
      </Menu>
    </div>
  );
}
