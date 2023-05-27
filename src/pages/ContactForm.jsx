import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export function ContactForm () {
  return (
    <Form>
      <Row>
        <Col>
        <Form.Label>First Name :</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <Form.Label>Last Name :</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <br></br>
      <Row>
      <Col>
      <Form.Label>Email :</Form.Label>
          <Form.Control placeholder="E-mail" />
        </Col>
        <Col>
        <Form.Label>Adresse :</Form.Label>
          <Form.Control placeholder="Adresse" />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
        <Form.Label>Message :</Form.Label>
        <textarea class="form-control" id="form-contact-message" rows="5"
         name="message" placeholder=" Message" required></textarea>
        </Col>
      </Row>
      <br></br>
      <div class="form-group clearfix">
       <button type="submit" class="btn btn-primary float-right"
       id="form-contact-submit">Envoyer un message
       </button>
         </div>
    </Form>
    

  );
}