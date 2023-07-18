// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard details={item} key={item.id} />
    }
    return <ProjectTimelineCard details={item} key={item.id} />
  }

  return (
    <div className="app-container">
      <div className="timeline-container">
        <h1 className="my-journey-heading">
          MY JOURNEY OF <br />
          <span className="ccbp-heading">CCBP 4.0</span>
        </h1>
        <div className="timeline-chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            slideShow
          >
            {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimeLineView
