import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, duration, description, tagsList} = details
  return (
    <div className="course-card">
      <div className="head-section">
        <h1 className="course-name">{courseTitle}</h1>
        <div className="duration-section">
          <AiFillClockCircle className="clock-img" />
          <p className="clock-time">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="technologies-section">
        {tagsList.map(item => (
          <p className="tag-item">{item.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
