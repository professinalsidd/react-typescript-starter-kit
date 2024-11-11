import NavBarComp from "../../../components/navbar/navbar";
import { Box, Card, Typography } from "@mui/material";
import { COLORS } from "../../../themes/themes";
import { useState } from "react";
import CreateTodoScreen from "../createTodo/CreateTodo";
import TodoListScreen from "../todoList/TodoList";

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <NavBarComp />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Card
          sx={{
            background: COLORS.MediumWhite,
            display: "flex",
            minHeight: "300px",
            flexDirection: "column",
            width: { xs: 250, md: 500 },
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                background: COLORS.RED_BLACK,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
              fontSize={{ xs: 16, md: 20 }}
              fontWeight={"700"}
            >
              Todo List
            </Typography>
            <Typography
              onClick={() => setOpen(true)}
              fontSize={{ xs: 16, md: 20 }}
              fontWeight={"500"}
              sx={{
                background: COLORS.RED_BLACK,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              <i className="fa-solid fa-plus"></i> Add new
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <TodoListScreen />
          </Box>
        </Card>
        <CreateTodoScreen open={open} setOpen={() => setOpen(!open)} />
      </Box>
    </Box>
  );
};

export default HomeScreen;
