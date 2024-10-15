import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, AwardIcon, Share2Icon, HelpCircleIcon, InfoIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">LithiumElectro</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"><HomeIcon size={20} /> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard"><AwardIcon size={20} /> Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/social"><Share2Icon size={20} /> Social</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help"><HelpCircleIcon size={20} /> Help</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"><InfoIcon size={20} /> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;