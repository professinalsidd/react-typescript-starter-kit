// src/screens/EditTodoModal.tsx
import React, { useState } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";
import { COLORS } from "../../../themes/themes";

type EditTodoModalProps = {
  open: boolean;
  onClose: () => void;
  todo: { id: number; title: string; description: string };
  onSave: (updatedTodo: {
    id: number;
    title: string;
    description: string;
  }) => void;
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  open,
  onClose,
  todo,
  onSave,
}) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSave = () => {
    onSave({ ...todo, title, description });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
          width: "90%",
          maxWidth: 400,
          background: COLORS.WHITE,
          mx: "auto",
          mt: "20%",
        }}
      >
        <Typography variant="h6" component="h2" mb={2}>
          Edit Todo
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} sx={{ mr: 1, color: COLORS.RED_BLACK }}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditTodoModal;
