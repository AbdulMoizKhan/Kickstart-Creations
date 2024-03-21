import { Box, Container, Stack, Typography } from "@mui/material";
import {content} from './content';

interface ImagetextProps {
  headTitle: string;
  description1: string;
  subDescription1: string;
  imageUrl: string;
  direction: "row" | "row-reverse";
}

const ImageText = ({ headTitle, description1, subDescription1, imageUrl, direction }: ImagetextProps) => {
  return (
    <div>
      <Container>
        <Box>
          <Stack direction={direction} sx={{ columnGap: '70px' }}>
            <Box>
              <Stack direction={"column"} justifyContent={"center"} spacing={4} sx={{ height: '100%' }}>
                <Typography variant="h4" sx={{ fontWeight: '600' }}>{headTitle}</Typography>
                <Typography variant="body1" sx={{ color: '#2D3748', fontSize: 18, fontFamily: 'Inter', fontWeight: '400' }}>{description1}</Typography>
                <Typography variant="body1" sx={{ color: '#2D3748', fontSize: 18, fontFamily: 'Inter', fontWeight: '400' }}>{subDescription1}</Typography>
              </Stack>
            </Box>
            {imageUrl && <img src={imageUrl} alt="Image" />}
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

const ImageComponent = () => {
  return (
    <>
      {content?.map((imageText, index) => {
        const direction = index % 2 === 0 ? "row" : "row-reverse";
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
    </>
  );
};

export { ImageText, ImageComponent };
