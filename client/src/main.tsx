import { createRoot } from 'react-dom/client'
import './index.css'
import NameCard from './Components/NameCard/Component'
import SocialsCard from './Components/SocialsCard/Component'
import TechStackCard from './Components/TechStackCard/Component'

createRoot(document.getElementById('root')!).render(
    <div className="main-container">
      <div className="column">
        <div className="card">
          <NameCard/>
        </div>
        <div className="card">
          <SocialsCard/>
        </div>
        <div className="card">
          <TechStackCard/>
        </div>
      </div>
    </div>
)
