import React from "react";
import { Card, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AppCart = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 2,
        textAlign: "center",
        borderRadius: "20px",
        backgroundColor: data.color,
      }}
    >
      <Typography variant="h5">{data.title}</Typography>
      <Button
        variant="subtitle2"
        sx={{ opacity: 0.72, marginTop: "5px" }}
        onClick={() => navigate(`/${data.link}`)}
      >
        Go this page
      </Button>
    </Card>
  );
};

export default AppCart;
