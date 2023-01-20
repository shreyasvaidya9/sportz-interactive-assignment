import { Stack, CardContent, CardMedia, Typography, Card } from "@mui/material";

import UpcomingMatch from "./UpcomingMatch";

const Player = ({ playerDetails }) => {
  const { PFName, TName, Value, Id, UpComingMatchesList, SkillDesc } =
    playerDetails;
  const { CCode, VsCCode, MDate } = UpComingMatchesList[0];

  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        height="280"
        image={`/player-images/${Id}.jpg`}
        alt={PFName}
      />
      <CardContent>
        <Typography variant="h6" component="h6">
          {PFName}
        </Typography>
        <Typography sx={{ fontSize: 14, mb: 2 }}>{TName}</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: 900 }}>
            {SkillDesc}
          </Typography>
          <Typography sx={{ fontSize: 14, fontWeight: "900" }}>
            $ {Value}
          </Typography>
        </Stack>
        <UpcomingMatch currentCode={CCode} vsCode={VsCCode} matchDate={MDate} />
      </CardContent>
    </Card>
  );
};

export default Player;
