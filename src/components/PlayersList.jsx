import { Box, Grid, Typography } from "@mui/material";

import Player from "./Player";

const PlayersList = ({ players }) => {
  // Display the No Players Found message if the search term matched no players
  if (!players.length) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ textAlign: "center" }} gutterBottom>
          No Players Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {players.map((player) => {
          const { Id } = player;
          return (
            <Grid item xs={12} sm={6} md={3} width="100%" key={Id}>
              <Player playerDetails={player} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PlayersList;
