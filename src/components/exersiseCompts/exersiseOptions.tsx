import { useParams } from "react-router";
import { useJymAppStore } from "../../store/store";
import { Box, Typography } from "@mui/material";

export default function ExersiseOptions() {
  const STANDARTEXERSISES = useJymAppStore((store) => store.STANDARTEXERSISES);
  const { id } = useParams();
  return (
    <Box>
      <Typography>Параметры упражнения</Typography>
      <p>Название: {id && STANDARTEXERSISES[+id].name}</p>
      <p>Тип: {id && STANDARTEXERSISES[+id].type}</p>
      <p>Транажер: {id && STANDARTEXERSISES[+id].simulator}</p>
      <p>Позиция: {id && STANDARTEXERSISES[+id].positions}</p>
      <p>Снаряжение: {id && STANDARTEXERSISES[+id].outfit}</p>
      <p>
        Основная группа мышц: {id && STANDARTEXERSISES[+id].main_muscle_group}
      </p>
      <p>Прочие группы мышц</p>
      <ul>
        {id &&
          STANDARTEXERSISES[+id].musclu_groups.map((item) => <li>{item}</li>)}
      </ul>
      <p>Подходы: </p>
      <ul>
        {id &&
          STANDARTEXERSISES[+id].approaches.map((item) => (
            <li>
              Подход: {item.iteration}, вес: {item.weight}, отдых: {item.rest}
            </li>
          ))}
      </ul>
    </Box>
  );
}

// https://musclewiki.com/
