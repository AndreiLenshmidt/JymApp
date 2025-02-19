import { Typography } from "@mui/material";
import { useJymAppStore } from "../../store/store";

export default function DayDescription(
  {
    // date,
    // status,
    // traidingName,
    // info,
  }: {
    // date?: Date;
    // status?: string;
    // traidingName?: string;
    // info?: string;
  }
) {
  const tranInfo = useJymAppStore((store) => store.tranInfo);
  return (
    <div>
      <Typography component="p">{tranInfo.date.toDateString()}</Typography>
      <Typography component="p">{tranInfo?.status}</Typography>
      <Typography component="p">{tranInfo?.traidingName}</Typography>
      <Typography component="p">{tranInfo?.info}</Typography>
    </div>
  );
}
