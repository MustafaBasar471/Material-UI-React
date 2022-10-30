import React from "react";
import { Grid, Typography } from "@mui/material";
import AppCart from "./AppCart";

const Dashboard = () => {
  const data = [
    {
      title: "Your Tasks",
      link: "my_task",
      color: "#D1E9FC",
    },
    {
      title: "Assign Task",
      link: "my_task",
      color: "#D0F2FF",
    },
    {
      title: "NewsPaper",
      link: "newspaper",
      color: "#FFF7CD",
    },
  ];
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", marginTop: "2rem" }}>
        Dashboard
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        {data.map((item, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={2}>
            <AppCart data={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
