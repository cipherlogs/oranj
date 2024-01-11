import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  IconButton,
  Stack,
  Divider,
  ButtonGroup,
} from "@mui/material";

import {styled} from "@mui/material/styles";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const Btn = styled(Button)(({theme}) => ({
  minWidth: "auto",
  color: `${theme.palette.text.primary}`,
}));

const Post = props => {
  const {
    community,
    avatar,
    postTitle,
    date,
    imgUrl,
    postText,
    likes,
    commentsCount,
  } = props;

  return (
    <Card elevation={1}>
      <CardHeader
        avatar={<Avatar src={avatar} sx={{width: "24", height: "24"}} />}
        title={
          <Stack direction="row" divider={<Divider>.</Divider>}>
            <Typography variant="subtitle2">{community}</Typography>
            <Typography color="text.secondary" variant="subtitle2">
              {date}
            </Typography>
          </Stack>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <CardContent>
        <Typography variant="h5" gutterBottom>
          {postTitle}
        </Typography>

        {imgUrl && (
          <CardMedia component="img" src={imgUrl} sx={{height: "24rem"}} />
        )}

        {!imgUrl && postText && (
          <Typography variant="body1">{postText}</Typography>
        )}
      </CardContent>

      <CardActions>
        <ButtonGroup
          variant="text"
          sx={{"& .MuiButtonGroup-grouped": {border: "none"}, mr: 0}}
        >
          <Btn sx={{color: "secondary.main"}}>
            <ArrowUpwardIcon />
            {likes}
          </Btn>
          <Btn sx={{color: "primary.main"}}>
            <ArrowDownwardIcon />
          </Btn>
        </ButtonGroup>

        <Btn>{commentsCount} Comments</Btn>
        <Btn>Share</Btn>
      </CardActions>
    </Card>
  );
};

export default Post;
