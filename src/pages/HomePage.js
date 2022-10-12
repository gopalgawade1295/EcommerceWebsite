import React, { useEffect } from 'react'
import Product from '../components/Product'
import { listProducts } from '../redux/actions/ProductActions'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, Toolbar, Typography } from '@mui/material'

function HomePage() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <Box sx={{ m: 2 }}>
            <Toolbar sx={{ mb: 3, '@media (max-width: 500px)': { mb: 9 } }} />
            {
                loading ? <Typography variant='caption'>Loading...</Typography> :
                    error ? <Typography variant='caption' sx={{ color: '#FF0000' }}>{error}</Typography> :
                        <Box sx={{ m: 2 }}>
                            <Grid container spacing={2} alignItems='center' justifyContent='center'>
                                {products.map((product) => (
                                    <Grid item lg={3} md={4} sm={6} xs={12} key={product._id}>
                                        <Product product={product} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
            }
        </Box>
    )
}

export default HomePage
