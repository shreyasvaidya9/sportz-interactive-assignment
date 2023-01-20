import {
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Skeleton,
} from "@mui/material";

const PlayersSkeleton = () => {
  return (
    <Paper sx={{ p: 3 }} elevation={0}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", fontSize: 32 }}
        gutterBottom
      >
        Loading Players
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {Array.from(new Array(8)).map((item, index) => (
          <Grid item xs={12} sm={6} md={3} width="100%" key={index}>
            <Card variant="outlined">
              <Skeleton variant="rectangular" height={200} />
              <CardContent>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Skeleton height={30} />
                  <Skeleton width="30%" />
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Skeleton />
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Skeleton width="50%" />
                  <Skeleton width="40%" />
                  <Skeleton width="80%" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default PlayersSkeleton;
