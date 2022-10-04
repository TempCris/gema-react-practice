import abo from "../img/lic.jpg"
import { Row,Col } from "antd";

function Contenido() {
  return (
    <Row className="cont-uno">
      <Col className="lg-top-margin"xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
      <h1>Lic Gema Ayecac</h1>
      <img src={abo} alt="aqui debe haber un a lic"/>
      </Col>  
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
      <h2>Semblanza</h2>
      <p>
          Gema Ayecac, es abogada por la Universidad Nacional Autónoma de México
          (UNAM), cuenta con estudios de Maestría por el Instituto Tecnológico
          Autónomo de México (ITAM). Cuenta con amplia capacitación en diversas
          instituciones como lo son la Universitat de Barcelona, la Universidad
          de Buenos Aires, Universidad de Cantabria, Asociación Argentina de
          Estudios Fiscales, entre otras. Cuenta con 17 años de ejercicio
          profesional en el área corporativa y fiscal. Actualmente es asociada
          de la World Compliance Association y socia fundadora de Consultores y
          Asesores Especializados, Consultoría creada en el 2010. Es Mediadora
          Privada Número 520, certificada por el Tribunal Superior de Justicia
          de la Ciudad de México Es Especialista en Mediación y Negociación por
          el Instituto de Mediación de México (IMM) y se encuentra doctorando en
          la misma institución. Miembro del Colegio Nacional de Mediadores
          Certificados (CONAMEC) Es docente en la Universidad Nacional Autónoma
          de México y ha sido ponente en diversos foros académicos y
          empresariales. Actúa también como agente capacitador registrado ante
          la Secretaría del Trabajo y Previsión Social en sus áreas de
          competencia.
      </p>
      <h3>CERTIFICACIONES</h3>
        <ul>  
          <li>
            <a href="/"> Tribunal Superior de Justicia</a>
          </li>
          <li>
            <a href="/">
              Colegio Nacional de Mediadores Certificados (CONAMEC)</a
            >
          </li>
        </ul>
      </Col>
    </Row>
  ); 
}
export default Contenido;