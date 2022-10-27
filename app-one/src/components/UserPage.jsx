import React, { useMemo, useState } from "react";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import USERLIST from "./User";

const UserPage = () => {
  const [pageSize, setPageSize] = useState(5);
  const columns = useMemo(() => [
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
    { field: "id", headerName: "ID", width: 200 },
  ]);
  return (
    <Container>
      <Box sx={{ height: 400, width: "full" }}>
        <Typography variant="h4" component="h4" sx={{ mt: 3, mb: 3 }}>
          Track your Task
        </Typography>
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
        />
      </Box>
    </Container>
  );
};

export default UserPage;
