import StyleSheet from "react-native-media-query";
import { useHome } from "./useHome";
import {
  Box,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Home = () => {
  const { image, onClickBack, onClickNext, currentTime } = useHome();

  return (
    <Box style={styles.container}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia sx={{ height: "95vh" }} image={image} title="" />
        <CardActions>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              mr: 2,
            }}
          >
            <IconButton aria-label="back" size="small" onClick={onClickBack}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="next" size="small" onClick={onClickNext}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
            <Box sx={{ flex: 1, justifyContent: "flex-end", display: "flex" }}>
              <Typography>{currentTime}</Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

const { styles } = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#000000",
  },
  image: {
    height: "100%",
    width: "auto",
    objectFit: "contain",
    flex: 1,
  },
});
