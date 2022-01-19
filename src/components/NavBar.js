import * as React from "react";
import Link from "next/link";
import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useRouter } from "next/router";
import { Container, Grid } from "@mui/material";
import { useAuth } from "../contexts/auth";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function NavBar() {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { push } = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Grid
            container
            spacing={2}
            alignItems="center"
            // justifyContent="space-evenly"
          >
            <Grid container item justifyContent="center">
              <Typography px={3} variant="h5" component="div">
                <Link href={"/dashboard"}>Keylogger</Link>
              </Typography>
              <Link href={"/dashboard"}>
                <Button color="inherit">Inicio</Button>
              </Link>
              <Link href={"/dashboard/clientes"}>
                <Button color="inherit">Clientes</Button>
              </Link>
              <Link href={"/dashboard/reportes"}>
                <Button color="inherit">Reportes</Button>
              </Link>
              <Link href={"/dashboard/archivados"}>
                <Button color="inherit">Archivados</Button>
              </Link>
              <Link href={"/dashboard/favoritos"}>
                <Button color="inherit">Favoritos</Button>
              </Link>
              {/*<div>{!!user ? user.role : "sin usuario"}</div>*/}
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="Usuairo"
                sx={{ mr: 2 }}
                id="demo-customized-button"
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                onClick={handleClick}
              >
                {!!user ? user.nickname : "sin usuario"}
                <KeyboardArrowDownIcon />
              </IconButton>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <Link href={"/profile"}>
                  <MenuItem onClick={() => push("/profile")} disableRipple>
                    <AdminPanelSettingsIcon />
                    Perfil
                  </MenuItem>
                </Link>
                {/* <MenuItem onClick={handleClose} disableRipple>
                  <FileCopyIcon />
                  Duplicate
                </MenuItem> */}
                <Divider sx={{ my: 0.5 }} />
                {/*<Link href={"/"}>*/}
                <MenuItem
                  onClose={handleClose}
                  disableRipple
                  onClick={handleLogout}
                >
                  <ExitToAppIcon />
                  Salir
                </MenuItem>
                {/*</Link>*/}
                {/* <MenuItem onClick={handleClose} disableRipple>
                  <MoreHorizIcon />
                  More
                </MenuItem> */}
              </StyledMenu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
