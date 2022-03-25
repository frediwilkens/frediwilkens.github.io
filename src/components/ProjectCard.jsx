import React from 'react'
import PropTypes from 'prop-types';
const address = 'https://frediwilkens.github.io/';

const ProjectCard = ({
  title,
  resume,
  techs,
  project,
}) => {
  return (
    <div className="project-card">
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

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  project: PropTypes.string.isRequired,
}

export default ProjectCard;