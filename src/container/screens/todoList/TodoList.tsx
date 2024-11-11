// src/screens/TodoListScreen.tsx
import { useState } from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { COLORS } from "../../../themes/themes";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { deleteTodo, editTodo } from "../../../redux/todo/todoSlice";
import { toast } from "react-toastify";
import EditTodoModal from "../editTodo/EditTodo";

const TodoListScreen = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  const [selectedTodo, setSelectedTodo] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const deleteHandler = (id: number) => {
    dispatch(deleteTodo(id));
    toast.success("Successfully Deleted");
  };

  const editHandler = (todo: any) => {
    setSelectedTodo(todo);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedTodo(null);
  };

  return (
    <Box
      sx={{
        maxHeight: 400,
        overflowY: "auto",
        p: 2,
        border: `1px solid ${COLORS.RED_BLACK}`,
        borderRadius: 2,
        scrollbarWidth: "none",
      }}
    >
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
            <Box>
              <IconButton
                onClick={() => editHandler(todo)}
                sx={{
                  background: COLORS.RED_BLACK,
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  fontSize: 14,
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </IconButton>
              <IconButton
                onClick={() => deleteHandler(todo.id)}
                sx={{
                  background: COLORS.RED_BLACK,
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  fontSize: 14,
                  mr: 1,
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </IconButton>
            </Box>
          </Box>
          <Divider />
        </Box>
      ))}
      {/* Edit Todo Modal */}
      {isEditModalOpen && selectedTodo && (
        <EditTodoModal
          open={isEditModalOpen}
          onClose={closeEditModal}
          todo={selectedTodo}
          onSave={(updatedTodo: any) => {
            dispatch(editTodo(updatedTodo));
            toast.success("Successfully Updated");
            closeEditModal();
          }}
        />
      )}
    </Box>
  );
};

export default TodoListScreen;
