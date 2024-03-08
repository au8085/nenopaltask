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
import "./modal.css";

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
        <div className="row mb-3">
          <div className="col-md-3">
            <Label for="name" className="form-label">
            <span className="required">*</span> Name:
            </Label>
          </div>
          <div className="col-md-9">
            <Input
              type="text"
              id="name"
              name="name"
              value={userData?.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <Label for="email" className="form-label">
            <span className="required">*</span> Email:
            </Label>
          </div>
          <div className="col-md-9">
            <Input
              type="text"
              id="email"
              name="email"
              value={userData?.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <Label for="phone" className="form-label">
            <span className="required">*</span> Phone:
            </Label>
          </div> 
          <div className="col-md-9">
            <Input
              type="text"
              id="phone"
              name="phone"
              value={userData?.phone}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <Label for="website" className="form-label">
            <span className="required">*</span> Website:
            </Label>
          </div>
          <div className="col-md-9">
            <Input
              type="text"
              id="website"
              name="website"
              value={userData?.website}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
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
