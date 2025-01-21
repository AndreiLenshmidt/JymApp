import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import AuthLayout from "./layouts/auth/AuthLayuot";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import NotFound from "./pages/NotFound";
import UnAuthLayout from "./layouts/unauth/UnAuthLayuot";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {auth ? (
          <Route element={<AuthLayout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="/pidor" element={<RegisterPage />} /> */}
          </Route>
        ) : (
          <Route element={<UnAuthLayout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
