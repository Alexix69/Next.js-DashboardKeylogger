import React from "react";
import { Container, Grid } from "@mui/material";
import Layout from "../../components/Layout";
import ClientsTable from "../../components/ClientsTable";
import useSWR from "swr";
import ReportsTable from "../../components/ReportsTable";
import withAuth from "../../hocs/withAuth";

const Clients = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  return (
    <Layout>
      <Container>
        <Grid marginTop={10}>
          {!!data ? <ClientsTable data={data} /> : <p> Cargando datos ...</p>}
        </Grid>
      </Container>
    </Layout>
  );
};

export default withAuth(Clients);
