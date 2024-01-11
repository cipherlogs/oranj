import {GiOrangeSlice} from "react-icons/gi";
import SearchIcon from "@mui/icons-material/Search";
import {alpha} from "@mui/material/styles";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ProfileMenu from "@navigation/ProfileMenu";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Typography,
  Box,
  Icon,
  InputBase,
  Menu,
} from "@mui/material";

import useToggle from "@hooks/useToggle";
import SideList from "@navigation/SideList";

const Logo = () => {
  const {el, open, handleClick, handleClose} = useToggle();

  const mainLogoStyles = {
    color: "secondary.main",
    fontSize: 40,
    display: {xs: "none", md: "inline-flex"},
  };

  const hamburgerStyles = {
    color: "text.primary",
    display: {xs: "inline-flex", md: "none"},
    minWidth: "auto",
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Button sx={hamburgerStyles} onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        anchorEl={el}
        open={open}
        onClose={handleClose}
        sx={{p: 4, maxWidth: "20rem", display: {md: "none"}}}
      >
        <SideList />
      </Menu>

      <Icon sx={mainLogoStyles}>
        <GiOrangeSlice />
      </Icon>

      <Typography
        variant="h6"
        component="div"
        sx={{color: "secondary.main", fontWeight: 700}}
      >
        Oranj
      </Typography>
    </Stack>
  );
};

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  const styles = {
    width: {xs: "90%", lg: "70%"},
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.7,
    bgcolor: theme => alpha(theme.palette.text.secondary, 0.05),
    borderRadius: 1,
    gap: 1,
    px: 1,
    py: 0.4,
    "&:hover": {
      opacity: 1,
    },
  };

  return (
    <Box align="center" flexGrow={1}>
      <Stack sx={styles} component="form" onSubmit={handleSubmit}>
        <SearchIcon fontSize="small" sx={{color: "text.secondary"}} />
        <InputBase placeholder="Search Reddit" sx={{width: "100%"}} />
      </Stack>
    </Box>
  );
};

const MainBtns = () => {
  const visibleOnSm = {display: {xs: "none", sm: "inline-flex"}};
  const noWrap = {whiteSpace: "nowrap"};

  return (
    <Stack direction="row" spacing={1} mr={1} alignItems="center">
      <Button color="secondary" variant="outlined" sx={{...noWrap, ...visibleOnSm}}>
        <QrCodeScannerIcon /> Get App
      </Button>
      <Button variant="outlined">Login</Button>
    </Stack>
  );
};

const NavBar = () => {
  return (
    <AppBar elevation={0} position="sticky" sx={{bgcolor: "background.paper"}}>
      <Toolbar sx={{px: {xs: 1, md: 4, postion:"relative"}}}>
        <Box>
          <Logo />
        </Box>
        <Search />
        <MainBtns />
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
