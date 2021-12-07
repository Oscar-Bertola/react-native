import Mailer from "../Components/Mail/Mailer";
import { Row, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center pt-5">¿Te quedaste con dudas?</h1>
          <p className="text-center fs-4">Envianos tu consulta</p>
        </Row>
      </Container>
      <Mailer />
    </>
  );
};

export default Contact;