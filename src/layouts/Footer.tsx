import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ASSETS } from "../assets/assetsPath";

const Footer = () => {
  const textStyles = {
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "blue",
      textDecoration: "underline",
    },
  };

  return (
    <Grid
      style={{
        borderTop: "1px solid black",
        marginTop: "30px",
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{ backgroundColor: "#f5f4f2", padding: 4, paddingTop: 12 }}
      >
        <Grid item xs={12} sm={6} sx={{ padding: 4 }}>
          <Box sx={{ width: "100%", marginBottom: 4 }}>
            <img src={ASSETS.footerImg} alt="img" style={{ width: "100%" }} />
          </Box>
          <Typography
            sx={{
              textAlign: "left",
              marginTop: 4,
              width: "80%",
              marginLeft: [0, 0, 12.5, 12.5],
            }}
          >
            Learn about the Lyst app for iPhone, iPad and Android.
          </Typography>
          <Typography
            sx={{ textAlign: "left", marginLeft: [0, 0, 12.5, 12.5] }}
          >
            © 2022 Lyst
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={6} spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "left",
                paddingLeft: 6,
                marginLeft: [0, 0, 2.5, 2.5],
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "25px", fontWeight: "600" }}
              >
                INTERNATIONAL
              </Typography>
              {[
                "Lyst - AU",
                "Lyst - CA",
                "Lyst - UK",
                "Lyst - Österreich",
                "Lyst - Schweiz",
                "Lyst - Deutschland",
                "Lyst - España",
                "Lyst - France",
                "Lyst - Italia",
                "Lyst - 日本",
                "Lyst - België",
                "Lyst - Nederland",
              ].map((item) => (
                <Typography key={item} sx={textStyles}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "left",
                paddingLeft: 6,
                marginLeft: [0, 0, 2.5, 2.5],
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "25px", fontWeight: "600" }}
              >
                Help and info
              </Typography>
              {[
                "Help center",
                "About us",
                "Shipping policy",
                "Returns policy",
                "Payments",
                "Refund policy",
                "Developers",
                "Careers",
                "Contact",
                "Terms & conditions",
                "Privacy & cookie policy",
                "Intellectual property",
                "Categories",
                "Become a partner",
                "Lyst Insights",
                "Lyst News",
              ].map((item) => (
                <Typography key={item} sx={textStyles}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
