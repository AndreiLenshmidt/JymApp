import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function HelloPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        variant="outlined"
        size="medium"
        type="submit"
        onClick={() => navigate("/login")}
      >
        Вход
      </Button>
    </Box>
  );
}
