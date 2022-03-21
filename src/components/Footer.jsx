import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="footer-content">
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/frederico-wilkens/">
        <FontAwesomeIcon className="a-link linkedin" icon={ faLinkedin } />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/frediwilkens">
        <FontAwesomeIcon className="a-link github" icon={ faGithub } />
      </a>
    </footer>
  )
}

export default Footer;
