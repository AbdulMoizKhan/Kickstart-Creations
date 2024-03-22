import { Divider } from "@mui/material"
import Homehero from "../../components/herosections/homehero"
import { Carousal } from "../../components/carousal/landingcarousal"
import HeroWrapper from "../../assets/Hero-Wrapper__image.png"
import about from "../../assets/Abou-us-Video.png"
import { ImageComponent } from "../../components/image_text"
import BoxWrapper from "../../components/box"

export const Home = () => {
  return (
    <>
      <Homehero
        headTitle="Great Product is built by great teams"
        headDescription="We help build and manage a team of world-class developers to bring your vision to life"
        headImage={HeroWrapper}
        buttonBoolean={true}
        buttonCTA="Let’s get started!"
      />
      <Divider sx={{ borderColor: '#fff', margin: '40px 0px' }}></Divider>
      <Carousal />
      <Divider sx={{ borderColor: '#fff', margin: '70px 0px' }}></Divider>
      <Homehero
        headTitle="Leading companies trust us to develop software"
        headDescription="We add development capacity to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project."
        headImage={about}
        buttonBoolean={false}
        buttonCTA="Let’s get started!"
        learnMoreBoolean={true}
        topLineBoolean={true}
      />
      <Divider sx={{ borderColor: '#fff', margin: '40px 0px' }}></Divider>
      <ImageComponent/>
      <Divider sx={{ borderColor: '#fff', margin: '40px 0px' }}></Divider>
      <BoxWrapper/>
      <Divider sx={{ borderColor: '#fff', margin: '60px 0px' }}></Divider>
    </>
  )
}
