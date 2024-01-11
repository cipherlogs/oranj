import {
  Box,
  Stack,
  Typography,
  Button,
  Link,
  Divider,
  ListItemButton,
} from "@mui/material";

const ctaStles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  p: 1,
};

import DropDownList from "@shared/DropDownList";
import BaseItem from "@shared/BaseItem";
import {sideListItems} from "@data/app.data";

const SideList = () => {
  return (
    <Stack
      sx={{height: "100%", width: "100%", py: 1}}
      justifyContent="space-between"
    >
      <Box sx={{color: "text.secondary"}}>
        {sideListItems.map((item, i) =>
          item.type === "divider" ? (
            <Divider key={i} sx={{my: 1}} />
          ) : item.type === "nested" ? (
            <DropDownList key={i} {...item} />
          ) : (
            <BaseItem key={i} wrapper={ListItemButton} {...item} />
          ),
        )}
      </Box>
      <Box sx={ctaStles}>
        <Typography
          variant="body2"
          color="text.disabled"
          align="center"
          gutterBottom
          mb={1}
        >
          Create an account to follow your favorite communities and start
          taking part in conversations.
        </Typography>
        <Button color="secondary" variant="outlined">
          Join Oranj
        </Button>
        <Link href="#" color="text.secondary" variant="overline" mt="1rem">
          Oranj, © Inc 2024.
        </Link>
      </Box>
    </Stack>
  );
};

export default SideList;
