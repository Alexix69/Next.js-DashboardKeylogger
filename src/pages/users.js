import React from "react";
import { Container, Grid } from "@mui/material";
import Layout from "../components/Layout";
import TableReports from "../components/TableReports";
import TableUsers from "../components/TableUsers";

const users = () => {
  return (
    <Layout>
      <Container>
        <Grid marginTop={10}>
            <TableUsers/>
        </Grid>
      </Container>
    </Layout>
  );
};

export default users;
