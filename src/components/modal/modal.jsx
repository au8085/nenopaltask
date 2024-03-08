import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const ModalComponent = ({ isOpen, closeModal, onSave, initialValue }) => {
  const [userData, setUserData] = useState(initialValue || {});

  useEffect(() => {
    setUserData(initialValue);
  }, [initialValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log(userData);
    onSave(userData);
  };

  return (
    <Modal isOpen={isOpen} backdrop={true}>
      <ModalHeader toggle={closeModal}>Edit User Details</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={userData?.name}
            onChange={handleChange}
          />

          <Label for="email">Email:</Label>
          <Input
            type="text"
            id="email"
            name="email"
            value={userData?.email}
            onChange={handleChange}
          />

          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            id="phone"
            name="phone"
            value={userData?.phone}
            onChange={handleChange}
          />

          <Label for="website">Website:</Label>
          <Input
            type="text"
            id="website"
            name="website"
            value={userData?.website}
            onChange={handleChange}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Ok
        </Button>{" "}
        <Button color="secondary" onClick={closeModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;
