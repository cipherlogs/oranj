import {Avatar, Stack, Typography} from "@mui/material";

const CommunityAvatar = ({userName, url, size = 24}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1} pt={1}>
      <Avatar src={url} alt="OP avatar" sx={{width: size, height: size}} />
      <Typography variant="subtitle2" color="white">
        {userName}
      </Typography>
    </Stack>
  );
};

export default CommunityAvatar;
