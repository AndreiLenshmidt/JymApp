import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./layouts/auth/AuthLayuot";
import LoginPage from "./pages/login/LoginPage";
import NotFound from "./pages/NotFound";
import UnAuthLayout from "./layouts/unauth/UnAuthLayuot";
import HelloPage from "./pages/HelloPage";
import TestFirebaseBD from "./pages/login/TestFirebaseBD";
import { useJymAppStore } from "./store/store";
import MainPage from "./pages/MainPage";

function App() {
  // const [auth, setAuth] = useState(false);
  const isAuth = useJymAppStore((state) => state.isAuth);

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
