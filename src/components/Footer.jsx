import { Row,Col } from "antd"
import { LinkedinFilled, WhatsAppOutlined, YoutubeFilled, MailOutlined } from '@ant-design/icons';


function Footer() {
  return (
      <Row className="footer">
      <Col className="contact" span={24}> CONTACTANOS </Col>
      <Col className="icons" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
        <LinkedinFilled style={{fontSize: '30px', color: 'orange'}}/>
          <p>Linkedin</p>
      </Col>
      <Col className="icons" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
        <WhatsAppOutlined style={{fontSize: '30px', color: 'orange',}}/>
          <p>Whats App</p>
      </Col>
      <Col className="icons" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
        <YoutubeFilled style={{fontSize: '30px', color: 'orange'}}/>
          <p>YouTube</p>  
      </Col>
      <Col className="icons" xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
        <MailOutlined style={{fontSize: '30px', color: 'orange'}}/>
          <p>gayecac@amasbconsultores.com</p>
      </Col>
      <Col span={24}>
      <h6>Revisa nuestro Aviso de privacidad</h6>
      <h6>
        © 2021 ABOGADOS, Inc. Todos los derechos reservados. ¿Te gusta éste
        sitio? Revisa <span>forgemytech.com</span>
      </h6>
      </Col>
    </Row>
  );
}
export default Footer;
