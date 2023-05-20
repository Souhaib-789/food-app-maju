import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid, TextField } from '@mui/material';
import styles from '../../style';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
            onClick={handleClickOpen}
                      size="large"
                      color="inherit"
                      sx={[
                        styles.bgColor1,
                        { color: "#ffffff", marginRight: "10px" },
                      ]}
                    >
                Book Table
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Table Booking
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Container>
                        <Box sx={[styles.justifyContentBetween, { display: 'flex' }]}>

                            <Typography gutterBottom sx={{ marginRight: '10px' }}>
                                Quantity
                            </Typography>

                            <TextField sx={{width:"300px"}} id="outlined-basic" label="Enter Qunatity" variant="outlined" />
                        </Box>
                        <Box sx={[styles.justifyContentBetween, { display: 'flex' }]}>

                            <Typography gutterBottom sx={{ marginRight: '10px' }}>
                                Date
                            </Typography>
                            <LocalizationProvider  dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                    <DatePicker sx={{width:"300px"}} label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
                                  
                                </DemoContainer>
                            </LocalizationProvider>
                        </Box>
                        {/* <Box sx={[styles.justifyContentBetween, { display: 'flex' }]}>

                            <Typography gutterBottom sx={{ marginRight: '10px' }}>
                                Time
                            </Typography>
                        </Box> */}
                    </Container>
                </DialogContent>
                <DialogActions>
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
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
