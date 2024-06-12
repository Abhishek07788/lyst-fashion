import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { styled, alpha } from "@mui/material/styles";
import { ASSETS } from "../assets/assetsPath";
import { useTheme } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { PATHS } from "../routes";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5px",
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  border: "1px solid black",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { isAuth, logOutUser, email } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = router.pathname;
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      router.push("/search");
    }
  };

  const links = [
    { path: PATHS.men, title: "MEN" },
    { path: PATHS.women, title: "WOMEN" },
  ];

  const helpAndRegion = (
    <>
      <Typography variant="body1" sx={{ marginRight: "20px" }}>
        IN-USS
      </Typography>
      <Typography variant="body1" sx={{ marginRight: "20px" }}>
        Help
      </Typography>
    </>
  );

  const logo = (
    <NextLink href="/" passHref>
      <Box
        component="img"
        sx={{
          height: isMobile ? 20 : 40,
          marginRight: 2,
        }}
        src={ASSETS.logo}
        alt="Logo"
      />
    </NextLink>
  );

  const linkTab = (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      {links.map((link) => (
        <NextLink key={link.path} href={link.path} passHref>
          <Typography
            variant="h6"
            sx={{
              margin: "0 10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: 400,
            }}
            color={link.path === pathname ? "teal" : "black"}
          >
            {link.title}
          </Typography>
        </NextLink>
      ))}
    </Box>
  );

  const SearchBar = (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="SEARCH (EG. ACNE JEANS)"
        inputProps={{ "aria-label": "search" }}
        onKeyDown={handleKeyDown}
        sx={{ width: isMobile ? "100%" : "auto" }}
      />
    </Search>
  );

  const cartIcon = (
    <IconButton
      color="inherit"
      component={NextLink}
      href="/cart"
      sx={{ marginLeft: isMobile ? "5px" : "10px" }}
    >
      <Badge badgeContent={4} color="warning">
        <ShoppingCartOutlinedIcon
          sx={{ height: isMobile ? 28 : 35, width: isMobile ? 28 : 35 }}
        />
      </Badge>
    </IconButton>
  );

  const RegisterButton = (
    <Button
      size="small"
      color="inherit"
      variant="contained"
      sx={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "4px",
        textTransform: "none",
        marginRight: isMobile ? "5px" : "20px",
        "&:hover": {
          bgcolor: "grey",
        },
      }}
    >
      Sign up or Log in
    </Button>
  );

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: "none",
        borderBottom: "1px solid #ccc",
        p: 1,
        transform: `translateY(-${scrollPosition}px)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      {isMobile ? (
        <Grid>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {logo}
            {RegisterButton}
          </Stack>
          <Container maxWidth="xl">
            <Box mt={2}>{SearchBar}</Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              {linkTab}
              {helpAndRegion}
              {cartIcon}
            </Box>
          </Container>
        </Grid>
      ) : (
        <Grid>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            {helpAndRegion}
            {RegisterButton}
          </Stack>
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Grid
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                {logo}
                {linkTab}
              </Grid>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {SearchBar}
                {cartIcon}
              </Box>
            </Toolbar>
          </Container>
        </Grid>
      )}
    </AppBar>
  );
};

export default Navbar;
