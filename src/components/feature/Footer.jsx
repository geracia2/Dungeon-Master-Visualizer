import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <Box>
        <Typography variant="h6">Footer</Typography>
        <Typography color="textSecondary" variant="subtitle1">
          Something here to give the footer a purpose! Copyright © Your Website
          2023.
        </Typography>
      </Box>
    </div>
  );
}
