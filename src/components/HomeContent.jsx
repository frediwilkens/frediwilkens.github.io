import React from 'react'
import myimage from '../images/my-image.jpeg';
function HomeContent() {
  return (
    <main className='main-content'>
      <div>
          <img className='my-image' src={ myimage } alt="frederico wilkens" />
      </div>
      <div>
        <p className="my-name">
          Frederico Wilkens
        </p>
        <p className="job-title">
          Junior Full Stack Developer
        </p>
      </div>
    </main>
  )
}

export default HomeContent;