import iconbar from "../img/icon.png";
import { Row, Col} from 'antd';

function Cards(){

    return(
    <Row className="lg-top-margin"span={24}>
        <Col className="cards" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
        <h3 className="cards">PREVENCION</h3>
        <section className="card">
                    <img src={iconbar} width="50px" alt=""/>
                    <ul>
                        <li>Cumplimiento</li>
                        <li>Auditoria</li>
                    </ul>
        </section>
        </Col>
        <Col className="cards" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
        <h3>MEDIACIÓN</h3>
        <section className="card">
                <img src={iconbar} width="50px" alt=""/>
                    <ul>
                        <li>MASC</li>
                        <li>Proceso de mediación</li>
                        <li>¿Es Mediable tu conflicto?</li>
                    </ul>
        </section>
        </Col>
        <Col className="cards" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
        <h3 className="cards">DEFENSA</h3>
        <section className="card">
            <div className="container">
                <div className="card__nombre">
                    <img src={iconbar} width="50px" alt=""/>
                    <ul>
                        <li>Defensa fiscal </li>
                    </ul>
                </div>
            </div>
        </section>
        </Col>
        <Col className="cards" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
        <h3 className="cards">CAPACITACIÓN</h3>
        <section className="card">
            <div className="container">
                <div className="card__nombre">
                    <img src={iconbar} width="50px" alt=""/>
                    <ul>
                        <li>Empresarial</li>
                        <li>Inducciones</li>
                        <li>Promociones</li>
                    </ul>
                </div>
            </div>
        </section>
        </Col>
    </Row>
    );
}
export default Cards;