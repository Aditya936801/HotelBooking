import "./app.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, createTheme,ThemeProvider } from "@mui/material";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d2164d",
      },
    },
  });
  return (
    <ThemeProvider default={theme} >
    <BrowserRouter>
    <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={<div></div>}
          />
  
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;