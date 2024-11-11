// src/screens/TodoListScreen.tsx
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { COLORS } from "../../../themes/themes";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { deleteTodo } from "../../../redux/todo/todoSlice";
import { toast } from "react-toastify";

const TodoListScreen = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  const deleteHandler = (id: number) => {
    dispatch(deleteTodo(id));
    toast.success("Successfully Deleted");
  };

  return (
    <Box>
      {todos.map((todo: any) => (
        <Box key={todo.id} sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                {todo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {todo.description}
              </Typography>
            </Box>
            <IconButton
              onClick={() => deleteHandler(todo.id)}
              sx={{
                background: COLORS.RED_BLACK,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </IconButton>
          </Box>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default TodoListScreen;
