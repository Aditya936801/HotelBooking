import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import "./homeScreen.css";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import Cities from "./miniComponent/Cities";



const HomeScreen = () => {
  return (
    <div className="home-screen-container">
      <Toolbar />
      <Box
        sx={{ borderColor: (theme) => theme.palette.primary.main }}
        className="home-screen-search"
      >
        <BedroomParentIcon color="primary" />
        <div>Where Do You Want To Visit ?</div>
      </Box>
      <Typography className="home-screen-heading">Popular Cities</Typography>
      <div className="home-screen-popular-city-container">
        <Cities/>
      </div>
    </div>
  );
};

export default HomeScreen;
