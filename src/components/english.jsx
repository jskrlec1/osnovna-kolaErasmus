import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../App.css";

function Početnastranica() {
  const [bgClass, setBgClass] = useState("lightblue-bg");

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      if (bgClass === "lightblue-bg") {
        setBgClass("darkblue-bg");
      } else if (bgClass === "darkblue-bg") {
        setBgClass("yellow-bg");
      } else {
        setBgClass("lightblue-bg");
      }
    }, 2000);

    return () => clearInterval(colorChangeInterval);
  }, [bgClass]);

  return (
    <Container
      className={`mt-5 ${bgClass}`}
      style={{ border: "1px solid black" }}
    >
      <div>
        <Row className="d-flex flex-column align-items-center text-center">
          <div className="kretanje">
            <img
              src={`${process.env.PUBLIC_URL}/Logo Erasmus Akreditacija škola.png`}
              alt="Erasmus Akreditacija Logo"
              style={{ maxWidth: "20%", height: "auto" }}
            />
          </div>
          <div style={{ backgroundColor: "lightskyblue" }}>
            <h1 className="mb-5  custom-fonta" style={{ color: "darkred" }}>
              Primary School Vladimira Nazora, Vinkovci, Croatia
            </h1>
          </div>

          <div
            className="trenutak-tranzicije"
            style={{ backgroundColor: "lightskyblue", color: "darkred" }}
          >
            <h1 className="mb-4 red-text custom-font">
              ERASMUS+ ACCREDITATION
            </h1>
            <h2 className="mb-5 red-text custom-font">2023 - 2027</h2>
          </div>
        </Row>
      </div>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "lightgreen",
        }}
      >
        <h4 className="text-center" style={{ color: "red" }}>
          Objectives
        </h4>

        <Row>
          <Col
            xs={12}
            sm={4}
            style={{
              padding: "22px",
              margin: "auto",
              textAlign: "center",
              wordWrap: "break-word",
            }}
          >
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25" />
              </svg>
            </h1>

            <h5>
              Development of digital skills of students and teachers to increase
              autonomy in learning and teaching.
            </h5>
          </Col>
          <Col
            xs={12}
            sm={4}
            style={{
              padding: "10px",
              margin: "auto",
              textAlign: "center",
              wordWrap: "break-word",
            }}
          >
            <br />
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1M2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2m7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0m-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
            </h1>{" "}
            <br />
            <h5>
              Improving the care for the mental health of teachers and students
              with the aim of recognizing and addressing stress and difficulties
              that teachers and students may face.
            </h5>
          </Col>

          <Col
            xs={12}
            sm={4}
            style={{
              padding: "10px",
              margin: "auto",
              textAlign: "center",
              wordWrap: "break-word",
            }}
          >
            {" "}
            <br />
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
              </svg>
            </h1>
            <h5>
              Empowering students' socio-emotional skills, particularly
              communication and self-regulation of behavior, through active
              learning and active citizenship.
            </h5>
          </Col>
        </Row>
      </div>
      <br />

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          background: "lightsalmon",
        }}
      >
        <Row className="mt-4">
          <Col xs={12} md={6} className="text-md-left">
            <h4 className="mt-2" style={{ color: "red" }}>
              Erasmus team
            </h4>
            <ul>
              <li>
                Lidija Škrlec - English language teacher, project coordinator
              </li>

              <li> Damir Burić - school principal</li>
              <li>Suzana Kurtušić - school counselor</li>
              <li>Katarina Andrić - school psychologist</li>
              <li>
                Zrinka Jurić - Croatian language teacher, school librarian
              </li>
              <li>Tatjana Brešćanski - Mathematics teacher</li>
              <li>Gabrijela Romić - English language teacher</li>
              <li>Marija Rukavina - English language teacher</li>
              <li>Julija Dujić - Music Education teacher</li>
              <li>Danijela Kuveždić - Religious Education teacher</li>
              <li>Ivan Krajinović - Croatian language and History teacher</li>

              <li>Adrijan Čačić - ICT and Physics teacher</li>
              <li>Iva Muškić - Fine Arts teacher</li>
              <li>Maja Štefanac - Primary Education and ICT</li>

              <li>Dajana Jozanović - Primary Education teacher</li>
            </ul>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <img
              src={`${process.env.PUBLIC_URL}/skola.jpg`}
              alt="Erasmus Akreditacija Logo"
              style={{ maxWidth: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </div>
      <br />

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          background: "lightsteelblue",
        }}
      >
        <Row className="mt-4">
          <Col xs={12} md={6} className="text-md-left">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
            </h1>
            <h4 style={{ color: "red" }}>School Information</h4>
            <p>
              Primary School Vladimira Nazora <br />
              Ivana Kukuljevića Sakcinskog 46a, 32100 Vinkovci, Croatia <br />
              Phone: +385 32/308-393 <br />
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
              <a
                className="btn btn-link"
                href="https://www.facebook.com/Ekids2020/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook page for Erasmus+ accreditation
              </a>
              <a
                className="btn btn-link"
                href="http://ampeu.hr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Croatian National Agency AMPEU
              </a>
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <img
              src={`${process.env.PUBLIC_URL}/Vinkovci.jpg`}
              alt="Erasmus Akreditacija Logo"
              style={{ maxWidth: "100%", height: "100%" }}
            />
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
        This publication reflects the views only of the author, and the
        Commission cannot be held responsible for any use which may be made of
        the information contained therein.
      </h5>
    </Container>
  );
}

export default Početnastranica;
