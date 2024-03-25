import { Box, Button, Container, Link, Stack, SxProps, Typography } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import { AiOutlineArrowRight } from "react-icons/ai";
interface HomeheroProps {
    headTitle: string,
    headDescription: string,
    headImage: string,
    buttonBoolean?: boolean,
    buttonCTA?: string,
    learnMoreBoolean?: boolean,
    topLineBoolean?: boolean
}
const heroWrapper1: SxProps = {
    flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
    alignItems: { sm: "center" },
    justifyContent: { md: 'space-between' }
}
const heroWrapper2: SxProps = {
    flexDirection: 'column',
    alignItems: { xs: "center", sm: "center", md: 'flex-start' },
}

const btn1: SxProps = {
    color: 'white',
    background: '#3D63EA',
    marginTop: '30px',
    padding: { xs: '8px 10px', sm: '10px 15px', md: '10px 15px' }
}

const btn2: SxProps = {
    // padding: {xs : '8px 10px' , sm: '10px 15px', md: '10px 20px'}
    color: '#57007B',
    fontFamily: 'Inter',
    wordWrap: 'break-word',
    display: 'flex',
    flexDirection:'row',
    alignItems:'flex-end',
    columnGap: '5px',
    marginTop:'10px'
}

const Homehero = ({ headTitle, headDescription, headImage, buttonCTA, buttonBoolean, learnMoreBoolean, topLineBoolean }: HomeheroProps) => {
    const matches = useMediaQuery('(max-width:768px)');

    return (
        <Container sx={{ marginTop: '20px' }}>
            <Box>
                <Stack sx={heroWrapper1}>
                    <Box sx={{ width: { sm: '100%', md: '40%', lg: '40%' } }}>
                        <Stack sx={heroWrapper2}>
                            {topLineBoolean && <div className="DecoLine" style={{ width: 69, height: 5, background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)' }} />}
                            <Typography variant="h2" className={matches ? ` text-middle` : ''}>{headTitle}</Typography>
                            {matches &&
                                <img src={headImage} alt="hey" className="image-responsiveness" />}
                            <Typography variant="h5" sx={{ marginTop: '30px' }} className={matches ? ` text-middle` : ''}>{headDescription}</Typography>
                            {buttonBoolean && <Button className="herobtn" sx={btn1}>{buttonCTA}</Button>}
                            {learnMoreBoolean &&
                                    <Link underline="hover" className=""  sx={{columnGap: '5px', cursor:'pointer'}}>
                                        <Typography variant="h6" sx={btn2}>
                                            See more Informations<AiOutlineArrowRight
                                                style={{
                                                    color: '#57007b',
                                                    fontSize: '20px'}}
                                            />
                                        </Typography>
                                    </Link>
                            }
                        </Stack>
                    </Box>
                    {!matches && <img src={headImage} alt="hey" className="image-responsiveness" />}
                </Stack>
            </Box>
        </Container>
    )
}

export default Homehero
