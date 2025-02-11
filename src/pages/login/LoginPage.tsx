import { Box } from "@mui/material";
import LoginForm from "./components/loginForm";
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import RegistrationForm from "./components/registrForm";

export default function LoginPage() {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    /* Компонент Box из MaterialUI, атрибут "component" по умолчанию "div"
    в данном случае в разметке будет "section"
    sx - атрубут, где можно прописать стили */
    <Box
      sx={{
        padding: "20px",
        boxShadow: "0 0 1px 1px #1565c0",
        borderRadius: "5px",
        minWidth: "310px",
        boxSizing: "border-box",
        mb: "160px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        centered
        sx={{ mb: 3 }}
      >
        <Tab value="one" label="Вход" />
        <Tab value="two" label="Регистрация" />
      </Tabs>
      {value === "one" ? <LoginForm /> : <RegistrationForm />}
    </Box>
  );
}

// https://www.react-hook-form.com/get-started/#SchemaValidation
// https://zod.dev/?id=strings
// https://mui.com/material-ui/react-button/
// https://mui.com/material-ui/react-box/
// https://mui.com/material-ui/react-text-field/
// https://mui.com/material-ui/react-typography/
// https://blog.back4app.com/ru/%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-%D0%B0%D1%83%D1%82%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8/

// Настройка доступа БД для пользователя через токен
// https://firebase.google.com/docs/auth/admin/manage-sessions?authuser=0
// {
//   "rules": {
//     "users": {
//       "$user_id": {
//         ".read": "auth != null && $user_id === auth.uid && (
//             !root.child('metadata').child(auth.uid).child('revokeTime').exists()
//           || auth.token.auth_time > root.child('metadata').child(auth.uid).child('revokeTime').val()
//         )",
//         ".write": "auth != null && $user_id === auth.uid && (
//             !root.child('metadata').child(auth.uid).child('revokeTime').exists()
//           || auth.token.auth_time > root.child('metadata').child(auth.uid).child('revokeTime').val()
//         )",
//       }
//     }
//   }
// }
