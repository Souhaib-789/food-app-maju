import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from '../../style';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    return (
        <Grid container sx={{ padding: "40px",backgroundColor:"#FBFBFB" }} >
            <Grid item sm={12} lg={12}>
                <Container sx={[styles.justifyContentBetween, { display: 'flex', }]}>
                    <Typography
                        sx={[styles.w50, { marginBottom: 0, }]}
                        gutterBottom

                        variant="h5"
                        component="div"
                    >
                        Get connected with us on social networks
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
                    <p>

                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                </Container>
            </Grid>
            {/* <Grid item sm={12} lg={2}>
                <Container sx={[styles.justifyContentCenter, { alignItems: 'center', marginTop: '15px' }]}>
                    <Typography
                        sx={[styles.w100,styles.textCenter, { marginBottom: 2, }]}
                        gutterBottom

                        variant="body1"
                        component="div"
                    >
                        About
                    </Typography>
                    <Typography
                        sx={[styles.w100,styles.textCenter, { marginBottom: 2, }]}
                        gutterBottom

                        variant="body1"
                        component="div"
                    >
                        Contact
                    </Typography>
                    <Typography
                        sx={[styles.w100,styles.textCenter, { marginBottom: 2, }]}
                        gutterBottom

                        variant="body1"
                        component="div"
                    >
                        Policies
                    </Typography>
                </Container>
            </Grid> */}
            <Grid item sm={6} md={2} lg={2}>
                <Container sx={[styles.justifyContentCenter, { marginTop: '15px' }]}>
                    <Typography
                        sx={[styles.w100,styles.textCenter, { marginBottom: 2, }]}
                        gutterBottom

                        variant="body1"
                        component="div"
                    >
                        About
                    </Typography>
                    <Typography
                        sx={[styles.w100,styles.textCenter, { marginBottom: 2, }]}
                        gutterBottom

                        variant="body1"
                        component="div"
                    >
                        Contact
                    </Typography>
                    <Typography
                        sx={[styles.w100,styles.textCenter, { marginBottom: 2, }]}
                        gutterBottom

                        variant="body1"
                        component="div"
                    >
                        Policies
                    </Typography>
                </Container>
            </Grid>
            <Grid item sm={6} md={6} lg={5}>
                <Container sx={[styles.justifyContentCenter, { marginTop: '15px' }]}>
                    <Typography
                        sx={[styles.w100,styles.textCenter, { marginBottom: 2, }]}
                        gutterBottom
                 variant="body1"
                        component="div"
                    >
                        New York, NY 10012, US

                    </Typography>
                    <Typography
                        sx={[styles.w100,styles.textCenter, { marginBottom: 2, }]}
                        gutterBottom

                        variant="body1"
                        component="div"
                    >
                        info@example.com

                    </Typography>
                    <Typography
                        sx={[styles.w100,styles.textCenter, { marginBottom: 2, }]}
                        gutterBottom

                        variant="body1"
                        component="div"
                    >

                        + 01 234 567 89
                    </Typography>
                </Container>
            </Grid>
        </Grid>

    )
}
