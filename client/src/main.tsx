import { createRoot } from 'react-dom/client'
import './index.css'
import ProfilePictureCard from './Components/ProfilePictureCard/Component'
import NameCard from './Components/NameCard/Component'
import SocialsCard from './Components/SocialsCard/Component'
import AboutMeCard from './Components/AboutMeCard/Component'

createRoot(document.getElementById('root')!).render(
    <div className="main-container">
      <div className="f">
        <ProfilePictureCard />
        <NameCard />
      </div>
      <div className="s">
        <SocialsCard />
        <AboutMeCard />
      </div>
    </div>
)
