import { useParams } from "react-router";
import { useJymAppStore } from "../../store/store";
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ExersiseOptions() {
  const STANDARTEXERSISES = useJymAppStore((store) => store.STANDARTEXERSISES);
  const addMuscleGroup = useJymAppStore((store) => store.addMuscleGroup);
  const delMuscleGrop = useJymAppStore((store) => store.delMuscleGrop);
  const addApproach = useJymAppStore((store) => store.addApproach);
  const delApproach = useJymAppStore((store) => store.delApproach);
  const changeApproachCount = useJymAppStore(
    (store) => store.changeApproachCount
  );
  const changeApproachWeight = useJymAppStore(
    (store) => store.changeApproachWeight
  );
  const changeApproachRest = useJymAppStore(
    (store) => store.changeApproachRest
  );
  const setMainMuscle = useJymAppStore((store) => store.setMainMuscle);
  const setOutfit = useJymAppStore((store) => store.setOutfit);
  const setPosition = useJymAppStore((store) => store.setPosition);
  const setSimulator = useJymAppStore((store) => store.setSimulator);
  const setType = useJymAppStore((store) => store.setExersiseType);
  const setName = useJymAppStore((store) => store.setExersiseName);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Number(id || "")) {
      navigate("/");
    }
  }, []);

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
          sx={{
            width: "300px",
            mt: 1,
            mb: 2,
            boxSizing: "border-box",
          }}
          size="small"
          id="name"
          label="Название"
          variant="outlined"
          value={(id && STANDARTEXERSISES[+id]?.name) || ""}
          onChange={(e) => id && setName(e.target.value, +id)}
        />
        <TextField
          sx={{ width: "300px", mb: 2, boxSizing: "border-box" }}
          size="small"
          id="type"
          label="Тип упражнения"
          variant="outlined"
          value={(id && STANDARTEXERSISES[+id]?.type) || ""}
          onChange={(e) => id && setType(e.target.value, +id)}
        />
        <FormControl fullWidth sx={{ maxWidth: "320px", mb: 2 }} size="small">
          <InputLabel id="simulator-select">Тренажер</InputLabel>
          <Select
            id="simulator-select"
            label="Тренажер"
            value={(id && STANDARTEXERSISES[+id]?.simulator) || ""}
            onChange={(e) => id && setSimulator(e.target.value, +id)}
          >
            <MenuItem value={"Отсутсвует"}>Отсутсвует</MenuItem>
            <MenuItem value={"Турник"}>Турник</MenuItem>
            <MenuItem value={"Брусья"}>Брусья</MenuItem>
            <MenuItem value={"Прочее"}>Прочее</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ maxWidth: "320px", mb: 2 }} size="small">
          <InputLabel id="position-select">Позиция</InputLabel>
          <Select
            id="position-select"
            label="Позиция"
            value={(id && STANDARTEXERSISES[+id]?.positions) || ""}
            onChange={(e) => id && setPosition(e.target.value, +id)}
          >
            <MenuItem value={"Стоя"}>Стоя</MenuItem>
            <MenuItem value={"Сидя"}>Сидя</MenuItem>
            <MenuItem value={"Лежа"}>Лежа</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: "300px", mb: 2, boxSizing: "border-box" }}
          size="small"
          id="outfit"
          label="Снаряжение"
          variant="outlined"
          value={(id && STANDARTEXERSISES[+id]?.outfit) || ""}
          onChange={(e) => id && setOutfit(e.target.value, +id)}
        />
        <FormControl fullWidth sx={{ maxWidth: "320px", mb: 2 }} size="small">
          <InputLabel id="main-group-select">Целевая группа мышц</InputLabel>
          <Select
            id="main-group-select"
            label="Целевая группа мышц"
            value={(id && STANDARTEXERSISES[+id]?.main_muscle_group) || ""}
            onChange={(e) => id && setMainMuscle(e.target.value, +id)}
          >
            <MenuItem value={"Бицепс"}>Бицепс</MenuItem>
            <MenuItem value={"Трицепс"}>Трицепс</MenuItem>
            <MenuItem value={"Грудь"}>Грудь</MenuItem>
            <MenuItem value={"Спина"}>Спина</MenuItem>
            <MenuItem value={"Дельты"}>Дельты</MenuItem>
            <MenuItem value={"Квадрицепс"}>Квадрицепс</MenuItem>
            <MenuItem value={"Бицепс бедра"}>Бицепс бедра</MenuItem>
            <MenuItem value={"Икры"}>Икры</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ maxWidth: "320px", mb: 1.5 }} size="small">
          <InputLabel id="multy-group-select-label">
            Прочие группы мышц
          </InputLabel>
          <Select
            labelId="multy-group-select-label"
            id="multy-group-select"
            label="Прочие группы мышц"
            defaultValue={"Добавить группу мышц"}
            onChange={(e) => id && addMuscleGroup(e.target.value, +id)}
            // onChange={(e) => setOtherMuscle(e.target.value)}
          >
            <MenuItem value={"Добавить группу мышц"}>
              Добавить группу мышц
            </MenuItem>
            <MenuItem value={"Бицепс"}>Бицепс</MenuItem>
            <MenuItem value={"Трицепс"}>Трицепс</MenuItem>
            <MenuItem value={"Грудь"}>Грудь</MenuItem>
            <MenuItem value={"Спина"}>Спина</MenuItem>
            <MenuItem value={"Дельты"}>Дельты</MenuItem>
            <MenuItem value={"Квадрицепс"}>Квадрицепс</MenuItem>
            <MenuItem value={"Бицепс бедра"}>Бицепс бедра</MenuItem>
            <MenuItem value={"Икры"}>Икры</MenuItem>
          </Select>
        </FormControl>
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            overflow: "hidden",
            overflowX: "scroll",
            pb: 1.2,
            scrollbarWidth: "thin",
          }}
        >
          {id &&
            STANDARTEXERSISES[+id]?.musclu_groups.map((item) => (
              <Chip
                key={item + 95675}
                label={item.toUpperCase()}
                size="small"
                sx={{ fontSize: "10px" }}
                onDelete={() => delMuscleGrop(item, +id)}
              />
            ))}
        </Stack>
        <Typography mt={1.5} mb={1.5}>
          Подходы:
        </Typography>
        <Box>
          {id &&
            STANDARTEXERSISES[+id]?.approaches.map((item, index) => (
              <Paper
                key={Math.random() + "ihoilouo9"}
                elevation={4}
                sx={{
                  mb: 0.5,
                  p: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  sx={{ width: "70px", mr: 1 }}
                  label="КОЛ"
                  size="small"
                  type="number"
                  variant="filled"
                  value={item.iteration}
                  onChange={(e) =>
                    changeApproachCount(+e.target.value, +id, index)
                  }
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
                <TextField
                  sx={{ width: "70px", mr: 1 }}
                  label="ВЕС"
                  size="small"
                  type="number"
                  variant="filled"
                  value={item.weight}
                  onChange={(e) =>
                    changeApproachWeight(+e.target.value, +id, index)
                  }
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
                <TextField
                  sx={{ width: "70px", mr: 1 }}
                  label="ОТДЫХ"
                  size="small"
                  type="number"
                  variant="filled"
                  value={item.rest}
                  onChange={(e) =>
                    changeApproachRest(+e.target.value, +id, index)
                  }
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
                <IconButton
                  aria-label="settings"
                  onClick={() => delApproach(+id, index)}
                >
                  <CancelIcon />
                </IconButton>
              </Paper>
            ))}
          <Paper
            variant="outlined"
            sx={{
              padding: "0 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography component={"span"} sx={{ userSelect: "none" }}>
              Добавить подход
            </Typography>
            <IconButton
              aria-label="settings"
              onClick={() =>
                id &&
                addApproach(
                  STANDARTEXERSISES[+id].approaches[0]
                    ? STANDARTEXERSISES[+id].approaches[0]
                    : {
                        iteration: 0,
                        weight: 0,
                        rest: 0,
                      },
                  +id
                )
              }
            >
              <AddIcon />
            </IconButton>
          </Paper>
        </Box>
        <ul></ul>
      </Paper>
    </Box>
  );
}

// https://musclewiki.com/
