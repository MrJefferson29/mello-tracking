import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Header = () => {
  const { activeUser, authToken } = useContext(AuthContext);
  const [auth, setAuth] = useState(!!authToken);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // <-- control navbar expanded state
  const navigate = useNavigate();

  // Sync auth state from AuthContext or localStorage changes
  useEffect(() => {
    setAuth(!!authToken || !!localStorage.getItem("authToken"));
    setTimeout(() => setLoading(false), 1200);
  }, [authToken]);

  // Navbar scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close navbar when a link is clicked
  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Styles scrolled={scrolled}>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        expanded={expanded}               // control expanded state here
        onToggle={(isExpanded) => setExpanded(isExpanded)} // sync toggle state
        className={`navy ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="brand" tabIndex={0} onClick={handleLinkClick}>
            FlashFleet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" className="toggle" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            {loading ? (
              <div className="loading" aria-live="polite" aria-busy="true">
                Loading...
              </div>
            ) : (
              <Nav className="nav-links">
                <NavLink className="link" to="/" end onClick={handleLinkClick}>
                  Home
                </NavLink>
                <NavLink className="link" to="/tracking" onClick={handleLinkClick}>
                  Track
                </NavLink>
                {auth && (
                  <NavLink className="link" to="/create-post" onClick={handleLinkClick}>
                    New Package
                  </NavLink>
                )}
                <NavLink className="link" to="/about" onClick={handleLinkClick}>
                  About
                </NavLink>
                <NavLink className="link" to="/meet-the-team" onClick={handleLinkClick}>
                  Team
                </NavLink>
                <NavLink className="link" to="/summary" onClick={handleLinkClick}>
                  Insights
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  /* Your existing styles */
  --primary-color: #0d6efd;
  --primary-hover: #0b5ed7;
  --background-color: #ffffff;
  --background-scrolled: #f8f9fa;
  --shadow-color: rgba(0, 0, 0, 0.12);

  .brand {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    color: var(--primary-color);
    padding: 8px 0;
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--primary-hover);
      transform: scale(1.05);
      outline: none;
    }
  }

  .toggle {
    background: #e2e6ea;
    border-radius: 5px;
    padding: 6px 10px;
    transition: background-color 0.3s ease;
    border: none;

    &:hover,
    &:focus {
      background-color: var(--primary-color);
      color: #fff;
      outline: none;
    }
  }

  .navy {
    background-color: var(--background-color);
    box-shadow: 0 3px 8px var(--shadow-color);
    padding: 0.7rem 0;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &.scrolled {
      background-color: var(--background-scrolled);
      box-shadow: 0 4px 12px var(--shadow-color);
    }
  }

  .loading {
    font-size: 1.5rem;
    color: var(--primary-color);
    padding: 15px 0;
    animation: fadeIn 0.8s ease-in-out infinite alternate;
  }

  @keyframes fadeIn {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .link {
    font-size: 1.1rem;
    text-decoration: none;
    font-weight: 600;
    color: #333;
    position: relative;
    transition: color 0.3s ease-in-out;

    &:hover,
    &:focus {
      color: var(--primary-hover);
      outline: none;
    }

    &.active {
      color: var(--primary-color);
      font-weight: 700;

      &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--primary-color);
        border-radius: 2px;
        transition: width 0.3s ease;
      }
    }

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
`;
