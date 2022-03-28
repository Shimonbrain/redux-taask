import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Link to="/invite">
        <Button variant="contained" startIcon={<AddIcon />}>
          ADD A Friend
        </Button>
      </Link>
    </Box>
  );
}
