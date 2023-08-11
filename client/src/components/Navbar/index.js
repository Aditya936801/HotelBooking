import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { getToken } from "../../store/auth/authSelector";
import { APP_ROUTE } from "../../navigation/routes/appRoutes";
import { setLogout } from "../../store/auth/authReducer";
import { Outlet } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  const token = useSelector(getToken);
  const isAuth = token !== "";
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(setLogout());
  };

  const handleNavigate=()=>{
    navigate(APP_ROUTE.homeScreen)
  }

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} onClick={handleNavigate} >
            ZBook
          </Typography>
          <div className={"nav-links"}>
            <NavLink className="nav-link-text" to={APP_ROUTE.myBookings}>
              My Bookings
            </NavLink>

            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={handleLogout}
            >
              logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Outlet />
    </div>
  );
};

export default Navbar;
