import { Container, Grid } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import TableReports from '../components/TableReports'

const reports = () => {
    return (
        <Layout>
            <Container>
                <Grid marginTop={10}>
                    <TableReports/>
                </Grid>
            </Container>
        </Layout>
    )
}

export default reports
