import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Set_Model,
  Remove_Model,
  Add_Model,
} from "../utility/store/sketchFabSlice";
import { Link } from "react-router-dom";
//mui
import {
  Box,
  Button,
  Typography,
  Modal,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Chip,
  Stack,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function ModelList({ sfData }) {
  //modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    height: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // modal vars
  const [modalInfo, setModalInfo] = useState({});
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // enable dispatch, connect redux state
  const dispatch = useDispatch();
  const sfModel = useSelector((state) => state.SketchFabModels);
  console.log(sfModel);

  const handleSet = (model) => {
    dispatch(Set_Model(model));
    console.log(sfModel);
  };

  // const handleAdd = (model) => {
  //   dispatch(Add_Model(model));
  // };

  const handleDelete = (model) => {
    dispatch(Remove_Model());
    console.info(sfModel);
  };

  //modal interactions
  const handleModalSelect = (uid, name) => {
    handleOpen();
    setModalInfo({
      name: name,
      uid: uid,
    });
    console.log(uid, name);
  };

  return (
    <>
      {sfData && ( // truthy value, checking to see if you have data before rendering
        <>
          <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
            <ImageList>
              {sfData.models.map((model, i) => (
                <ImageListItem key={model.uid}>
                  <img
                    src={model.thumbnails.images[0].url}
                    alt={model.name}
                    loading="lazy"
                    style={{
                      maxWidth: "600px",
                      minWidth: "100px",
                      // width: "260px",
                    }}
                    onClick={() => handleModalSelect(model.uid, model.name)}
                  />
                  <ImageListItemBar
                    title={model.name}
                    subtitle={<span>by: {model.user.username}</span>}
                    position="bottom"
                    sx={{
                      backgroundColor: "background.paper",
                      paddingLeft: "10px",
                    }}
                    actionIcon={
                      <Stack
                        direction="column"
                        spacing={1}
                        sx={{
                          position: "relative",
                          right: "10px",
                        }}
                      >
                        <Chip
                          label="Add to Scene"
                          onClick={() => handleSet(model)}
                          icon={<AddIcon />}
                        />
                        <Chip
                          label="Remove From Scene"
                          onClick={() => handleDelete(model)}
                          icon={<DeleteIcon />}
                          variant="outlined"
                        />
                      </Stack>
                    }
                    actionPosition="right"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            {/* ----- Modal ------ */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {modalInfo.name}
                </Typography>
                <iframe
                  src={`https://sketchfab.com/models/${modalInfo.uid}/embed`}
                  id="api-frame"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking="true"
                  execution-while-out-of-viewport="true"
                  execution-while-not-rendered="true"
                  web-share="true"
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  accelerometer="true"
                  // resize stuff:
                  width="100%"
                  height="95%"
                  // class="fop"
                  frameBorder="0"
                />
              </Box>
            </Modal>
            {/* ----- Modal ------ */}
          </Box>
        </>
      )}
    </>
  );
}
