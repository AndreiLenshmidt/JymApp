import { Button } from "@mui/material";
import { signout } from "../firebase-config";
import { useJymAppStore } from "../store/store";

export default function MainPage() {
  const setAuth = useJymAppStore((state) => state.setAuth);
  const setAccessToken = useJymAppStore((state) => state.setAccessToken);
  return (
    <>
      <h1>MainPage</h1>
      <Button
        variant="outlined"
        size="medium"
        type="submit"
        onClick={() => {
          setAuth(false);
          setAccessToken("");
          signout();
        }}
      >
        Выход
      </Button>
    </>
  );
}
