import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function HelloPage() {
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      sx={{
        minHeight: "200px",
        minWidth: "280px",
        maxWidth: "470px",
        border: "1px solid #1565c0",
        borderRadius: "5px",
        padding: "20px",
        mb: "160px",
      }}
    >
      <Typography sx={{ mb: 2 }}>
        Добро пожаловать на главную страницу JymApp!
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Здесь вы можете вести журнал тренировок, контролировать свой режим, а
        также добавлять собственные упражнения в программу тренировок.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Начните пользоваться JymApp сразу после регистрации! Если вы уже
        зарегистрированы произведите вход с помощью логина или пароля!
      </Typography>

      <Button
        variant="outlined"
        size="medium"
        type="submit"
        sx={{ width: "150px" }}
        onClick={() => navigate("/login")}
      >
        Вход
      </Button>
    </Box>
  );
}
