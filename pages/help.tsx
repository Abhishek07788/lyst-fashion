import React from "react";
import { Box, Typography, Grid, IconButton, Stack, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { styled } from "@mui/material/styles";
import Layout from "@/src/layouts/Layout";
import { ASSETS } from "@/src/assets/assetsPath";
import ImageComponent from "@/src/common/components/ImageComponent";

const StyledPaper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "70vh",
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const Help = () => {
  return (
    <Layout pageName="Help">
      <StyledPaper>
        <ImageComponent
          src={ASSETS.helpImg}
          alt="help"
          height={"50%"}
          width={"100%"}
          style={{ borderRadius: "12px" }}
        />
        <Box
          mt={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          <HelpOutlineIcon color="primary" fontSize="large" />
          <Typography variant="h4" component="h1" fontWeight={"bold"} ml={1}>
            Need Help?
          </Typography>
        </Box>
        <Typography variant="h6" color={"black"} fontWeight={"bold"} mb={4}>
          If you have any questions or need assistance, feel free to contact us!
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              component={Link}
              href="tel:9758207006"
              underline="none"
              color="inherit"
            >
              <IconButton>
                <PhoneIcon color="primary" />
              </IconButton>
              <Typography variant="h6">9758207006</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              component={Link}
              href="mailto:abhisheksolanki1020@gmail.com"
              underline="none"
              color="inherit"
            >
              <IconButton>
                <EmailIcon color="primary" />
              </IconButton>
              <Typography variant="h6">
                abhisheksolanki1020@gmail.com
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </StyledPaper>
    </Layout>
  );
};

export default Help;
