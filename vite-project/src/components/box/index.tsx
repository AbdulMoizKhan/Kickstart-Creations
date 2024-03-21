import { Box, Button, Container, Grid, SxProps, Typography } from "@mui/material";
import boxarrow from '../../assets/Boxarrow.png';

const button: SxProps = {
    background: 'linear-gradient(225deg, #FFC656 0%, #F16063 100%)',
    borderRadius: '5px',
    border: '1px white solid',
    color: '#FAFAFA',
    fontSize: '18px',
    fontWeight: '700',
    padding: '14px 25px'
}

const Wrapper: SxProps = {
    background: 'linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%)',
    borderRadius: '20px'
}
const gridWrapper: SxProps = {
    padding: '15px 30px',
    rowGap: '20px',
}

const typo: SxProps = {
    color: '#29272E',
    fontSize: 35,
    fontWeight: 700,
    paddingLeft: '20px'
}

const btnimg : SxProps = {
    position: 'relative',
    top: '-100px',
    left:'50px'
}

const BoxWrapper = () => {
    return (
        <>
            <Container>
                <Box sx={Wrapper}>
                    <Grid container sx={gridWrapper} alignItems={"center"}>
                        <Grid item xs={8} sm={6} md={4} lg={8}>
                            <Typography sx={typo}>
                                Hire the best developers and designers around!
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sm={6} md={4} lg={4} sx={btnimg}>
                            <img src={boxarrow} alt="" style={{ position: 'relative', bottom: '-134px', left: '70px' }} />
                            <Button sx={button}>Hire Top Developers</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default BoxWrapper
