import React from "react";
import { Grid, AppBar, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import Logo from "../Assets/logo.svg";
import Switch from "./Switch.jsx";
import { ALLOW_MULTLINGUAL_TOGGLE } from "../utilities/constants.js";

function AppHeader({ showSwitch }) {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const showAdminButton = location.pathname.startsWith("/admin");

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) => theme.palette.background.header,
        height: "5rem",
        boxShadow: "none",
        borderBottom: (theme) => `1.5px solid ${theme.palette.primary[50]}`,
        padding: "0 3rem",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="appHeight100"
      >
        <Grid item>
          <img src={Logo} alt="App main Logo" height={80} />
        </Grid>

        <Grid item>
          <Grid container alignItems="center" spacing={2}>
            <Grid item sx={{ display: ALLOW_MULTLINGUAL_TOGGLE && showSwitch ? "flex" : "none" }}>
              <Switch />
            </Grid>

            {showAdminButton && (
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => navigate("/admin-login")}
                  sx={{
                    backgroundColor: "#D63F09",
                    color: "white",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    padding: "8px 20px",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "#B53207",
                    },
                  }}
                >
                  Admin
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default AppHeader;
