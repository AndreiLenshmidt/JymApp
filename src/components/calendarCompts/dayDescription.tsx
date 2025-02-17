import { Typography } from "@mui/material";

export default function DayDescription({
  date,
  status,
  traidingName,
  info,
}: {
  date?: Date;
  status?: string;
  traidingName?: string;
  info?: string;
}) {
  return (
    <div>
      <Typography component="p">{date?.toDateString()}</Typography>
      <Typography component="p">{status}</Typography>
      <Typography component="p">{traidingName}</Typography>
      <Typography component="p">{info}</Typography>
    </div>
  );
}
