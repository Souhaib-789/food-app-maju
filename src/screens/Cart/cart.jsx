import React from "react";
import { Box, Container, Grid } from "@mui/material";
import styles from "../../style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import TextField from "@mui/material/TextField";
// import Container from '@mui/';
import DeleteIcon from "@mui/icons-material/Delete";
import Footer from "../Footer/footer";
import CustomizedDialogs from "../Modal/modal";
export default function Cart() {
  return (
    <>
    {/* <CustomizedDialogs/> */}
      <Container
        sx={[styles.alignItemsCenter, styles.mt1, { display: "flex" }]}
      >
        <Grid sx={[styles._white]} container spacing={2}>
          <Grid item lg={12} sx={[{ marginBottom: "20px" }]}>
            <Grid sx={[styles._white]} container spacing={2}>
              <Grid
                sm={12}
                lg={12}
                sx={[
                  styles.flexRow,
                  styles.alignItemsCenter,
                  { display: "flex" },
                ]}
              >
                <Card
                  sx={[
                    styles.w100,
                    styles.shadow6,
                    {
                      display: "flex",
                      paddingRight: 2,
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                    },
                  ]}
                >
                  <CardContent
                    sx={[
                      styles.alignItemsStart,
                      styles.justifyContentBetween,

                      { display: "flex" },
                    ]}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      sx={[styles.w40]}
                      image="data:image/jpeg;base64,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"
                      alt="green iguana"
                    />
                    <CardContent sx={[{ paddingRight: 0 }]}>
                      <Typography
                        sx={{ marginBottom: 3 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      color="inherit"
                      sx={[styles.bgColor1, { color: "#ffffff" }]}
                    >
                      <DeleteIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12} sx={[styles.w100, { marginBottom: "20px" }]}>
            <Grid sx={[styles._white]} container spacing={2}>
              <Grid
                sm={12}
                lg={12}
                sx={[
                  styles.flexRow,

                  styles.alignItemsCenter,
                  styles.w100,
                  { display: "flex" },
                ]}
              >
                <Card
                  sx={[
                    styles.w100,
                    styles.shadow6,
                    {
                      padding: "10px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                    },
                  ]}
                >
                  <CardContent
                    sx={[
                      styles.alignItemsStart,
                      styles.justifyContentBetween,
                      styles.w100,
                      { display: "flex" },
                    ]}
                  >
                    <CardContent
                      sx={[{ width: "95%", padding: "0px !important" }]}
                    >
                      <Typography
                        sx={{ marginBottom: 0 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Order Details
                      </Typography>
                      <Box
                        sx={[
                          styles.flexWrap,
                          styles.justifyContentBetween,
                          styles.w100,
                          { display: "flex", alignItems: "baseline" },
                        ]}
                      >
                        <Typography
                          sx={{ marginBottom: 0 }}
                          gutterBottom
                          variant="body1"
                          component="div"
                        >
                          Address
                        </Typography>
                        <TextField
                          sx={[styles.w60]}
                          id="standard-basic"
                          label="Karachi,Pakistan...."
                          variant="standard"
                        />
                      </Box>
                      <Box
                        sx={[
                          styles.flexWrap,
                          styles.justifyContentBetween,
                          styles.w100,
                          { display: "flex", alignItems: "baseline" },
                        ]}
                      >
                        <Typography
                          sx={{ marginBottom: 0 }}
                          gutterBottom
                          variant="body1"
                          component="div"
                        >
                          Payment Method
                        </Typography>

                        <TextField
                          id="standard-basic"
                          sx={[styles.w60]}
                          label="Standard"
                          variant="standard"
                        />
                      </Box>
                    </CardContent>
                  </CardContent>
                  <CardActions
                    className="btn-con"
                    sx={[styles.justifyContentEnd, , { marginRight: 0 }]}
                  >
                    <Button
                      size="large"
                      color="inherit"
                      sx={[
                        styles.bgColor1,
                        { color: "#ffffff", marginRight: "10px" },
                      ]}
                    >
                      Confirm
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
