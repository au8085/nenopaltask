import React, { useState, useEffect } from "react";
import { phoneRegex,emailRegex} from "../../constant/constant"
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
import "./Modal.css";

const ModalComponent = ({ isOpen, closeModal, onSave, initialValue }) => {
  const [userData, setUserData] = useState(initialValue || {});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUserData(initialValue);
  }, [initialValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear the error when the user starts typing
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSave = () => {
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(userData.phone)) {
      setErrors((prevState) => ({
        ...prevState,
        phone: "Please enter a valid 10-digit phone number",
      }));
      return; 
    }

    // Validate email
   
    if (!emailRegex.test(userData.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address",
      }));
      return; // Don't save if there's an error
    }

    // Save data if there are no errors
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
              {errors.name && (
                <div className="text-danger">{errors.name}</div>
              )}
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
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
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
                type="tel"
                id="phone"
                name="phone"
                value={userData?.phone}
                onChange={handleChange}
                className="form-control"
                required
              />
              {errors.phone && (
                <div className="text-danger">{errors.phone}</div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3">
              <Label for="website" className="form-label">
                Website:
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
        <Button color="secondary" onClick={closeModal}>
          Cancel
        </Button>{" "}
        <Button color="primary" onClick={handleSave}>
          Ok
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;
