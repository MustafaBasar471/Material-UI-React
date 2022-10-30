import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import USERLIST from "./User";
import AddTask from "../Task/AddTask";
import AddTaskDetails from "../Task/AddTaskDetails";
import UserTasks from "./UserTask";
import AlertComponent from "../alerts/AlertComponent";

const UserPage = () => {
  const [pageSize, setPageSize] = useState(5);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [alertPopUp, setAlertPopUp] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const columns = [
    {
      field: "avatarUrl",
      headerName: "Avatar",
      width: 70,
      renderCell: (params) => <Avatar src={params.row.avatarUrl} />,
      sortable: false,
      filterable: false,
    },
    { field: "name", headerName: "Name", width: 170 },
    {
      field: "role",
      headerName: "Role",
      width: 170,
    },
    { field: "task", headerName: "Task", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      type: "singleSelect",
      valueOptions: ["Todo", "In Progress", "Done"],
      editable: true,
    },
    {
      field: "created_at",
      headerName: "Created At",
      width: 200,
      renderCell: (params) =>
        moment(params.row.created_at).format("YYYY-MM-DD HH:MM:SS"),
    },
    { field: "id", headerName: "ID", width: 150 },
  ];

  const handleCheckBoxClick = (id) => {
    let isChecked_;
    USERLIST.forEach((data) => {
      if (id === data.id) {
        isChecked_ = data.isChecked;
        data.isChecked = !isChecked_;
      }
    });
    setSelectedUser(USERLIST.filter((data) => data.isChecked === true));
  };

  return (
    <>
      <Container>
        {alertPopUp && <AlertComponent />}
        <Box sx={{ height: 400, width: "full" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h4" sx={{ mt: 3, mb: 3 }}>
              Track your Task
            </Typography>
            <Button variant="contained" onClick={() => setOpenPopUp(true)}>
              Add New Task
            </Button>
          </Box>
          <DataGrid
            columns={columns}
            rows={USERLIST}
            getRowId={(row) => row.id}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            getRowSpacing={(params) => ({
              top: params.isFirstVisible ? 0 : 5,
              bottom: params.isLastVisible ? 0 : 5,
            })}
            checkboxSelection
            onCellClick={(e) => handleCheckBoxClick(e.id)}
          />
        </Box>
        <AddTask openPopup={openPopUp} setOpenPopUp={setOpenPopUp}>
          <AddTaskDetails
            setOpenPopUp={setOpenPopUp}
            setAlertPopUp={setAlertPopUp}
          />
        </AddTask>
        <Box sx={{ marginTop: "8rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Task your choose</Typography>
            {selectedUser.length !== 0 && (
              <Typography variant="subtitle1">
                {selectedUser.length} User Selected
              </Typography>
            )}
          </Box>
          {selectedUser.length === 0 ? (
            <Typography
              textAlign="center"
              sx={{ borderBottom: "1px solid #000", paddingBottom: "3rem" }}
            >
              No One Selected
            </Typography>
          ) : (
            <Grid
              container
              spacing={2}
              sx={{
                gap: "1rem",
                borderBottom: "1px solid #000",
                paddingY: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              {selectedUser.map((userData, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                >
                  <img
                    src={userData.avatarUrl}
                    alt="userdataProfile"
                    style={{ borderRadius: "50%" }}
                  />
                  <Stack>
                    <Typography
                      key={idx}
                      variant="subtitle1"
                      sx={{ marginLeft: "1.2rem" }}
                    >
                      Name : {userData.name}
                    </Typography>
                    <Typography
                      key={idx}
                      variant="subtitle1"
                      sx={{ marginLeft: "1.2rem" }}
                    >
                      Task : {userData.task}
                    </Typography>
                    <Button sx={{ marginX: "auto" }}>Task Details</Button>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
        <UserTasks />
      </Container>
    </>
  );
};

export default UserPage;
