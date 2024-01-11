import {
  MenuItem,
  List,
  ListItemButton,
  Collapse,
  Button,
  Box,
} from "@mui/material";

import { useState } from "react";

import useSwitch from "@hooks/useSwitch";
import BaseItem from "@shared/BaseItem";
import useToggle from "@hooks/useToggle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const DropDownList = (props) => {
  const isItemOpen = Boolean(props.isOpen);
  const { on, handleSwitch } = useSwitch(isItemOpen);
  const [showMore, SetShowMore] = useState(false);
  const listLimit = 5;
  const isLongList = props.data.length > listLimit;
  const styles = { height: "3.8rem" };

  return (
    <List sx={{ p: 0 }}>
      <MenuItem onClick={handleSwitch} sx={styles}>
        <BaseItem
          {...{ ...props, ...{ EdgeIcon: on ? ExpandLess : ExpandMore } }}
        />
      </MenuItem>
      <Collapse in={on} unmountOnExit>
        {props.data
          .slice(0, showMore ? undefined : listLimit)
          .map((prop, i) =>
            prop.type === "nested" ? (
              <DropDownList key={i} {...prop} />
            ) : (
              <ListItemButton key={i} sx={{ pl: 6 }}>
                <BaseItem {...prop} />
              </ListItemButton>
            ),
          )}

        {isLongList && (
          <Box sx={{ textAlign: "center", pt: 1, pb: 2 }}>
            <Button
              size="small"
              sx={{ color: "text.primary" }}
              onClick={() => SetShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </Button>
          </Box>
        )}
      </Collapse>
    </List>
  );
};

export default DropDownList;
