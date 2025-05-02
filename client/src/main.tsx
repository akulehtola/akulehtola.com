import { createRoot } from 'react-dom/client'
import './index.css'
import NameCard from './Components/NameCard/Component'
import SocialsCard from './Components/SocialsCard/Component'
import TechStackCard from './Components/TechStackCard/Component'
import ProjectsCard from './Components/ProjectsCard/Component'
import ExperienceCard from './Components/ExperienceCard/Component'

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
      <div className="column">
        <div className="card">
          <ProjectsCard/>
        </div>
        <div className="card">
          <ExperienceCard/>
        </div>
      </div>
    </div>
)
