import React from 'react'
import { Container, Grid } from '@mui/material'
import Layout from '../components/Layout'
import TableFavorite from '../components/TableFavorite'


const favorites = () => {
    return (
        <Layout>
            <Container>
                <Grid marginTop={10}>
                    <TableFavorite/>
                </Grid>
            </Container>
        </Layout>
    )
}

export default favorites
