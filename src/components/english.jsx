import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Početnastranica() {
  return (
    <Container className="mt-5" style={{ backgroundColor: "lightblue" }}>
      <div>
        <Row className="d-flex flex-column align-items-center text-center">
        <div className="kretanje">
            <img
              src={`${process.env.PUBLIC_URL}/Logo Erasmus Akreditacija škola.png`}
              alt="Erasmus Akreditacija Logo"
              style={{ maxWidth: "20%", height: "auto" }}
            />
          </div>
          <div style={{ backgroundColor: "red" }}>
            <h1 className="mb-5">
              Elementary School Vladimira Nazora, Vinkovci, Croatia
            </h1>
            </div>
            <div className="trenutak-tranzicije">
            <h2 className="mb-4">ERASMUS+ ACCREDITATION</h2>
            <h3 className="mb-5">2023. - 2027.</h3>
          </div>
        </Row>
      </div>
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <Row className="mt-4">
          <Col xs={12} md={6} className="text-md-left">
            <h4>Objectives:</h4>
            <ol>
              <li>
                Development of digital skills of students and teachers to
                increase autonomy in learning and teaching.
              </li>
              <li>
                Improving the care for the mental health of teachers and
                students with the aim of recognizing and addressing stress and
                difficulties that teachers and students may face.
              </li>
              <li>
                Empowering students' socio-emotional skills, particularly
                communication and self-regulation of behavior, through active
                learning and active citizenship.
              </li>
            </ol>
          </Col>
        </Row>
      </div>
      <br />
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <Row className="mt-4">
          <Col xs={12} md={6} className="text-md-left">
            <h4 className="mt-2">Erasmus team:</h4>
            <ul>
              <li>
                Lidija Škrlec -English language teacher, project coordinator
              </li>

              <li> Damir Burić - school principal</li>
              <li>Suzana Kurtušić - school counselor</li>
              <li>Katarina Andrić - school psychologist</li>
              <li>
                Zrinka Jurić - teacher of Croatian language, school librarian
              </li>
              <li>Tatjana Brešćanski - teacher of Mathematics</li>
              <li>Gabrijela Romić - English language teacher</li>
              <li>Marija Rukavina - English language teacherleskog jezika</li>
              <li>Julija Dujić - teacher of Music Education</li>
              <li>Danijela Kuveždić - Religious Education teacher</li>
              <li>
                Ivan Krajinović - teacher of Croatian Language and History
              </li>

              <li>Adrijan Čačić - teacher of Informatics and Physics</li>
              <li>Iva Muškić - teacher of Fine Arts</li>
              <li>
                Maja Štefanac - teacher of Elementary Education and Informatics
              </li>

              <li>Dajana Jozanović - teacher of Elementary Education</li>
            </ul>
          </Col>
        </Row>
      </div>
      <br />
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <Row className="mt-4">
          <Col xs={12} md={6} className="text-md-left">
            <h4>School Information:</h4>
            <p>
              Elementary School Vladimira Nazora <br />
              Ivana Kukuljevića Sakcinskog 46a, 32100 Vinkovci, Croatia <br />
              Phone: 032/308-393 <br />
              email: o.s.vladimira.nazora@vk.t-com.hr <br />
              project coordinator's email: lidija.skrlec2013@gmail.com
            </p>
            <p className="mb-4">OID: E10235317</p>
            <p>
              <a
                className="btn btn-link"
                href="http://os-vnazora-vk.skole.hr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                School website
              </a>
            </p>
            <p>
              <a
                className="btn btn-link"
                href="https://www.facebook.com/Ekids2020/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook page for Erasmus+ accreditation
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
        This publication [communication] reflects the views only of the author,
        and the Commission cannot be held responsible for any use which may be
        made of the information contained therein.
      </h5>
    </Container>
  );
}

export default Početnastranica;
