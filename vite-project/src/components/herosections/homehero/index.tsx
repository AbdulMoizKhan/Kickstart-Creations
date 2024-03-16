import { Box, Button, Container, Stack, Typography } from "@mui/material"

interface HomeheroProps {
    headTitle: string,
    headDescription: string,
    headImage: string,
    buttonBoolean?: boolean,
    buttonCTA?: string,
    learnMoreBoolean?: boolean,
    topLineBoolean?:boolean
}

const Homehero = ({headTitle,headDescription,headImage,buttonCTA,buttonBoolean,learnMoreBoolean, topLineBoolean}: HomeheroProps) => {
    return (
        <Container sx={{marginTop:'20px'}}>
            <Box>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Stack direction={"column"}>
                        {topLineBoolean && <div className="DecoLine" style={{width: 69, height: 5, background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)'}} />}
                        <Typography variant="h2">{headTitle}</Typography>
                            <Typography variant="h5" sx={{marginTop:'30px'}}>{headDescription}</Typography>
                            { buttonBoolean && <Button className="herobtn" sx={{color:'white',background:'#3D63EA' , marginTop:'30px'}}>{buttonCTA}</Button>}
                            { learnMoreBoolean && <Button className="herobtn" sx={{color:'white',background:'#3D63EA' , marginTop:'30px'}}>See more Informations </Button>}
                        </Stack>
                    </Box>
                    <Box>
                        <img src={headImage} alt="hey"  />
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}

export default Homehero
