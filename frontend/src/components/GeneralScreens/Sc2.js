import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import v1 from "../../Assets/v1.jpg";
import v2 from "../../Assets/v2.jpg";
import v3 from "../../Assets/v3.jpg";
import Team from "./Team";
import TestimonialSlider from "./Testimonials";
import Sc3 from "./Sc3";
import vid from "../../Assets/vid.mp4";
import vid2 from "../../Assets/vid2.mp4";

export default function Sc2() {
  const cardData = [
    {
      imgSrc: v1,
      alt: "Warehouse Inventory",
      title: "Warehouse on Hand Inventory",
      description: `Flashfleet, a distinguished logistics company, meticulously
                    manages its warehouse on-hand inventory to ensure efficiency,
                    accuracy, and seamless operations, providing both package and
                    pet delivery services to enhance customer satisfaction.`,
    },
    {
      imgSrc: v2,
      alt: "Minimize Manufacturing Costs",
      title: "Minimize Cost of Manufacturing",
      description: `Flashfleet, a forward-thinking logistics company, strategically
                    reduces manufacturing costs through innovation, ensuring
                    competitive rates for both cargo and pet transportation.`,
    },
    {
      imgSrc: v3,
      alt: "Documents & Electronic Data",
      title: "Documents & Electronic Data",
      description: `FlashFleet exemplifies efficiency in managing documents and
                    electronic data through a robust system tailored to the
                    complexities of the shipping and transportation industry,
                    including pet logistics.`,
    },
  ];

  const additionalArticles = [
    {
      title: "Efficient Last-Mile Delivery Solutions",
      description: `Discover how FlashFleet optimizes last-mile delivery to reduce costs and improve customer satisfaction.`,
    },
    {
      title: "Technological Advances in Delivery",
      description: `Exploring the latest innovations that make FlashFleet a leader in modern delivery solutions.`,
    },
    {
      title: "Eco-Friendly Packaging for Sustainable Delivery",
      description: `Learn about FlashFleet's commitment to sustainability with eco-friendly packaging initiatives.`,
    },
  ];

  return (
    <Styles>
      {/* Cards Section */}
      <section aria-label="Key service highlights" className="card-grid">
        {cardData.map((card, index) => (
          <article className="card" key={index} tabIndex="0">
            <img src={card.imgSrc} alt={card.alt} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
              <a
                href="summary"
                className="card-button"
                aria-label={`Read more about ${card.title}`}
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Additional Articles Section */}
      <section
        aria-label="Additional delivery-related articles"
        className="additional-articles"
      >
        <h3>More Articles on Delivery Innovations</h3>
        <Row>
          {additionalArticles.map((article, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <article className="article-card" tabIndex="0">
                <h4 className="article-title">{article.title}</h4>
                <p className="article-description">{article.description}</p>
                <a href="/summary" className="article-button">
                  Read More
                </a>
              </article>
            </Col>
          ))}
        </Row>
      </section>

      {/* Video Section */}
      <section aria-label="Delivery insights video" className="video-section">
        <h3>Delivery Insights & Tips</h3>
        <Row className="video-row">
          <Col md={6} sm={12}>
            <StyledVideo controls preload="metadata" tabIndex="0">
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </StyledVideo>
          </Col>
        </Row>
      </section>

      {/* Hero Section */}
      <section className="hero-container" aria-label="Hero section">
        <div className="hero-content">
          <h3>Your Package, Your Pet, Your Rules</h3>
          <h1>
            The Best Possible Service In The Sphere Of Optimized Route Of Cargo,
            Pet, & Transportation Worldwide
          </h1>
          <button className="hero-button" aria-label="Schedule an appointment">
            Schedule an Appointment
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" aria-label="Management team">
        <h3>Meet Our Management Team</h3>
        <Team />
      </section>

      {/* Testimonials Section */}
      <section className="yela" aria-label="Customer testimonials">
        <h3>What they say about us</h3>
        <TestimonialSlider />
      </section>

      {/* Second Video Section */}
      <section aria-label="Additional delivery video" className="video-section">
        <Row>
          <Col md={6} sm={12}>
            <StyledVideo controls preload="metadata" tabIndex="0">
              <source src={vid2} type="video/mp4" />
              Your browser does not support the video tag.
            </StyledVideo>
          </Col>
        </Row>
      </section>

      {/* Next Section */}
      <section>
        <Sc3 />
      </section>
    </Styles>
  );
}

const Styles = styled.div`
  /* General Reset for Card Grid */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    padding: 40px 20px 60px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover,
    &:focus-within {
      transform: translateY(-8px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
      outline: none;
    }
  }

  .card-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-bottom: 4px solid #f97316;
    flex-shrink: 0;
    transition: transform 0.3s ease;

    .card:hover & {
      transform: scale(1.05);
    }
  }

  .card-content {
    padding: 24px 28px 32px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .card-title {
    font-size: 1.8rem;
    color: #165153;
    margin-bottom: 16px;
    font-weight: 700;
  }

  .card-description {
    font-size: 1.1rem;
    color: #444;
    line-height: 1.6;
    margin-bottom: auto;
    font-weight: 500;
  }

  .card-button {
    margin-top: 24px;
    align-self: flex-start;
    background-color: #f97316;
    color: white;
    padding: 12px 28px;
    border-radius: 6px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 4px 8px rgb(249 115 22 / 0.4);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover,
    &:focus {
      background-color: #ea640a;
      box-shadow: 0 6px 12px rgb(234 100 10 / 0.6);
      outline-offset: 3px;
      outline-color: #f97316;
    }
  }

  /* Additional Articles */
  .additional-articles {
    padding: 50px 15px 70px;
    background-color: #f9fafb;
    max-width: 1200px;
    margin: 0 auto;

    h3 {
      font-size: 2.4rem;
      margin-bottom: 40px;
      color: #165153;
      font-weight: 700;
    }
  }

  .article-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    padding: 28px 24px 32px;
    margin-bottom: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover,
    &:focus-within {
      transform: translateY(-6px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
      outline: none;
    }
  }

  .article-title {
    font-size: 1.4rem;
    color: #165153;
    margin-bottom: 14px;
    font-weight: 700;
  }

  .article-description {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
    flex-grow: 1;
  }

  .article-button {
    margin-top: 20px;
    font-weight: 600;
    color: #f97316;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: #ea640a;
      outline-offset: 3px;
      outline-color: #f97316;
    }
  }

  /* Video Section */
  .video-section {
    padding: 60px 15px;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;

    h3 {
      font-size: 2.2rem;
      margin-bottom: 40px;
      color: #165153;
      font-weight: 700;
    }
  }

  .video-row {
    display: flex;
    justify-content: center;
    gap: 40px;
  }

  /* Hero Section */
  .hero-container {
    background-image: url("your-image-source.jpg");
    background-size: cover;
    background-position: center;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px 15px;
    position: relative;
    overflow: hidden;
    color: #fff;
  }

  .hero-container::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0)
    );
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    background-color: rgba(22, 81, 83, 0.92);
    padding: 40px 35px;
    border-radius: 12px;
    max-width: 720px;
  }

  .hero-content h3 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .hero-content h1 {
    font-size: 2.6rem;
    font-weight: 800;
    line-height: 1.2;
  }

  .hero-button {
    margin-top: 30px;
    padding: 16px 38px;
    font-size: 1.2rem;
    font-weight: 800;
    border-radius: 8px;
    background-color: #f97316;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    text-transform: uppercase;

    &:hover,
    &:focus {
      background-color: #ea640a;
      box-shadow: 0 6px 16px rgba(234, 100, 10, 0.7);
      outline-offset: 4px;
      outline-color: #f97316;
      outline-style: solid;
    }
  }

  /* Team & Testimonials */
  .team-section,
  .yela {
    padding: 60px 15px;
    background-color: #f0f4f8;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;

    h3 {
      font-size: 2.4rem;
      margin-bottom: 40px;
      color: #165153;
      font-weight: 700;
    }
  }

  /* Styled video tag for consistent sizing */
  video {
    width: 100%;
    max-height: 360px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgb(0 0 0 / 0.15);
    outline-offset: 3px;
  }

  /* Responsive tweaks */
  @media (max-width: 768px) {
    .card-image {
      height: 180px;
    }
    .hero-content h1 {
      font-size: 2rem;
    }
    .hero-content {
      padding: 30px 20px;
    }
  }

  @media (max-width: 480px) {
    .card-grid {
      grid-template-columns: 1fr;
    }
    .additional-articles .row {
      margin-left: 0;
      margin-right: 0;
    }
    .video-row {
      flex-direction: column;
      gap: 25px;
    }
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  outline-offset: 4px;
  &:focus {
    outline: 3px solid #f97316;
  }
`;
