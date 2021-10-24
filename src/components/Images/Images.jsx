import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { downloadImage } from "./utils";

import { loadMoreImage } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "50vw",
  outline: 0,
};

const Images = () => {
  const [open, setOpen] = React.useState({ status: false, image: "" });
  const imgData = useSelector((state) => state.images.imageList);
  const currPage = useSelector((state) => state.images.curr_page);
  const key = useSelector((state) => state.images.searchKey);
  const dispatch = useDispatch();

  const handleOpen = (image) => {
    setOpen({ status: true, image: image });
  };
  const handleClose = () => setOpen({ status: false, image: "" });

  const handleClick = () => {
    dispatch(loadMoreImage(currPage + 1, key));
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          mt: 8,
          textAlign: "center",
        }}
      >
        <ImageList variant="masonry" cols={8} gap={8}>
          {imgData.map((img, i) => (
            <ImageListItem
              key={i}
              onClick={() => handleOpen(img.urls.regular)}
              sx={{ cursor: "pointer" }}
            >
              <img
                src={`${img.urls.thumb}?w=248&h=400&fit=crop`}
                // srcSet={`${img.urls.thumb}?w=248&h=auto&fit=crop&auto=format&dpr=2 2x`}
                alt={img["alt_description"]}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <IconButton
          sx={{
            bgcolor: "#2196f3",
            "&: hover": {
              bgcolor: "#4dabf5",
            },
          }}
          onClick={handleClick}
        >
          <ExpandMoreIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Modal
        open={open.status}
        onClose={handleClose}
        sx={{ overflowY: "auto" }}
      >
        <Box sx={style}>
          <IconButton
            sx={{
              right: 0,
              bottom: 0,
              transform: "translate(-50%, -50%)",
              position: "absolute",
              bgcolor: "#2196f3",
              "&: hover": {
                bgcolor: "#4dabf5",
              },
              boxShadow: 24,
            }}
            onClick={() => {
              downloadImage(open.image, false);
            }}
          >
            <FileDownloadIcon sx={{ color: "white" }} />
          </IconButton>
          <img
            style={{ width: "100%" }}
            src={`${open.image}`}
            alt="open-img"
            loading="lazy"
          />
        </Box>
      </Modal>
    </>
  );
};

export default Images;
