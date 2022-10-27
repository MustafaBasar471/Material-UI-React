import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const AddTask = ({ children, openPopup, setOpenPopUp }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      open={openPopup}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h4">
          Add Task Section
        </Typography>
        <Button variant="contained" onClick={() => setOpenPopUp(false)}>
          X
        </Button>
      </DialogTitle>
      <DialogContent sx={{ borderBottom: "0.1px solid #e5e5e5e5" }}>
        <Typography variant="subtitle1">
          Fill in the required fields to create a task and assign the tasks you
          create to employees
        </Typography>
      </DialogContent>
      {children}
    </Dialog>
  );
};

export default AddTask;
