import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export default function InviteViaUsername() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  const userid = location.state.value;
  const onSubmit = ({ userName, description }) => {
    const body = {
      userName,
      email: null,
      description,
    };

    dispatch({
      type: "ADD_USER_DATA",
      result: body,
    });
    navigation("/inviteSuccess", { state: { value: body.userName } });
  };

  return (
    <Box className="box">
      <Stack spacing={2} className="card-layout">
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          align="center"
          fontWeight={600}
        >
          Add friend via Username !
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              label="Friends Username"
              variant="filled"
              value={userid}
              disabled
              sx={{ my: 1 }}
              fullWidth
              {...register("userName", { value: userid })}
            />

            <TextField
              label="Add note"
              variant="filled"
              sx={{ my: 1 }}
              fullWidth
              {...register("description", { required: true })}
            />

            <Button
              type="submit"
              variant="contained"
              startIcon={<SendIcon />}
              sx={{ my: 1 }}
              fullWidth
            >
              Invite
            </Button>
          </Box>
        </form>
      </Stack>
    </Box>
  );
}
