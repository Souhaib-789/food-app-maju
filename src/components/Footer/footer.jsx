import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from '../../style';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Grid container sx={{ padding: "40px", backgroundColor: "#FBFBFB" }} >
            <Grid item sm={12} lg={12}>
                <Container sx={[styles.justifyContentBetween, { display: 'flex', }]}>
                    <Typography
                        sx={[styles.w50, { marginBottom: 0, }]}
                        gutterBottom

                        variant="h5"
                        component="div"
                    >
                        Food you love , delivered to you.
                    </Typography>

                    <Box sx={[styles.w25, styles.justifyContentBetween, { display: "flex" }]}>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <LinkedInIcon />

                    </Box>

                </Container>
            </Grid>
            <Grid item sm={12} md={4} lg={5}>
                <Container>
                    <p style={{ marginTop: '5%', color: 'grey' }}>
                        We have multile restaurants listing above according to your selected city. Just select one of your favorite and grab your meal at your doorstep. Further if you can book a slot for dinnig at dinner you can also book a table.
                    </p>
                </Container>
            </Grid>

            
        </Grid>

    )
}
