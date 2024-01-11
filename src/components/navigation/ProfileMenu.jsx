import { Tooltip, IconButton, Menu, MenuItem, Divider } from "@mui/material";

import BaseItem from "@shared/BaseItem";
import DropDownList from "@shared/DropDownList";
import SectionList from "@shared/SectionList";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useToggle from "@hooks/useToggle";
import { userProfileItems } from "@data/app.data";

const parseMenuItems = (item, i) => {
  const styles = { sx: { height: "3.6rem" } };

  const wrap = (Component) => (initProps) => (props) => (
    <Component {...{ ...initProps, ...props }} />
  );

  switch (item.type) {
    case "divider":
      return <Divider key={i} />;

    case "nested":
      return <DropDownList key={i} {...item} />;

    case "section":
      return <SectionList key={i} {...item} />;

    default:
      return <BaseItem key={i} wrapper={wrap(MenuItem)(styles)} {...item} />;
  }
};

const ProfileMenu = () => {
  const { el, open, handleClick, handleClose } = useToggle();

  return (
    <>
      <Tooltip title="Account Menu">
        <IconButton
          onClick={handleClick}
          aria-haspopup="true"
          aria-controls={open ? "account-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
        >
          <MoreHorizIcon color="text.secondary" />
        </IconButton>
      </Tooltip>
      <Menu
        id="account-menu"
        anchorEl={el}
        open={open}
        // onClick={handleClose}
        onClose={handleClose}
      >
        {userProfileItems.map(parseMenuItems)}
      </Menu>
    </>
  );
};

export default ProfileMenu;
