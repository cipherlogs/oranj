import {Fragment} from "react";
import {ListItemIcon, ListItemText} from "@mui/material";

const BaseItem = ({MainIcon, text, EdgeIcon, wrapper, primarySx={}}) => {
  const styles = {textWrap: "nowrap"};
  const Tag = wrapper ?? Fragment;

  return (
    <Tag>
      {MainIcon && (
        <ListItemIcon sx={{color: "text.primary"}}>
          <MainIcon fontSize="small" />
        </ListItemIcon>
      )}
      <ListItemText
        primary={text}
        sx={styles}
        primaryTypographyProps={primarySx}
      />
      {EdgeIcon && (
        <ListItemIcon>
          <EdgeIcon />
        </ListItemIcon>
      )}
    </Tag>
  );
};

export default BaseItem;
