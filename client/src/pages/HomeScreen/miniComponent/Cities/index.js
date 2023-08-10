import React from "react";
import { Box, Typography } from "@mui/material";
import "./cities.css";
import { Grid } from "@mui/material";
import { POPULAR_CITIES } from "../../utility";

const Cities = () => {
  return (
    <Grid container spacing={2}>
      {POPULAR_CITIES?.map((el) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="card-wrapper">
              <img className="card-image" src={el.image} alt="loading..." />
              <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
                {el.name} 
              </Typography>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cities;
// <Box boxShadow={3} width="100px" >
// sd
// </Box>
