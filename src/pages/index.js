import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import Layout from "../components/Layout";
import ChartPie from "../components/ChartPie";
import TableReports from "../components/TableReports";

export default function Home() {
  return (
    <Layout>
      <Grid
        marginTop={10}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={4} sm={2} alignItems="center" justifyContent="center">
            <Grid>
              <ChartPie />
            </Grid>
            <Grid paddingY={1}>
              <Typography align="center">Actividad</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={2} alignItems="center" justifyContent="center">
            <Grid>
              <ChartPie />
            </Grid>
            <Grid paddingY={1}>
              <Typography align="center">Infectadas</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={2} alignItems="center" justifyContent="center">
            <Grid>
              <ChartPie />
            </Grid>
            <Grid paddingY={1}>
              <Typography align="center">KeyStrokes</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={2} alignItems="center" justifyContent="center">
            <Grid>
              <ChartPie />
            </Grid>
            <Grid paddingY={1}>
              <Typography align="center">Screen</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={2} alignItems="center" justifyContent="center">
            <Grid>
              <ChartPie />
            </Grid>
            <Grid paddingY={1}>
              <Typography align="center">Web</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} md={14} Width={300} marginTop={5}>
          <TableReports />
        </Grid>
      </Grid>
    </Layout>
  );
}
