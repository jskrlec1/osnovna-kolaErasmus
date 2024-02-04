import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";

function DvadesettriDoDvadesetčetiri() {
  return (
    <Container
      className="mt-5"
      style={{ backgroundColor: "white", border: "1px solid black" }}
    >
      <Row className="d-flex flex-column align-items-center text-center">
        <div>
          <h1>2023. - 2024.</h1>
          <img
            src={`${process.env.PUBLIC_URL}/Logo_Erasmus_Transparent_Background.png`}
            alt="Erasmus Akreditacija Logo"
            style={{ maxWidth: "20%", height: "auto" }}
          />
        </div>
        <div style={{ backgroundColor: "lightskyblue", color: "darkred" }}>
          <h1 className=" custom-fonta" style={{ color: "darkred" }}>
            Osnovna škola Vladimira Nazora, Vinkovci
          </h1>

          <h1 className="mb-4 red-text custom-font">ERASMUS+ AKREDITACIJA</h1>
          <h2 className="mb-5 red-text custom-font">2023. - 2027.</h2>
        </div>
        <div className="button-container mt-3 mb-3">
          <Link to="/">
            <Button className="shake-button" variant="primary">
              Početna stranica
            </Button>
          </Link>
        </div>

        <div
          style={{
            borderTop: "1px solid black",
            borderBottom: "0",
            padding: "10px",
          }}
        >
          <h3> Mobilnosti učitelja:</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>

        <div
          style={{
            borderTop: "1px solid black",
            borderBottom: "0",
            padding: "10px",
          }}
        >
          <h3>Mobilnosti učenika:</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>

        <div
          className="mb-5"
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
            padding: "10px",
          }}
        >
          <p>
            <a
              className="btn btn-link"
              href="http://os-vnazora-vk.skole.hr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internetska stranica škole
            </a>
          </p>
          <p>
            <a
              className="btn btn-link"
              href="https://www.facebook.com/Ekids2020/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook stranica Erasmus+ akreditacija
            </a>
          </p>
          <p>
            <a
              className="btn btn-link"
              href="http://ampeu.hr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AMPEU
            </a>
          </p>
        </div>

        <Row className="mt-5">
          <Col xs={12} className="text-center">
            <img
              src={`${process.env.PUBLIC_URL}/E logo.png`}
              alt="Erasmus Akreditacija Logo"
              style={{ maxWidth: "30%", height: "auto" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/HR Sufinancira EUROPSKA UNIJA_POS_POS.png`}
              alt="Erasmus Akreditacija Logo"
              style={{ maxWidth: "30%", height: "auto" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/unnamed.jpg`}
              alt="Erasmus Akreditacija Logo"
              style={{ maxWidth: "30%", height: "auto" }}
            />
          </Col>
        </Row>
        <h5 className="text-center text-primary mt-5">
          Ova je publikacija ostvarena uz financijsku potporu Europske komisije.
          Ona izražava isključivo stajalište njenih autora i Komisija se ne može
          smatrati odgovornom pri uporabi informacija koje se u njoj nalaze.
        </h5>
      </Row>
    </Container>
  );
}

export default DvadesettriDoDvadesetčetiri;
