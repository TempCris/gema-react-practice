import iconbar from "../img/icon.png";
import { Row, Col } from "antd";

function Navbar() {
  return (
    <Row justify="space-between" className="Navbar">
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
        <section>
          <img src={iconbar} alt="no esta" />
          GEMA<span>AYECAC</span><h4>Abogados</h4>
        </section>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
        <Row>
          <Col className="bottoms" xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
              <a href="/">Inicio </a>
          </Col>
          <Col className="bottoms"xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
              <a href="/">Servicios</a>
          </Col>
          <Col className="bottoms" xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
              <a href="/">Contacto</a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default Navbar;
