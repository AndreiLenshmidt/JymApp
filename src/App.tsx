import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./layouts/auth/AuthLayuot";
import LoginPage from "./pages/login/LoginPage";
import NotFound from "./pages/NotFound";
import UnAuthLayout from "./layouts/unauth/UnAuthLayuot";
import HelloPage from "./pages/HelloPage";
import TestFirebaseBD from "./pages/login/TestFirebaseBD";
import { useJymAppStore } from "./store/store";
import MainPage from "./pages/MainPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLayoutEffect, useState } from "react";
// import { useEffect } from "react";
// import { onAuth } from "./firebase-config";

function App() {
  // const [auth, setAuth] = useState(false);
  const isAuth = useJymAppStore((state) => state.isAuth);
  // const [isAuth, setAuth] = useState(false);
  // useEffect(() => {
  //   const user = onAuth();
  //   console.log(user);
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isAuth ? (
          <Route element={<AuthLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/test" element={<TestFirebaseBD />} />
          </Route>
        ) : (
          <Route element={<UnAuthLayout />}>
            <Route path="/" element={<HelloPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://firebase.google.com/docs/auth/web/auth-state-persistence?hl=en&authuser=0
// https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0
