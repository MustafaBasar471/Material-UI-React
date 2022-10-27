import React, { useState } from "react";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import USERLIST from "./User";
import AddTask from "../Task/AddTask";
import AddTaskDetails from "../Task/AddTaskDetails";
import UserTasks from "./UserTask";

const UserPage = () => {
  const [pageSize, setPageSize] = useState(5);
  const [openPopUp, setOpenPopUp] = useState(false);
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
      type: "boolean",
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

  return (
    <>
      <Container>
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
          />
        </Box>
        <AddTask openPopup={openPopUp} setOpenPopUp={setOpenPopUp}>
          <AddTaskDetails />
        </AddTask>
        <UserTasks />
      </Container>
    </>
  );
};

export default UserPage;
