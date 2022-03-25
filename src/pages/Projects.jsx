import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import walletIMG from '../images/fw-wallet.png';
const walletTechs = ['React','React-router-dom', 'Redux', 'CSS'];

const Projects = () => {
  return (
    <>
      <Header />
      <div className="projects-container">
        <ProjectCard
          img={ walletIMG }
          alt='wallet app'
          title='My Wallet'
          resume='A financial control app where you can add your expenses in diferent currencies and get the total in BRL.'
          techs={ walletTechs }
          project='fw-wallet'
        />
      </div>
      <Footer />
    </>
  )
}


export default Projects;