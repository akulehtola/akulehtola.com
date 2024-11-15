import { createRoot } from 'react-dom/client'
import './index.css'
import ProfilePictureContainer from './ProfilePictureContainer/Component'
import NameContainer from './NameContainer/Component'
import SocialsContainer from './SocialsContainer/Component'
import AboutMeContainer from './AboutMeContainer/Component'

createRoot(document.getElementById('root')!).render(
    <div className="main-container">
      <div className="f">
        <ProfilePictureContainer />
        <NameContainer />
      </div>
      <div className="s">
        <SocialsContainer />
        <AboutMeContainer />
      </div>
    </div>
)
