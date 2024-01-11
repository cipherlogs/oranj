import {Stack, Paper, Typography, Chip, Avatar} from "@mui/material";
import DropDownList from "@shared/DropDownList";
import useLazyLoading from "@hooks/useLazyLoading";
import Post from "@components/Post";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {sortItems, posts, communities} from "@data/app.data";

const TrendingCommunities = ({data}) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      sx={{flexWrap: "wrap", gap: 1}}
    >
      {data.map((item, i) => (
        <Chip
          key={i}
          variant="contained"
          label={item.name.slice(0, 5)}
          avatar={<Avatar alt={item.name} src={item.url} />}
          onClick={() => {}}
          onDelete={() => {}}
          color={Math.random() > 0.9 ? "warning" : undefined}
        />
      ))}
    </Stack>
  );
};

const PopularPosts = () => {
  const [isLoading, data] = useLazyLoading(posts, 4);

  return (
    <Stack sx={{pt: 4}} direction="row" spacing={2}>
      <Stack sx={{width: {sm: "100%", lg: "70ch"}}} spacing={2}>
        <Paper elevation={2}>
          <DropDownList
            {...sortItems}
            primarySx={{variant: "button", color: "text.secondary"}}
          />
        </Paper>

        {data.map((item, i) => (
          <Post key={i} {...item} />
        ))}

        {isLoading && (
          <Typography
            variant="overline"
            color="text.secondary"
            align="center"
          >
            Loading more ...
          </Typography>
        )}
      </Stack>
      <Paper
        sx={{
          height: "fit-content",
          maxWidth: "40%",
          display: {xs: "none", lg: "inline-flex"},
          p: 2,
        }}
      >
        <TrendingCommunities data={communities} />
      </Paper>
    </Stack>
  );
};

export default PopularPosts;
