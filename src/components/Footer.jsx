import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer>
      <a href='https://www.linkedin.com/in/frederico-wilkens/'>
        <FontAwesomeIcon className="a-link" icon={ faLinkedin } />
      </a>
      <a href='https://github.com/frediwilkens'>
        <FontAwesomeIcon className="a-link" icon={ faGithub } />
      </a>
    </footer>
  )
}

export default Footer;
