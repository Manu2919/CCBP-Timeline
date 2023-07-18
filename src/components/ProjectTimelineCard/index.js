// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = details
  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="head-section">
        <h1 className="course-name">{projectTitle}</h1>
        <div className="duration-section">
          <AiFillCalendar className="clock-img" />
          <p className="clock-time">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
