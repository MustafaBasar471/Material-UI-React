import {
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  Button,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";

const AddTaskDetails = ({ setOpenPopUp, setAlertPopUp }) => {
  const [personName, setPersonName] = useState([]);
  const [value, setValue] = useState(null);
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  // Style
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newTask = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      person: personName,
      date: value,
    };
    setFormData([...formData, newTask]);
    setOpenPopUp(false);
    setAlertPopUp(true);
    setInterval(() => {
      setAlertPopUp(false);
    }, 3000);
  };

  return (
    <form onSubmit={(e) => handleSubmitForm(e)}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          paddingBottom: "2rem",
          paddingTop: "1rem",
        }}
        gap={3}
      >
        <Grid
          xs={{ xs: 1 }}
          sx={{ display: "flex", flexDirection: "column" }}
          gap={2}
        >
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            name="title"
            label="Task Title"
            variant="outlined"
            autoComplete="off"
          />

          <TextField
            sx={{ width: 300 }}
            label="Task Details"
            name="desc"
            variant="outlined"
          />
        </Grid>
        <Grid
          xs={{ xs: 1 }}
          sx={{ display: "flex", flexDirection: "column" }}
          gap={2}
        >
          <FormControl sx={{ width: 300 }}>
            <InputLabel>Assign to</InputLabel>
            <Select
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Assign to" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              required
              label="Choose end date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button
            type="submit"
            variant="contained"
            sx={{ alignSelf: "flex-end", width: 150 }}
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTaskDetails;
