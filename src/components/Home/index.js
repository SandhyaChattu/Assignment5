import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <h1>Find The Job That Fits Your Life</h1>
      <p>
        Millions of people are searching for jobs,salary information,company
        reviews.Find the job fits your abilities and potential.
      </p>
      <button className="job-button">Find Jobs</button>
    </div>
  </div>
)

export default Home
