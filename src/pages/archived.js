import React from 'react'
import { Container, Grid } from '@mui/material'
import Layout from '../components/Layout'
import TableArchive from '../components/TableArchive'

const archived = () => {
    return (
        <Layout>
            <Container>
                <Grid marginTop={10}>
                    <TableArchive/>
                </Grid>
            </Container>
        </Layout>
    )
}

export default archived
