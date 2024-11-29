import { createRoot } from 'react-dom/client'
import './index.css'
import MainContainer from './Components/MainContainer/Component'
import Column from './Components/Column/Component'
import Card from './Components/Card/Component'
import ProfilePictureCard from './Components/ProfilePictureCard/Component'
import NameCard from './Components/NameCard/Component'
import SocialsCard from './Components/SocialsCard/Component'
import AboutMeCard from './Components/AboutMeCard/Component'

createRoot(document.getElementById('root')!).render(
    <MainContainer>
      <Column>
        <Card>
          <ProfilePictureCard/>
        </Card>
        <Card>
          <NameCard/>
        </Card>
      </Column>
      <Column>
        <Card>
          <SocialsCard/>
        </Card>
        <Card>
          <AboutMeCard/>
        </Card>
      </Column>
    </MainContainer>
)
