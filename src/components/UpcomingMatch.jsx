import { Paper, Typography } from "@mui/material";

const getFormattedDate = (date) => {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Update the values as per the required format
  const secondsString = seconds < 10 ? `0${seconds}` : seconds.toString();
  const minutesString = minutes < 10 ? `0${minutes}` : minutes.toString();
  const hoursString = hours < 10 ? `0${hours}` : hours.toString();
  const dayString = day < 10 ? `0${day}` : day;
  const monthString = month < 10 ? `0${month}` : month;
  const amOrPm = hours < 12 ? "AM" : "PM";

  return `${dayString}-${monthString}-${year} ${hoursString}:${minutesString}:${secondsString} ${amOrPm}`;
};

const UpcomingMatch = ({ currentCode, vsCode, matchDate }) => {
  return (
    <Paper elevation={0} sx={{ mt: 1, mb: 1 }}>
      <Typography
        sx={{ fontSize: 14, fontWeight: "bold" }}
        color="text.secondary"
        gutterBottom
      >
        Upcoming Match:
      </Typography>
      {currentCode && vsCode && matchDate ? (
        <>
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontSize: 14, fontWeight: "bold" }}
          >
            {currentCode} vs {vsCode}
          </Typography>
          <Typography variant="h6" component="h6" sx={{ fontSize: 14 }}>
            Date: {getFormattedDate(new Date(matchDate))}
          </Typography>
        </>
      ) : (
        <>
          <Typography sx={{ fontSize: 14 }}>No Match Scheduled</Typography>
          <Typography variant="h6" component="h6" sx={{ fontSize: 14 }}>
            Date: -
          </Typography>
        </>
      )}
    </Paper>
  );
};

export default UpcomingMatch;
