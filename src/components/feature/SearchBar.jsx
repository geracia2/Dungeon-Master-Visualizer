import { Box, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux';

export default function CustomizedInputBase({
  section,
  handleSubmit,
  input,
  handleChange,
}) {

  const sfModel = useSelector((state) => state.SketchFabModels);
  console.log(sfModel);

  return (
    <>
    <p>{sfModel.name}</p>
      <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            color: '',
          }}
        >
          <IconButton
            type="button"
            sx={{ p: "10px", color: "primary.main" }}
            aria-label="search"
            onClick={handleSubmit}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: 'text.hint'}}
            placeholder={`Search ${section}`}
            inputProps={{ "aria-label": "search sounds" }}
            value={input}
            onChange={handleChange}
          />
        </Paper>
      </Box>
    </>
  );
}
