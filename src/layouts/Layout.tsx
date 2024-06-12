import { Grid } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
  pageName: string;
}

const Layout = ({
  children,
  hideNav = false,
  hideFooter = false,
  pageName,
}: Props) => {
  return (
    <>
      <Head>
        <title>Lyst Fashion | {pageName ?? ""}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid>
        {!hideNav && <Navbar />}
        <Grid minHeight={"70vh"}>{children}</Grid>
        {!hideFooter && <Footer />}
      </Grid>
    </>
  );
};

export default Layout;
