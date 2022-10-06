import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export const AlertFailure = ({ message }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">{message}</Alert>
    </Stack>
  );
};

export const AlertSuccess = ({ message }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">{message}</Alert>
    </Stack>
  );
};

export const AlertInfo = ({ message }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info">{message}</Alert>
    </Stack>
  );
};
