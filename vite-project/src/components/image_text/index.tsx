import { Box, Container, Stack, Typography } from "@mui/material";
import imgtext1 from '../../assets/imgtext1.png';

interface ImagetextProps {
    headTitle: string,
    description1: string,
    subDescription1: string
}


const ImageText = ({ headTitle, description1, subDescription1 }: ImagetextProps) => {


    return (
        <div>
            <Container>
                <Box>
                    <Stack direction={"row"} sx={{ columnGap: '70px' }}>
                        <Box>
                            <Stack direction={"column"} justifyContent={"center"} spacing={4} sx={{ height: '100%' }}>
                                <Typography variant="h4" sx={{ fontWeight: '600' }}>{headTitle}</Typography>
                                <Typography variant="body1" sx={{ color: '#2D3748', fontSize: 18, fontFamily: 'Inter', fontWeight: '400' }}>{description1}</Typography>
                                <Typography variant="body1" sx={{ color: '#2D3748', fontSize: 18, fontFamily: 'Inter', fontWeight: '400' }}>{subDescription1}</Typography>
                            </Stack>
                        </Box>
                        <img src={imgtext1} alt="" />
                    </Stack>
                </Box>
            </Container>
        </div>
    );
};

const AnotherComponent = () => {
    return (
        <div>
            {/* Your another component content here */}
        </div>
    );
};

export { ImageText, AnotherComponent };