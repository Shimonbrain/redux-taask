import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkIcon from '@mui/icons-material/Link';
import TextField from "@mui/material/TextField";

export default function InviteFriend() {
  const APIDATA = useSelector((state) => state.items);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
  } = useForm();

  const onSubmit = (data) => {
    const user = APIDATA.find((el) => {
      if (el.email === data.userEmail || el.userName === data.userName) {
        return el;
      }
    });
    if (user) {
      setMessage(
        `The ${data.userEmail ? "email" : "username"} ${
          data.userEmail || data.userName
        } Already Added`
      );
    } else {
      setMessage(`${data.userEmail ? "email" : "username"} not found`);
      if (data.userEmail) {
        navigate("/inviteViaEmail", { state: { value: data.userEmail } });
      } else {
        navigate("/inviteViaUsername", { state: { value: data.userName } });
      }
    }
  };

  const onSubmitLink = (data) => {
    console.log(data)
    navigate("/inviteSuccess", { state: { value: data.link } });
  };

  return (
    <Box className="box">
      <Stack spacing={3} className="card-layout">
        <Typography variant="h5" component="div" gutterBottom align="center" fontWeight={600}>
          How do you wanna invite ?
        </Typography>

        <Typography variant="h6" component="div" gutterBottom>
          {message}
        </Typography>

        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <MailOutlineRoundedIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                label="Email"
                variant="filled"
                {...register("userEmail", { required: true })}
              />
              <Button type="submit" startIcon={<SendIcon />} />
            </Box>
            <Typography
              variant="caption"
              component="div"
              gutterBottom
              sx={{ color: "red", ml: 4, mt: 1 }}
            >
              {errors.userEmail && <span>This field is required</span>}
            </Typography>
          </form>
        </Box>

        <Box>
          <form onSubmit={handleSubmit2(onSubmit)}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AlternateEmailRoundedIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                label="Username"
                variant="filled"
                {...register2("userName", { required: true })}
              />
              <Button type="submit" startIcon={<SendIcon />} />
            </Box>
            <Typography
              variant="caption"
              component="div"
              gutterBottom
              sx={{ color: "red", ml: 4, mt: 1 }}
            >
              {errors2.userName && <span>This field is required</span>}
            </Typography>
          </form>
        </Box>

        <Box>
          <form onSubmit={handleSubmit3(onSubmitLink)}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LinkIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                label="Link"
                variant="filled"
                {...register3("link", { required: true })}
              />
              <Button type="submit" startIcon={<SendIcon />} />
            </Box>
            <Typography
              variant="caption"
              component="div"
              gutterBottom
              sx={{ color: "red", ml: 4, mt: 1 }}
            >
              {errors2.link && <span>This field is required</span>}
            </Typography>
          </form>
        </Box>

      </Stack>
    </Box>
  );
}
