import { Row, Container, Col } from "react-bootstrap";
import './PaymentMethods.css';
import paymentImage from "../Components/Assets/Images/payment-image.png";

const PaymentMethods = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center pt-5">Nuestros medios de pago</h1>
          <p className="text-center fs-4">
            Proximamente mas facilidades para que puedas abonar tus productos favoritos de la manera mas facil y rapida.
          </p>
        </Row>
        <Row className="payment-container">
          <Col className="d-flex align-items-center payment-image-container">
            <img src={paymentImage} alt="Medios de pago" />
          </Col>
          <Col className="d-flex align-items-center">
            <ul className="payment-list">
                <li>💳 Efectivo</li>
                <li>💳 Transferencia bancaria</li>
                <li>💳 Mercado Pago - Proximamente</li>
                <li>💳 Tarjetas de credito y debito- Proximamente</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentMethods;
