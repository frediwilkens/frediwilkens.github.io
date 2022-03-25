import React from 'react'
const address = 'https://frediwilkens.github.io/';

const ProjectCard = ({
  img,
  alt,
  title,
  resume,
  techs,
  project,
}) => {
  return (
    <div className="project-card">
      <div className="card-image-container">
        <img
          className="card-image"
          src={ img }
          alt={ alt }
        />
      </div>
      <div className="card-info-container">
        <h3 className="card-title">{ title }</h3>
        <p className="card-resume">{ resume }</p>
      </div>
      <div className="card-info-container">
        <h3 className="card-techs-title">Technologies</h3>
        <ul className="card-ul">
          { techs.map((tech) => (
            <li className="card-li">{ `--> ${tech}` }</li>
          ))}
        </ul>
      </div>
      <div className="card-link-container">
        <a
          href={`${address}${project}`}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          explore here
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;