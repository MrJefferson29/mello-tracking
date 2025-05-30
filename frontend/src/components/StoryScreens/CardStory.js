import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
import pin from "../../Assets/pin.png";

const customIcon = new L.Icon({
  iconUrl: pin,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Story = ({ story }) => {
  const hasValidCoordinates = !isNaN(story.lat) && !isNaN(story.long);

  return (
    <Styles>
      <Container fluid className="story-container" role="main" aria-label="Package tracking information">
        <Container className="story-content" tabIndex={-1}>
          <Row>
            <Col md={12} className="text-center">
              <h2 className="story-heading">Tracking Information</h2>
              <p
                className="tracking-id"
                aria-live="polite"
                aria-atomic="true"
              >
                Tracking ID: <span>{story.title}</span>
              </p>
            </Col>
          </Row>

          <Row className="story-details">
            <Col md={6} className="details-column">
              <h4>Package Details</h4>
              <p>
                <strong>Receiver's Name:</strong> {story.content || "N/A"}
              </p>
              <p>
                <strong>Receiver's Address:</strong> {story.address || "N/A"}
              </p>
              <p>
                <strong>Package Name:</strong> {story.packageName || "N/A"}
              </p>
              <p>
                <strong>Package Weight:</strong> {story.weight || "N/A"}
              </p>
            </Col>
            <Col md={6} className="details-column">
              <h4>Transit Information</h4>
              <p>
                <strong>Current Status:</strong> {story.status || "N/A"}
              </p>
              <p>
                <strong>Last Recorded Location:</strong> {story.location || "N/A"}
              </p>
              <p>
                <strong>Carrier:</strong> {story.carrier || "N/A"}
              </p>
              <p>
                <strong>Expected Delivery:</strong> {story.time || "N/A"}
              </p>
            </Col>
          </Row>

          <Row className="map-section">
            <Col md={12}>
              <h4>Package Location on Map</h4>
              {hasValidCoordinates ? (
                <MapContainer
                  center={[story.lat, story.long]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{
                    width: "100%",
                    maxWidth: "900px",
                    height: "320px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                    margin: "0 auto",
                  }}
                  aria-label="Map showing package current location"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                  />
                  <Marker position={[story.lat, story.long]} icon={customIcon}>
                    <Popup>
                      Package current location: {story.location || "Unknown"}
                    </Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <p className="no-location">Location information is not available.</p>
              )}
            </Col>
          </Row>

          <Row className="additional-info">
            <Col md={12}>
              <h4>Additional Information</h4>
              <p className="coordinates">
                <em>Coordinates:</em> {story.lat}, {story.long}
              </p>
              <p className="notes">
                <strong>Delivery Notes:</strong> Please ensure someone is available to receive the package.
              </p>
              <p className="notes">
                <strong>Proof of Delivery:</strong> A signature will be required upon delivery.
              </p>
              <p className="notes">
                <strong>Exception Notifications:</strong> You will receive notifications for any delivery issues.
              </p>
              <p className="notes">
                <strong>Insurance Information:</strong> Shipment insurance is required.
              </p>
              <p className="notes">
                <strong>Weather Conditions:</strong> Weather conditions may impact delivery schedules.
              </p>
              <p className="contact-info">
                <strong>Contact Information:</strong> For inquiries, contact our support at{" "}
                <a href="mailto:flashfleet.inc@gmail.com">flashfleet.inc@gmail.com</a>.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Styles>
  );
};

Story.propTypes = {
  story: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    packageName: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default Story;

const Styles = styled.div`
  /* Prevent horizontal overflow */
  .story-container {
    background-color: #f9fafb;
    padding: 40px 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  .story-content {
    background-color: #fff;
    max-width: 900px;
    margin: 0 auto;
    padding: 30px 25px;
    border-radius: 12px;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
  }

  .story-heading {
    font-size: 2.6rem;
    font-weight: 700;
    color: #222f3e;
    margin-bottom: 20px;
    text-align: center;
  }

  .tracking-id {
    font-size: 1.5rem;
    color: #1976d2;
    margin-bottom: 40px;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    span {
      color: #0d47a1;
    }
  }

  .story-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    gap: 20px;

    .details-column {
      flex: 1;
      background-color: #f4f7fc;
      padding: 25px 30px;
      border-radius: 10px;
      box-shadow: inset 0 0 10px rgba(25, 118, 210, 0.12);
      min-height: 240px;

      h4 {
        font-weight: 600;
        color: #0d47a1;
        margin-bottom: 20px;
        border-bottom: 3px solid #1976d2;
        padding-bottom: 10px;
      }

      p {
        font-size: 1.15rem;
        color: #333f4b;
        margin-bottom: 15px;

        strong {
          color: #0d47a1;
        }
      }
    }
  }

  .map-section {
    margin-bottom: 50px;

    h4 {
      font-weight: 600;
      color: #0d47a1;
      margin-bottom: 20px;
      border-bottom: 3px solid #1976d2;
      padding-bottom: 10px;
      text-align: center;
    }

    .no-location {
      font-style: italic;
      color: #888;
      text-align: center;
      margin-top: 20px;
    }
  }

  .additional-info {
    h4 {
      font-weight: 600;
      color: #0d47a1;
      margin-bottom: 20px;
      border-bottom: 3px solid #1976d2;
      padding-bottom: 10px;
      text-align: center;
    }

    .coordinates {
      font-style: italic;
      font-size: 1rem;
      color: #666;
      margin-bottom: 20px;
      text-align: center;
    }

    .notes {
      font-size: 1.15rem;
      color: #444c56;
      margin-bottom: 14px;
      line-height: 1.5;
      max-width: 750px;
      margin-left: auto;
      margin-right: auto;
    }

    .contact-info {
      font-size: 1.15rem;
      color: #1a237e;
      font-weight: 600;
      text-align: center;
      margin-top: 35px;

      a {
        color: #1976d2;
        text-decoration: underline;
        transition: color 0.3s ease;

        &:hover,
        &:focus {
          color: #0d47a1;
          outline: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .story-content {
      padding: 25px 20px;
    }

    .story-heading {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    .tracking-id {
      font-size: 1.25rem;
      margin-bottom: 30px;
    }

    .story-details {
      flex-direction: column;
      gap: 25px;

      .details-column {
        min-height: auto;
      }
    }

    .additional-info .notes {
      max-width: 100%;
      padding: 0 15px;
    }

    .map-section {
      margin-bottom: 40px;
    }
  }
`;
