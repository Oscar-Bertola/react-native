import { Row, Container, Col } from "react-bootstrap";
import shippingImage from "../Components/Assets/Images/shipping-image.png";
import './Shipping.css';

const Shipping = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center pt-5"></h1>
          
        </Row>
        <Row className="shipping-container">
          <Col className="d-flex align-items-center shipping-image-container">
            <img src={shippingImage} alt="Medios de envios" />
          </Col>
          <Col className="d-flex align-items-center">
            <ul className="shipping-list">
              <li>🛵 Correo Argentino</li>
              <li>🛵 Andreani</li>
              <li>🛵 Mercado Envios - Proximamente</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shipping;
