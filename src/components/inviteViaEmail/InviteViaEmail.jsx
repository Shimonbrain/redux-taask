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

export default function InviteViaEmail() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  const emailid = location.state.value;
  const onSubmit = ({ email, description }) => {
    const body = {
      userName: null,
      email,
      description,
    };

    dispatch({
      type: "ADD_USER_DATA",
      result: body,
    });
    navigation("/inviteSuccess", { state: { value: body.email } });
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
          Add friend via Email
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              label="Friends Email"
              variant="filled"
              value={emailid}
              disabled
              sx={{ my: 1 }}
              fullWidth
              {...register("email", { value: emailid })}
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
