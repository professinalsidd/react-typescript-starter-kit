import { Box, Typography, Divider } from "@mui/material";
import { COLORS } from "../../../themes/themes";

const TodoListScreen = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Hello world!</Typography>
        <i
          className="fa-solid fa-trash"
          style={{
            background: COLORS.RED_BLACK,
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        ></i>
      </Box>
      <Divider />
    </Box>
  );
};

export default TodoListScreen;
