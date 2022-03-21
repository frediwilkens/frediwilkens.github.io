import React from 'react'

function AboutContent() {
  return (
    <div className="about-content">
      <div className="about-me-info">
        <p>I'm a web development student at <a className="trybe-link" target="_blank" rel="noreferrer" href="https://www.betrybe.com/">Trybe</a> and graduating in Systems Analysis and Development. I like challenging experiences and found in programming the eternal challenge of constant learning which I am 100% committed. I'm looking for my first job as developer and I'm determined to evolve until reach the Full Stack.</p>
      </div>

      <div className="general-info">
        <h2>General Information</h2>
        <ul>
          <li><p>Name: Frederico Filippi Wilkens</p></li>
          <li><p>Age: 28</p></li>
          <li><p>Country: Brazil</p></li>
          <li><p>State: Rio Grande do Sul</p></li>
          <li><p>City: Porto Alegre</p></li>
        </ul>
      </div>

      <div className="curiosity-info">
        <h2>When I'm not coding or studying</h2>
        <ul>
          <li>Really enjoy to go out with my friends</li>
          <li><p>I'm a big football fan I was also a football teacher</p></li>
          <li><p>Love to play videogames (not race games)</p></li>
        </ul>
      </div>
    </div>
  )
}

export default AboutContent;