import Widget from '../../Components/widget/Widget'
import PerformanceBox from '../../Components/PerformanceBox/PerformanceBox'
import './Home.scss'
import OverviewBox from '../../Components/OverviewBox/OverviewBox'


const Home = () => {
  return (
    <div className='home'>
      <div className="homeContainer">
        <h1>DASHBOARD</h1>
      <div className="widgets">
        <Widget type="transaction"/>
        <Widget type="users"/>
        <Widget type="artworks"/>
      </div>
      <div className="sales_box">
        <OverviewBox/>
        <PerformanceBox/>
      </div>

      </div>
     
    </div>
  )
}

export default Home