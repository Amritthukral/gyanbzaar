import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCalendarAlt, FaBook, FaStore, FaPhone, FaUser } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import './header.css';
import { UserContext } from '../userContext'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    setUser(null); 
    localStorage.removeItem('user'); 
    navigate('/'); 
  };

  return (
    <>
      <header>
        <nav className="navbar">
          {showToggle && (
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
          <ul className={isOpen ? 'nav-links open' : 'nav-links'} onClick={handleLinkClick}>
            <li>
              <Link to="/home">
                <FaHome className="nav-icon" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about-container">
                <FaInfoCircle className="nav-icon" /> About
              </Link>
            </li>
            <li>
              <Link to="/event">
                <FaCalendarAlt className="nav-icon" /> Events
              </Link>
            </li>
            <li>
              <Link to="/book">
                <FaBook className="nav-icon" /> Book Nest
              </Link>
            </li>
            <li>
              <Link to="/unimart">
                <FaStore className="nav-icon" /> Unimart
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaPhone className="nav-icon" /> Contact
              </Link>
            </li>
            <li className="profile-item">
              <Link to="/profile">
                <FaUser className="nav-icon" /> Profile
              </Link>
            </li>
            <li className="profile-item" onClick={handleLogout}>
                <a href="#logout">
                  <IoMdLogOut className="nav-icon" /> Logout
                </a>
              </li>
          </ul>
          {/* <div className={isOpen ? 'sidebar open' : 'sidebar'}> 
            <ul>
              <li>
                <Link to="/home" onClick={handleLinkClick}>
                  <FaHome className="nav-icon" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about-container" onClick={handleLinkClick}>
                  <FaInfoCircle className="nav-icon" /> About
                </Link>
              </li>
              <li>
                <Link to="/event" onClick={handleLinkClick}>
                  <FaCalendarAlt className="nav-icon" /> Events
                </Link>
              </li>
              <li>
                <Link to="/book" onClick={handleLinkClick}>
                  <FaBook className="nav-icon" /> Book Nest
                </Link>
              </li>
              <li>
                <Link to="/unimart" onClick={handleLinkClick}>
                  <FaStore className="nav-icon" /> Unimart
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick}>
                  <FaPhone className="nav-icon" /> Contact
                </Link>
              </li>
              <li>
                <Link to="/profile" onClick={handleLinkClick}>
                  <FaUser className="nav-icon" /> Profile
                </Link>
              </li>
              <li className="profile-item" onClick={handleLogout}>
                <a href="#logout">
                  <IoMdLogOut className="nav-icon" /> Logout
                </a>
              </li>
            </ul>
          </div> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
