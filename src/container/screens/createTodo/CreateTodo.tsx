import { useState } from "react";
import ModalComp from "../../../components/common/Modal";
import { Box, Button, TextField, Typography } from "@mui/material";
import { COLORS } from "../../../themes/themes";

type CreateTodoType = {
  open: boolean;
  setOpen: () => void;
};

const CreateTodoScreen = ({ open, setOpen }: CreateTodoType) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = () => {
    console.log("check", title, description);
    setOpen();
  };
  return (
    <ModalComp handleClose={setOpen} open={open}>
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
          width: "90%",
          maxWidth: 400,
          background: COLORS.MediumWhite,
        }}
      >
        <Typography variant="h6" component="h2" mb={2}>
          Add New Todo
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          InputProps={{
            sx: {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "black",
              "&.Mui-focused": {
                color: "black",
              },
            },
          }}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          InputProps={{
            sx: {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: "black",
              "&.Mui-focused": {
                color: "black",
              },
            },
          }}
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button
            onClick={setOpen}
            sx={{
              mr: 1,
              background: COLORS.RED_BLACK,
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
            sx={{ background: COLORS.MediumWhite }}
          >
            <Typography
              sx={{
                background: COLORS.RED_BLACK,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              Add Todo
            </Typography>
          </Button>
        </Box>
      </Box>
    </ModalComp>
  );
};

export default CreateTodoScreen;
