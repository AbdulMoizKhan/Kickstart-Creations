import { Outlet } from 'react-router'
import {Footer} from './footer'
import {Header} from './header'

const LandingPageLayout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default LandingPageLayout
