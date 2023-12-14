import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
function Početnastranica() {
  return (
    <Container className="mt-5" style={{ backgroundColor: "lightblue" }}>
      <div>
        <Row className="d-flex flex-column align-items-center text-center">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/Logo Erasmus Akreditacija škola.png`}
              alt="Erasmus Akreditacija Logo"
              style={{ maxWidth: "20%", height: "auto" }}
            />
          </div>
          <div style={{ backgroundColor: "red" }}>
            <h1 className="mb-5">Osnovna škola Vladimira Nazora, Vinkovci</h1>
            <h2 className="mb-4">ERASMUS+ AKREDITACIJA</h2>
            <h3 className="mb-5">2023. - 2027.</h3>
            <Link to="/english">
              <Button variant="primary">English</Button>
            </Link>
          </div>
        </Row>
      </div>

      <div>
        <Row>
        <h4 className="mt-5">Projektne aktivnosti:</h4>
    <Link to="/2023-2024">
      <Button variant="secondary" className="mb-2 d-block" style={{ textDecoration: "none" }}>
        2023-2024
      </Button>
    </Link>
    <Link to="/2024-2025">
      <Button variant="info" className="mb-2 d-block" style={{ textDecoration: "none" }}>
        2024-2025
      </Button>
    </Link>
    <Link to="/2025-2026">
      <Button variant="warning" className="mb-2 d-block" style={{ textDecoration: "none" }}>
        2025-2026
      </Button>
    </Link>
    <Link to="/2026-2027">
      <Button variant="danger" className="mb-2 d-block" style={{ textDecoration: "none" }}>
        2026-2027
      </Button>
    </Link>
        </Row>
      </div>
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <Row className="mt-4">
          <Col xs={12} md={6} className="text-md-left">
            <h4>Ciljevi:</h4>
            <ol>
              <li>
                Razvoj digitalnih vještina učenika i učitelja u svrhu povećanja
                samostalnosti u učenju i poučavanju.
              </li>
              <li>
                Unapređenje brige o mentalnom zdravlju učitelja i učenika s
                ciljem prepoznavanja i otklanjanja stresa i teškoća s kojima se
                učitelji i učenici nose.
              </li>
              <li>
                Osnaživanje socio-emocionalnih vještina učenika, posebno
                komunikacije i samoregulacije ponašanja, primjenom aktivnog
                učenja i aktivnog građanstva.
              </li>
            </ol>
          </Col>
        </Row>
      </div>
      <br />
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <Row className="mt-4">
          <Col xs={12} md={6} className="text-md-left">
            <h5 className="mt-2">Erasmus tim:</h5>
            <ul>
              <li>
                Lidija Škrlec - učiteljica Engleskog jezika, koordinatorica
                projekta
              </li>

              <li> Damir Burić - ravnatelj škole</li>
              <li>Suzana Kurtušić - školska pedagoginja</li>
              <li>Katarina Andrić - školska psihologinja</li>
              <li>
                Zrinka Jurić - učiteljica Hrvatskog jezika, školska knjižničarka
              </li>
              <li>Tatjana Brešćanski - učiteljica Matematike</li>
              <li>Gabrijela Romić - učiteljica Engleskog jezika</li>
              <li>Marija Rukavina - učiteljica Engleskog jezika</li>
              <li>Julija Dujić - učiteljica Glazbene kulture</li>
              <li>Danijela Kuveždić - vjeroučiteljica</li>
              <li>Ivan Krajinović - učitelj Hrvatskog jezika i Povijesti</li>

              <li>Adrijan Čačić - učitelj Informatike i Fizike</li>
              <li>Iva Muškić - učiteljica Likovne kulture</li>
              <li>Maja Štefanac - učiteljica razredne nastave i Informatike</li>

              <li>Dajana Jozanović - učiteljica razredne nastave</li>
            </ul>
          </Col>
        </Row>
      </div> <br />
      <div style={{ border: "2px solid black", padding: "10px" }}>
      <Row className="mt-4">
          <Col xs={12} md={6} className="text-md-left">
            <p>Informacije o školi:</p>
            <p>
              Osnovna škola Vladimira Nazora <br />
              Ivana Kukuljevića Sakcinskog 46a, 32100 Vinkovci, Hrvatska <br />
              Telefon: 032/308-393 <br />
              email: o.s.vladimira.nazora@vk.t-com.hr <br />
              email koordinatorice projekta: lidija.skrlec2013@gmail.com
            </p>
            <p className="mb-4">OID: E10235317</p>
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
          </Col>
        </Row>
      </div>
      <div>
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
      </div>
      <h5 className="text-center text-primary mt-5">
        Ova je publikacija ostvarena uz financijsku potporu Europske komisije.
        Ona izražava isključivo stajalište njenih autora i Komisija se ne može
        smatrati odgovornom pri uporabi informacija koje se u njoj nalaze.
      </h5>
    </Container>
  );
}

export default Početnastranica;
