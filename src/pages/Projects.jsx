import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
const walletTechs = ['React','React-router-dom', 'Redux', 'CSS'];
const starWarsTechs = ['React', 'ContextAPI', 'React Hooks', 'CSS'];

const Projects = () => {
  return (
    <>
      <Header />
      <div className="projects-container">
        <ProjectCard
          title='My Wallet'
          resume='A financial control app where you can add your expenses in diferent currencies and get the total in BRL.'
          techs={ walletTechs }
          project='fw-wallet'
        />
        <div className="divisor"></div>
        <ProjectCard
          title="Star Wars Planet Search"
          resume="Explore Star Wars planets fltering them up to five times."
          techs={ starWarsTechs }
          project={'star-wars-planet-search'}
        />
      </div>
      <Footer />
    </>
  )
}


export default Projects;