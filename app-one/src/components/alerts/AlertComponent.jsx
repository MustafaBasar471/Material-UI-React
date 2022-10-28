import { Stack, Alert, AlertTitle } from "@mui/material";

const AlertComponent = () => {
  return (
    <Stack spacing={2}>
      <Alert variant="filled" severity="success">
        <AlertTitle>Success</AlertTitle>
        Task successfully added
      </Alert>
    </Stack>
  );
};

export default AlertComponent;
