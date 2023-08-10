import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { AUTH_ROUTE } from "./navigation/routes/authRoutes";
import { APP_ROUTE } from "./navigation/routes/appRoutes";
import UserLogin from "./pages/Login/UserLogin";
import HomeScreen from "./pages/HomeScreen";
import Navbar from "./components/Navbar";
import UnprotectedRoutes from "./navigation/UnprotectedRoutes";
const HotelSearch = React.lazy(()=>import("./pages/HotelSearch"))


const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d2164d",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route
            path={AUTH_ROUTE.userLogin}
            element={
              <UnprotectedRoutes>
                <UserLogin />
              </UnprotectedRoutes>
            }
          />
          <Route path={APP_ROUTE.searchHotel} element={<HotelSearch />} />

          <Route element={<Navbar />}>
            <Route path={APP_ROUTE.homeScreen} element={<HomeScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
