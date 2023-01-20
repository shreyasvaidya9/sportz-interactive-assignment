import { Box, TextField, Typography, Paper } from "@mui/material";

const SearchForm = ({ searchTerm, updateSearchTerm }) => {
  return (
    <Paper elevation={0} sx={{ p: 1, mt: 2, mb: 2 }}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", fontSize: 32 }}
        gutterBottom
      >
        Players List
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch", textAlign: "center" },
          textAlign: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search Player or Team"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => updateSearchTerm(e.target.value)}
        />
      </Box>
    </Paper>
  );
};

export default SearchForm;
