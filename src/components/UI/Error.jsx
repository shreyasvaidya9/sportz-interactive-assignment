import { Paper, Typography } from "@mui/material";

const Error = ({ message }) => {
  return (
    <Paper sx={{ p: 3 }} elevation={0}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", fontSize: 32 }}
        gutterBottom
      >
        {message}
      </Typography>
    </Paper>
  );
};

export default Error;
