import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { useJymAppStore } from "../../store/store";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router";

export default function ExersiseList() {
  const STANDARTEXERSISES = useJymAppStore((store) => store.STANDARTEXERSISES);
  const userProgrammExersises = useJymAppStore(
    (store) => store.userProgrammExersises
  );
  const setUserExersisList = useJymAppStore(
    (store) => store.setUserExersisList
  );

  return (
    <Paper variant="outlined" sx={{ padding: "10px" }}>
      <Typography sx={{ m: 2, textAlign: "center" }}>УПРАЖНЕНИЯ</Typography>
      <Box sx={{ height: "440px", overflow: "hidden", overflowY: "scroll" }}>
        <Box m={1}>
          {STANDARTEXERSISES.map((item) => (
            <Paper
              key={item.name + item.id}
              elevation={3}
              sx={{
                width: "300px",
                padding: "10px",
                minHeight: "48px",
                mb: "5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography width="190px">{item.name}</Typography>
              {/* <Typography>{item.main_muscle_group}</Typography> */}

              <Box display={"flex"} alignItems={"center"}>
                <Link to={`${item.id}`}>
                  <IconButton aria-label="settings">
                    <SettingsIcon />
                  </IconButton>
                </Link>
                <Checkbox
                  // defaultChecked={programmExersises[item.id].inprogramm}
                  checked={userProgrammExersises[item.id].inprogramm}
                  onChange={() => setUserExersisList(item.id)}
                  color="success"
                />
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
      <Paper
        // elevation={3}
        variant="outlined"
        sx={{
          padding: "0 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 1,
          mt: 6,
        }}
      >
        <Typography component={"span"} sx={{ userSelect: "none" }}>
          Создать упражнение
        </Typography>
        <Link to={"create"}>
          <IconButton aria-label="settings">
            <AddIcon />
          </IconButton>
        </Link>
      </Paper>
      <Box
        m={1}
        pt={2}
        sx={{ m: 1, pt: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Button variant="outlined">Сохранить</Button>
        <Button variant="outlined">Отменить</Button>
      </Box>
    </Paper>
  );
}
