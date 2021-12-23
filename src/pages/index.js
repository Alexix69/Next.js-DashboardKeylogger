import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Layout from "../components/Layout";
import ChartPie from "../components/ChartPie";
import TableReports from "../components/TableReports";

export default function Home() {
  return (
    <Layout>
      <Grid
        marginTop={10}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid
        display="flex"
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <ChartPie />
        <ChartPie />
        <ChartPie />
      </Grid>
        
        <TableReports/>
      </Grid>
    </Layout>
  );
}
