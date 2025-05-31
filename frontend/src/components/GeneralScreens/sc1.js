import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import g2 from "../../Assets/g2.jpg";
import co1 from "../../Assets/co1.png";
import co2 from "../../Assets/co2.png";
import co3 from "../../Assets/co3.png";
import co4 from "../../Assets/co4.png";
import b1 from "../../Assets/b1.jpg";
import vid from '../../Assets/vid.mp4';
import j1 from '../../Assets/j1.jpeg';
import Sc2 from './Sc2';

export default function Sc1() {
  return (
    <Styles>
      <HeroSection>
        <ImageCol md="6" className="image-container">
          <img src={j1} alt="Hero" />
          <OverlayText>
            <MainHeading>Safe and Reliable Delivery & Logistics Solutions</MainHeading>
            <SubHeading>
              Providing flexible, improved service levels, and accelerated delivery with utmost care!
            </SubHeading>
          </OverlayText>
        </ImageCol>
        <TextCol md="6" className="desktop-text">
          <MainHeading>Safe and Reliable Delivery & Logistics Solutions</MainHeading>
          <SubHeading>
            Providing flexible, improved service levels, and accelerated delivery with utmost care!
          </SubHeading>
        </TextCol>
      </HeroSection>
      <FeatureSection>
        <Col md="3" sm="6">
          <Card>
            <img src={co1} className="icon" alt="Efficient Delivery" />
            <h3>Efficient Reliable Delivery</h3>
            <p>
              We enhance our logistics operations to ensure safe and efficient delivery of cargo, relieving you of the worries associated with freight forwarding.
            </p>
            <a href="/summary" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="3" sm="6">
          <Card>
            <img src={co2} className="icon" alt="Transparent Pricing" />
            <h3>Transparent Pricing</h3>
            <p>
              Our transparent pricing model ensures there are no hidden costs, even for specialized pet & cargo delivery services.
            </p>
            <a href="/summary" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="3" sm="6">
          <Card>
            <img src={co3} className="icon" alt="Security For Pets" />
            <h3>Secure Cargo Handling</h3>
            <p>
              Our facilities and procedures meet high security requirements, ensuring your goods are handled with the utmost care and are transported safely.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="3" sm="6">
          <Card>
            <img src={co4} className="icon" alt="Warehouse Storage" />
            <h3>Safe Storage</h3>
            <p>
              We offer specialized storage solutions for goods, ensuring their safety and comfort while in our care.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
      </FeatureSection>
      <InfoSection>
        <Col md="6" sm="12" className="image-col">
          <StyledImage src={b1} alt="Logistics Solutions" />
        </Col>
        <Col md="6" sm="12" className="text-col">
          <InfoHeading>
            Safe, Reliable, and Express Delivery & Transport Solutions That Save Your Time!
          </InfoHeading>
          <InfoText>
            FlashFleet Inc. is a leading logistics operator specializing in the safe and efficient delivery of goods. We provide a full range of services in customs clearance and transportation worldwide for pets and any type of cargo.
            <br />
            <br />
            Our commitment to delivering the best transport and shipping services extends to our pet delivery solutions. Our skilled personnel, utilizing the latest tracking and processing software combined with decades of experience, ensure your pets are transported safely and efficiently. Through integrated supply chain solutions, Seaborne Freight & FlashFleet Inc. drive sustainable competitive advantages for some of the world’s largest companies.
            <br />
            <br />
            <ul className="custom-list">
              <li>Real-Time Tracking</li>
              <li>24/7 Hours Support</li>
              <li>Easy Payment Methods</li>
              <li>Fast & Efficient Delivery</li>
            </ul>
          </InfoText>
        </Col>
      </InfoSection>
      <Sc2 />
    </Styles>
  );
}

const theme = {
  primary: "#1b4d3e",      // deep green (darker teal)
  secondary: "#f97316",    // warm orange
  lightGreen: "rgba(27, 77, 62, 0.75)", // overlay background
  textLight: "#f5f5f5",
  textDark: "#222",
  accentPink: "#f72585",
};

const Styles = styled.div`
  overflow-x: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

// Main Hero Section styling
const HeroSection = styled(Row)`
  background-color: ${theme.primary};
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 1rem;
`;

// Text Column styling for desktop
const TextCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 3rem 4rem;

  &.desktop-text {
    @media (max-width: 767px) {
      display: none; // Hide this on mobile, show only overlay text on image
    }
  }
`;

// Image Column styling with relative positioning for overlay
const ImageCol = styled(Col)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  img {
    width: 100%;
    border-radius: 14px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
    object-fit: cover;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;

// Overlay Text on Image for mobile screens
const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.textLight};
  text-align: center;
  padding: 18px 24px;
  max-width: 85%;
  background: ${theme.lightGreen};
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  user-select: none;

  @media (min-width: 768px) {
    display: none; // Hide overlay text on larger screens
  }
`;

// Main Heading
const MainHeading = styled.h1`
  font-weight: 900;
  font-size: 2.4rem;
  margin: 10px 0 8px;
  line-height: 1.15;
  color: ${theme.textLight};

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
`;

// Sub Heading
const SubHeading = styled.h2`
  font-weight: 600;
  font-size: 1.3rem;
  margin: 8px 0 0;
  line-height: 1.4;
  color: ${theme.textLight};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

// Feature Section styling
const FeatureSection = styled(Row)`
  margin: 60px 0;
  padding: 0 5vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

// Card Component Styling
const Card = styled.div`
  background-color: #fff;
  padding: 32px 28px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .icon {
    width: 90px;
    margin-bottom: 18px;
    filter: drop-shadow(0 0 0.5px rgba(0,0,0,0.1));
  }

  h3 {
    margin: 16px 0 14px;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${theme.primary};
  }

  p {
    color: #444;
    font-size: 1.05rem;
    margin-bottom: 18px;
    line-height: 1.5;
  }

  .learn-more {
    color: ${theme.secondary};
    text-decoration: none;
    font-weight: 700;
    border-bottom: 2px solid ${theme.secondary};
    padding-bottom: 3px;
    transition: color 0.3s, border-color 0.3s;

    &:hover {
      color: darken(${theme.secondary}, 10%);
      border-color: darken(${theme.secondary}, 10%);
    }
  }
`;

const InfoSection = styled(Row)`
  margin-top: 60px;
  padding: 0 5vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  .image-col {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .text-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const InfoHeading = styled.h1`
  color: ${theme.textDark};
  font-weight: 900;
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 3.8rem;
  }

  @media (max-width: 767px) {
    font-size: 2.2rem;
  }
`;

const InfoText = styled.p`
  color: ${theme.textDark};
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }

  .custom-list {
    list-style: none;
    padding-left: 0;
  }

  .custom-list li {
    margin-bottom: 12px;
    padding-left: 32px;
    position: relative;
    font-weight: 600;
    font-size: 1.05rem;
  }

  .custom-list li::before {
    content: "✔";
    color: ${theme.accentPink};
    font-size: 22px;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 2px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 620px;
  border-radius: 14px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
  object-fit: cover;
`;
