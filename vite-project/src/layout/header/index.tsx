import {
  Box,
  Stack,
  SxProps,
  Drawer,
  IconButton,
  Container,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import TextButton from '../../components/text-button';
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const TextLinks = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/aboutus" },
  { title: "Services", url: "/services" },
  { title: "How It Works", url: "/how-it-works" }
];


const wrapper : SxProps ={
    boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.10)',
    height: { xs: "60px", sm: "75px", md: "90px" },
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
    position: "relative",
    width: "100%",

};

const btnWrapper: SxProps = {
  borderRadius: "8px",
  background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
};

const navbarWrap: SxProps = {
  mb: { md: 0, xs: 2 },
  mt: { md: 0, xs: 1 },
  display: {
    md: "flex",
    xs: "none",
  },
};

const drawerBtn: SxProps = {
  marginLeft: "auto",
  display: {
    md: "none",
    xs: "flex",
  },
};
// const closeBtn = (variant: string | null | undefined): SxProps => {
//   return {
//     color: variant === "light" ? "text.primary" : "text.secondary",
//     "&:hover": { color: "error.main" },
//   };
// };
// const drawerItems: SxProps = {
//   borderBottom: "1px solid #4b4040",
//   padding: "15px 20px",
//   display: "block",
//   textAlign: "center",
// };

export const Header = () => {
  // const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const location = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Box sx={wrapper}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Link to={'/'}>
            <img src={logo} alt="" className="header_logo" />
            </Link>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={5}
              sx={navbarWrap}

            >
              {TextLinks?.map((text) => {
                return (
                  <TextButton
                    title={text.title}
                    hoverColor={"tomato"}
                    redirectLink={text.url}
                    key={text.title}
                  />
                );
              })}
              <Box pl={10}>
                <Button
                  variant="contained"
                  sx={btnWrapper}
                >
                  Contact us
                </Button>
              </Box>
            </Stack>

            <IconButton
              sx={drawerBtn}
              size="large"
              edge="start"
              aria-label="logo"
              onClick={toggleDrawer}
            >
              <MenuIcon
              />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: {
                  backgroundColor: "white",
                  width: "100%",
                },
              }}
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box sx={{ alignSelf: "end" }}>
                <IconButton
                  sx={{
                    margin: "12px 16px 5px 0px",
                  }}
                  size="medium"
                  onClick={toggleDrawer}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Drawer>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
