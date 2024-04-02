import { Box, Container, Typography } from '@mui/material';

const PageNotFound = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="h5" gutterBottom>
            Oops! Looks like you've stumbled upon a page that is under development.
          </Typography>
          <Typography variant="body1">
            Don't worry, we're working on it and it will be launched soon.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default PageNotFound;
