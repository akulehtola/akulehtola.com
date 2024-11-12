import { createRoot } from 'react-dom/client'
import './index.css'
import ProfilePictureContainer from './ProfilePictureContainer/Component'
import NameContainer from './NameContainer/Component'
import SocialsContainer from './SocialsContainer/Component'

createRoot(document.getElementById('root')!).render(
    <div className="mainContainer">
      <ProfilePictureContainer/>
      <NameContainer />
      <SocialsContainer />
    </div>
)
