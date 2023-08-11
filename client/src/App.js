import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { AUTH_ROUTE } from "./navigation/routes/authRoutes";
import { APP_ROUTE } from "./navigation/routes/appRoutes";
import UserLogin from "./pages/Login/UserLogin";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import UnprotectedRoutes from "./navigation/UnprotectedRoutes";
import CustomSnackbar from "./components/CustomSnackBar";
const HomeScreen = React.lazy(() => import("./pages/HomeScreen"));
const HotelSearch = React.lazy(() => import("./pages/HotelSearch"));
const BookHotel = React.lazy(() => import("./pages/BookHotel"));

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
         

          <Route element={<Navbar />}>
            <Route
              path={APP_ROUTE.homeScreen}
              element={
                <Suspense fallback={<Loader/>}>
                  <HomeScreen />  
                </Suspense>
              }
            />
            <Route
            path={APP_ROUTE.searchHotel}
            element={
              <Suspense fallback={<Loader/>}>
                <HotelSearch />
              </Suspense>
            }
          />
            <Route
            path={APP_ROUTE.bookHotel}
            element={
              <Suspense fallback={<Loader/>}>
                <BookHotel />
              </Suspense>
            }
          />
          </Route>
        </Routes>
      </BrowserRouter>
      <CustomSnackbar />
    </ThemeProvider>
  );
};

export default App;
