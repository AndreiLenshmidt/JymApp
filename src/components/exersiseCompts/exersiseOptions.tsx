import { useParams } from "react-router";
import { useJymAppStore } from "../../store/store";
import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ExersiseOptions() {
  const STANDARTEXERSISES = useJymAppStore((store) => store.STANDARTEXERSISES);
  const { id } = useParams();
  const [simulator, setSimulator] = useState("Тренажер");
  const [position, setPosition] = useState("Позиция");
  const [change, setChange] = useState(false);

  return (
    <Box pt={3} width={"320px"}>
      <Paper variant="outlined" sx={{ padding: "10px" }}>
        <Typography
          component={"h2"}
          sx={{ textAlign: "center", padding: "10px" }}
        >
          Параметры упражнения
        </Typography>
        <TextField
          sx={{ width: "300px", mt: 1, mb: 3, boxSizing: "border-box" }}
          id="outlined-basic"
          label="Название"
          variant="outlined"
          defaultValue={id && STANDARTEXERSISES[+id].name}
        />
        <TextField
          sx={{ width: "300px", mb: 3, boxSizing: "border-box" }}
          id="outlined-basic"
          label="Тип упражнения"
          variant="outlined"
          defaultValue={id && STANDARTEXERSISES[+id].type}
        />
        <FormControl fullWidth sx={{ maxWidth: "320px", mb: 3 }}>
          <InputLabel id="simulator-select">Тренажер</InputLabel>
          <Select
            id="simulator-select"
            label="Тренажер"
            value={simulator}
            onChange={(e) => setSimulator(e.target.value)}
          >
            <MenuItem value={"Турник"}>Турник</MenuItem>
            <MenuItem value={"Брусья"}>Брусья</MenuItem>
            <MenuItem value={"Прочее"}>Прочее</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ maxWidth: "320px", mb: 3 }}>
          <InputLabel id="position-select">Позиция</InputLabel>
          <Select
            id="position-select"
            label="Позиция"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <MenuItem value={"Стоя"}>Стоя</MenuItem>
            <MenuItem value={"Сидя"}>Сидя</MenuItem>
            <MenuItem value={"Лежа"}>Лежа</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: "300px", mb: 3, boxSizing: "border-box" }}
          id="outlined-basic"
          label="Снаряжение"
          variant="outlined"
          defaultValue={id && STANDARTEXERSISES[+id].outfit}
        />
        <TextField
          sx={{ width: "300px", mb: 3, boxSizing: "border-box" }}
          id="outlined-basic"
          label="Главная группа мышц"
          variant="outlined"
          defaultValue={id && STANDARTEXERSISES[+id].main_muscle_group}
        />
        <Autocomplete
          disablePortal
          options={[
            "Бицепс",
            "Трицепс",
            "Грудь",
            "Спина",
            "Дельты",
            "Квадрицепс",
            "Бицепс бедра",
            "Икры",
          ]}
          sx={{ width: 300, mb: 1 }}
          renderInput={(params) => (
            <TextField {...params} label="Прочие группы мышц" />
          )}
        />
        <Stack direction="row" spacing={1}>
          {id &&
            STANDARTEXERSISES[+id].musclu_groups.map((item) => (
              <Chip
                key={item + 95675}
                label={item}
                onDelete={() =>
                  STANDARTEXERSISES[+id].musclu_groups.filter(
                    (group) => group !== item
                  )
                }
              />
            ))}
        </Stack>

        <p>Подходы: </p>
        <ul>
          {id &&
            STANDARTEXERSISES[+id].approaches.map((item, index) => (
              <li key={index + "ihoilouo9"}>
                Подход: {item.iteration}, вес: {item.weight}, отдых: {item.rest}
              </li>
            ))}
        </ul>
      </Paper>
    </Box>
  );
}

// https://musclewiki.com/
