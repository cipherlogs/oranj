import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import Carousel from "@shared/Carousel";
import CommunityAvatar from "@shared/CommunityAvatar";
import {trendingVideos} from "@data/app.data";

const TrendingVideos = () => {
  return (
    <Carousel height="25rem">
      {trendingVideos.map((item, i) => (
        <CarouselCard key={i} {...item} />
      ))}
    </Carousel>
  );
};

const CarouselCard = ({title, url, avatar}) => {
  const color = (theme) =>
    Math.random() > 0.5
      ? theme.palette.primary.dark
      : theme.palette.secondary.dark;

  const styles = {
    card: {
      maxWidth: "100%",
      width: "100%",
      position: "relative",
    },
    content: {
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    overlay: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: (theme) =>
        `linear-gradient(0deg,` +
        `${color(theme)},` +
        `transparent 40%, transparent)`,
      zIndex: 0,
    },
  };

  return (
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia component="img" height="350" image={url} />
        <Box sx={styles.overlay}></Box>
        <CardContent sx={styles.content}>
          <Typography variant="button" color="white">
            {title}
          </Typography>
          <CommunityAvatar {...avatar}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TrendingVideos;
