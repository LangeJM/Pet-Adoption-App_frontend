import React from "react";

import { Button, Tabs, Tab, Form, Row, Col } from "react-bootstrap";

const AdminAddPets = (props) => {
  return (
    <Form className="w-50 mt-5 ml-5">
      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="E.g. Petsy" required />
          </Col>
        </Form.Group>
      </div>

      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petStatus" className="mt-3">
          <Form.Label column sm={2}>
            Status
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="E.g fostered" required />
          </Col>
        </Form.Group>
      </div>

      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petType" className="mt-3">
          <Form.Label column sm={2}>
            Type
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="E.g. cat" required />
          </Col>
        </Form.Group>
      </div>

      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petBreed" className="mt-3">
          <Form.Label column sm={2}>
            Breed
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="E.g. Siamese" required />
          </Col>
        </Form.Group>
      </div>

      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petHeight" className="mt-3">
          <Form.Label column sm={2}>
            Height
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="E.g. 30 cm" required />
          </Col>
        </Form.Group>
      </div>

      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petWeight" className="mt-3">
          <Form.Label column sm={2}>
            Weight
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="E.g. 30 kg" required />
          </Col>
        </Form.Group>
      </div>

      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petColor" className="mt-3">
          <Form.Label column sm={2}>
            Color
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="E.g. white" required />
          </Col>
        </Form.Group>
      </div>

      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petAllergies" className="mt-3">
          <Form.Label column sm={2}>
            Allergies
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="E.g. asthma" required />
          </Col>
        </Form.Group>
      </div>

      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petDiet" className="mt-3">
          <Form.Label column sm={2}>
            Diet
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="E.g. No nuts" required />
          </Col>
        </Form.Group>
      </div>

      <div className="mb-4 text-left">
        <Form.Group as={Row} controlId="petImage" className="mt-3">
          <Form.Label column sm={2}>
            Image
          </Form.Label>
          <Form.File
            className="position-relative"
            required
            name="file"
            className="mt-1 ml-3"
            // onChange={handleChange}
            // isInvalid={!!errors.file}
            // feedback={errors.file}
            id="validationFormik107"
            feedbackTooltip
          />
        </Form.Group>
      </div>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button className="float-right" type="submit">
            Add Pet
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default AdminAddPets;
