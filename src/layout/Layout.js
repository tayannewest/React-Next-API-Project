import ParticleBackground from '../ParticleBackground'
import { Container } from './LayoutStyles'



export const Layout = ({children}) => {
    return (
      <Container>
        <ParticleBackground />
       {/* <Header/> */}
       <main>{children}</main> 
       {/* <Footer/> */}
      </Container>
    )
  }
  