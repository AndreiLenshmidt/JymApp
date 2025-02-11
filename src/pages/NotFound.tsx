import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  /* Используем navigate("/") для перенаправления пользователя на приве6тсвенную страницу, 
  если он решил перейти по несуществуующему маршруту. Также отчищаем timeout с помощью 
  React cleanUp-функции */
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <h2>404 not found</h2>
    </>
  );
}
