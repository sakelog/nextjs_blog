import * as React from "react"
import { Link } from "gatsby"

// Icon
import { FaGithubAlt, FaTwitter } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const SocialIcon = () => {
  return (
    <ul className="sl-inline-list">
    <li>
      <a
        href="https://github.com/sakelog"
        target="_blank"
        rel="noopener noreferrer"
        role="presentation"
        aria-label="Github"
        className="sl-icon"
      >
        <FaGithubAlt />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/sake_engineer"
        target="_blank"
        rel="noopener noreferrer"
        role="presentation"
        aria-label="Twitter"
        className="sl-icon"
      >
        <FaTwitter />
      </a>
    </li>
    <li>
      <Link
        to="/contact/"
        role="presentation"
        aria-label="Mail"
        className="sl-icon"
      >
        <FiMail />
      </Link>
    </li>
  </ul>
  )
}

export default SocialIcon