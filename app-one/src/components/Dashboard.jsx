import React from "react";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import { faker } from "@faker-js/faker";
import AppNewsUpdate from "./AppNewsUpdate";
import AppOrderTimeline from "./AppOrderTimeline";

const Dashboard = () => {
  return (
    <>
      <Container maxWidth="3xl" style={{ marginTop: "4.3rem" }}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome Back
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Task Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  "Ethan S. - Bootcamp Director (New Task)",
                  "Barry M. Finished Task - User Login Errors",
                  "Mustafa Basar has Joined",
                  "New order placed #XF-2356",
                  "New order placed #XF-2346",
                ][index],
                type: `order${index + 1}`,
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
