import React from 'react'

function AboutContent() {
  return (
    <div className="about-content">
      <div className="about-me-info">
        <p>I'm a web development student at <a className="trybe-link" target="_blank" rel="noreferrer" href="https://www.betrybe.com/">Trybe</a> and graduating in Systems Analysis and Development. I like challenging experiences and found in programming the eternal challenge of constant learning which I am 100% committed.</p>
      </div>

      <div className="general-info">
        <h2>General Information</h2>
        <ul>
          <li>Name: Frederico Filippi Wilkens</li>
          <li>Age: 28</li>
          <li>Nationality: Brazil/Italian</li>
        </ul>
      </div>

      <div className="curiosity-info">
        <h2>When I'm not coding or studying</h2>
        <ul>
          <li>Really enjoy to go out with my friends</li>
          <li>I'm a big football fan</li>
          <li>Love to play videogames (not race games)</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutContent;