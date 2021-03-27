import React from 'react';

// import { Container } from './styles';
import '../styles/sidebar.scss';

const SideBar: React.FC = ({ children }) => {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {children}
      </div>

    </nav>
  )
}

export default SideBar;