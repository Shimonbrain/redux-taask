import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";

import { useLocation } from "react-router-dom";


export default function InvitationSuccess() {
  const location = useLocation();
  const user = location.state.value;

  return (
    <Box className="box">
      <Stack spacing={2} className="card-layout">
        <Typography variant="h6" component="div" gutterBottom>
          The invitation was sent successfully to <span>{user}</span>.<br/> you can send another
        </Typography>
        <Link to="/">
          <Button variant="contained" endIcon={<SendIcon />}  fullWidth>
            Got to homepage
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
