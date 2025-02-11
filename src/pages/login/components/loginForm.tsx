import { useState } from "react";
// Имортируем Zod, react-hook-forms, zodResolver
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataType } from "../../../types/types";
import { useForm } from "react-hook-form";
// Импортируем компоненты и методы из MaterialUi
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router";
import { signInUser } from "../../../firebase-config";
import { useJymAppStore } from "../../../store/store";

export default function LoginForm() {
  // Стейт для лоадера внутри кнопки "войти"
  const [income, setIncome] = useState(false);
  // Стейт для поля пароль, паказать-скрыть символы
  const [showPassword, setShowPassword] = useState(false);
  // Стейт для поля отображения ошибки аутентификации
  const [authError, setAuthError] = useState<{
    error: boolean;
    message: string;
  }>({ error: false, message: "" });
  // Импортируем объект навиготора из библиотеки реакт-роутер-дом
  const navigate = useNavigate();
  // Импортирем функции setAuth, setAccessToken из Zustant-хранилища
  const setAuth = useJymAppStore((state) => state.setAuth);
  const setAccessToken = useJymAppStore((state) => state.setAccessToken);
  // Схема валидации формы, объект с полями {email, password} к которым применены методы валидации строковых полей Zod. Для поля пароля применена регулярка требующая ввода хотя бы одной заглавной буквы и минимум одну цифру. .required - поля обязательные для ввода
  const schema: ZodType<FormDataType> = z
    .object({
      email: z
        .string()
        .min(1, "Нужно заполнить")
        .min(6, "Не меньше 6 символов")
        .email("Неправильная почта"),
      password: z
        .string()
        .min(8, "Не меньше 8 символов")
        .regex(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
          "Используйте заглавные буквы и цифры минумум по одной"
        ),
    })
    .required();
  // Импортируем useForm и забираем из него необходимые методы и поля
  // {...register("email")} - подключает импут к валидации,
  // handleSubmit - обработчик отправки формы,
  // formState: { errors } - объект ошибки, позволяет получить текст ошибки указанный в схеме валидации
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  // Стандартные обработчики клика скрыть-паказать пароль взяты из библиотеки компонентов
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Кастомный обработчик отправки формы, он передается в качестве аргумента для обработчика отправки формы react-hook-forms
  const onSubmit = async (formData: FormDataType) => {
    setIncome(true);
    try {
      const loginResponse = await signInUser(formData.email, formData.password);
      /* Firebase предоставляет в качестве ответа объект который мы назвали loginResponse типа UserCredential.
        UserCredential содержит 3 поля нам нужен user у которого есть несколько методов, 
        getIdToken() - возвращает промис который вернет AccessToken */
      const token = await loginResponse.user.getIdToken();
      // Записываем поля accessToken, istAuth в наш store и в локальное хранилище
      setAuth(true);
      setAccessToken(token);
      // редиректим на нужную страницу
      navigate("/");
      // console.log(loginResponse);
      console.log(token);
      // console.log(loginResponse.user.stsTokenManager);
    } catch (error) {
      console.error(error);
      setAuthError({
        error: true,
        message: "Ошибка неверный логин или пароль",
      });
      setIncome(false);
    }
  };

  return (
    /* Компонент Box из MaterialUI, атрибут "component" по умолчанию "div"
      в данном случае в разметке будет "section"
      sx - атрубут, где можно прописать стили */
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Тектовое поле - input[type="text"] label - тект label, 
            error,helperText, {...register("email")} - поля для react-hook-forms*/}
      <TextField
        id="email"
        label="Email"
        autoComplete="email"
        error={!!errors.email || (authError.error && true)}
        helperText={errors.email?.message}
        sx={{ mb: 3, mt: "17px" }}
        {...register("email")}
      />
      {/* Сложный кастомизуемый input[type="password"] 
            error={errors.password && true} - стилизация поля если есть ошибка
            {...register("password")} - указываем непосредственно у компонента OutlinedInput
            Для вывода текста ошибки {errors.password?.message} создаем элемент р - стилизация взята у соседнего TextField непосредсвенно из разметки
            */}
      <FormControl
        variant="outlined"
        sx={{ mb: "44px" }}
        error={!!errors.password || (authError.error && true)}
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <Typography
          style={{ display: errors || authError.error ? "block" : "none" }}
          sx={{
            fontSize: "0.75rem",
            ml: "14px",
            mr: "14px",
            mt: "3px",
            color: "#d32f2f",
          }}
        >
          {errors.password?.message} {authError.message}
        </Typography>
      </FormControl>
      {/* 
            Компонент-кнопка variant - визуальный тип кнопки, 
            type="submit" - кнопка тригерит отправку формы, 
            loading={income} - связывает лоадер и состояние, которое появляется в момент загрузки
            */}
      <Button variant="outlined" size="medium" type="submit" loading={income}>
        Войти
      </Button>
      <Box sx={{ mt: 2, cursor: "default" }}>
        <Link>Забыли пароль?</Link>
      </Box>
    </Box>
  );
}
