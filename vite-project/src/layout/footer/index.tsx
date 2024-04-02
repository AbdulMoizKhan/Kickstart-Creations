import {
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
  Grid,
  SxProps,
  Container,
  Divider,
} from "@mui/material";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";
import TextButton from "../../components/text-button";
import greylogo from '../../assets/greylogo.png'

const wrapper: SxProps = {
  background: 'rgb(249, 249, 255)',
  pt:'30px',
  pl:{xs:'40px'}
};

export const Footer = () => {
  const socials = [
    {
      icon: <IoLogoInstagram />,
      size: "40px",
      link: "https://www.instagram.com/",
    },
    {
      icon: <RiFacebookFill  />,
      size: "40px",
      link:
        "https://www.facebook.com/",
    },
    {
      icon: <BsTwitterX  />,
      size: "40px",
      link:
        "https://www.facebook.com/",
    },
    {
      icon: <FaLinkedinIn  />,
      size: "40px",
      link:
        "https://www.linkedin.com/",
    },
  ];

  const routes = [
    {
      title: "Navigation",
      links: [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about" },
        { title: "Services", url: "/services" }
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Our Focus", url: "/focus" },
        { title: "Our Mission", url: "/about" },
      ],
    },
    {
      title: "Support",
      links: [{ title: "Contact Us", url: "/contact-us" }],
    },
  ];
  return (
    <>
      <Box sx={wrapper}>
      <Container sx={{ px: 0 }}>
      <Grid container m={2} spacing={{ xs: 1, sm: 3, md: 6 }} mb={8}>
            {routes?.map((route) => {
              return (
                <Grid item xs={6} sm={3} md={2} key={route.title}>
                  <Box>
                    <Typography
                      sx={{
                        marginBottom: "10px",
                      }}
                      variant="h6"
                    >
                      {route.title}
                    </Typography>
                    <Stack spacing={1}>
                      {route.links?.map((text) => {
                        return (
                          <TextButton
                            color={"#000"}
                            title={text.title}
                            hoverColor={"#f40809"}
                            redirectLink={text.url}
                            key={text.title}
                          />
                        );
                      })}
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
            <Grid item xs={6} sm={3} md={6}>
              <Box
                sx={{
                  maxWidth: "180px",
                  height: "160px",
                  mx: "auto",
                  mr: { xs: "80px", sm: "30px" },
                }}
              >
                <Stack direction={"column"} alignItems={"center"} >
                  <Link href="/">
                    <img src={greylogo} alt="" className="footor_logo" />
                  </Link>
                  <Stack direction={"row"} sx={{
                    position: 'relative',
                    top: '-78px',
                    left: {xs :'-20px'}
                  }}>
                    {socials?.map((icon, iconIndex) => {
                      return (
                        <IconButton
                          key={`social${iconIndex}`}
                          className="footer-icons"
                          style={{
                            fontSize: icon.size,
                            height: icon.size,
                            width: icon.size,
                            boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.15)',
                            padding: '10px 10px',
                            margin: '10px 10px 0px 10px'
                          }}
                          href={icon.link}
                          target="_blank"
                        >
                          {icon.icon}
                        </IconButton>
                      );
                    })}
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Stack
            direction={{ md: "row", xs: "column" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={2}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              width={{ md: "25%", xs: "100%" }}
              order={{ md: 2, xs: 1 }}
            >
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ background: 'rgb(249, 249, 255)' }}>
        <Divider sx={{ borderColor: '#CBD5E0', margin: '0px 0px 20px 0px', width: "100%" }}></Divider>
        <Stack
          width={{ md: "100%" }}
          order={{ md: 1, xs: 2 }}
          spacing={2}
        >
          <Typography mt={2} align="center" sx={{ mb: '20px !important' }}>
            Copyright <MdCopyright /> 2024. All rights reserved
          </Typography>
        </Stack>
      </Box>
    </>
  )
}
