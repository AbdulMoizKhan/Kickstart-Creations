import { Box, Container, Stack, SxProps, Typography } from "@mui/material";
import { content } from './content';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ImagetextProps {
  headTitle: string;
  description1: string;
  subDescription1: string;
  imageUrl: string;
  direction?: "row" | "row-reverse";
}

const boxWrapper1 : SxProps ={
  width : {sm : '100%'  , md : '40%'}
} 
const boxWrapper2 : SxProps ={
  width : {sm : '100%'  , md : 'auto'}
} 
const ImageText = ({ headTitle, description1, subDescription1, imageUrl, direction }: ImagetextProps) => {
  const matches = useMediaQuery('(max-width:768px)');
  if (matches){
    direction = undefined
  }
  return (
    <>
      <Container>
          <Stack direction={direction} justifyContent={"space-between"} sx={{ columnGap: '70px' }}>
            <Box sx={boxWrapper1}>
              <Stack direction={"column"} justifyContent={"center"} spacing={4} sx={{ height: '100%' }}>
                <Typography variant="h4" sx={{ fontWeight: '600', fontFamily: 'Helvetica' }}>{headTitle}</Typography>
                {matches && imageUrl && <img src={imageUrl} alt="Image" className="image_responsive"/>}
                <Typography variant="body1" sx={{ color: '#2D3748', fontSize: 18, fontFamily: 'Inter', fontWeight: '400' }}>{description1}</Typography>
                <Typography variant="body1" sx={{ color: '#2D3748', fontSize: 18, fontFamily: 'Inter', fontWeight: '400' }} dangerouslySetInnerHTML={{ __html: subDescription1 }}>
                </Typography>
              </Stack>
            </Box>
            <Box sx={boxWrapper2}>
              {!matches &&imageUrl && <img src={imageUrl} alt="Image" height={'450px'} />}
            </Box>
          </Stack>
      </Container>
    </>
  );
};

const ImageComponent = () => {
  // const matches = useMediaQuery('(max-width:760px)');

  return (
    <Box sx={{ background: "rgb(249, 249, 255)", paddingBottom: "40px" }}>
      <Typography variant="h3" align="center" sx={{ padding: '40px 0px 20px 0px',fontWeight:'400' }}>Way of building <br /> <span style={{fontWeight:'700'}}>Great Software</span></Typography>
      {content?.map((imageText, index) => {
        const direction = index % 2 === 0  ? "row" : "row-reverse";
        return (
          <ImageText
            key={index}
            headTitle={imageText.headTitle}
            description1={imageText.description1}
            subDescription1={imageText.subDescription1}
            imageUrl={imageText.imageUrl}
            direction={direction}
          />
        );
      })}
    </Box>
  );
};

export { ImageText, ImageComponent };
